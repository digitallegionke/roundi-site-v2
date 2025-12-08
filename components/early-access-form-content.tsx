'use client';

import React, { useEffect } from 'react';

export function EarlyAccessFormContent() {
  useEffect(() => {
    const form = document.getElementById('earlyAccessForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;

    // Radio button selection handling
    const radioLabels = document.querySelectorAll('.radio-label');
    radioLabels.forEach(label => {
      const input = label.querySelector('.radio-input') as HTMLInputElement;
      input.addEventListener('change', function() {
        // Remove selected class from all labels in the same group
        const groupName = this.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(radio => {
          radio.closest('.radio-label')?.classList.remove('selected');
        });
        // Add selected class to current label
        if (this.checked) {
          label.classList.add('selected');
        }
      });
    });

    // Clear error on input
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorElement = document.getElementById(this.id + 'Error');
        if (errorElement) {
          errorElement.textContent = '';
        }
      });
    });

    // Toast notification
    function showToast(message: string, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `<div class="toast-message">${message}</div>`;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    // Form validation
    function validateForm() {
      let isValid = true;
      const errors: { [key: string]: string } = {};

      const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
      const firstName = firstNameInput.value.trim();
      if (!firstName) {
        errors.firstName = 'First name is required';
        isValid = false;
      }

      const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
      const lastName = lastNameInput.value.trim();
      if (!lastName) {
        errors.lastName = 'Last name is required';
        isValid = false;
      }

      const businessNameInput = document.getElementById('businessName') as HTMLInputElement;
      const businessName = businessNameInput.value.trim();
      if (!businessName) {
        errors.businessName = 'Business name is required';
        isValid = false;
      }

      const businessEmailInput = document.getElementById('businessEmail') as HTMLInputElement;
      const businessEmail = businessEmailInput.value.trim();
      if (!businessEmail) {
        errors.businessEmail = 'Business email is required';
        isValid = false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(businessEmail)) {
          errors.businessEmail = 'Please enter a valid email address';
          isValid = false;
        }
      }

      const phoneNumberInput = document.getElementById('phoneNumber') as HTMLInputElement;
      const phoneNumber = phoneNumberInput.value.trim();
      if (!phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
        isValid = false;
      }

      // Display errors
      Object.keys(errors).forEach(field => {
        const input = document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement;
        const errorElement = document.getElementById(field + 'Error');
        if (input && errorElement) {
          input.classList.add('error');
          errorElement.textContent = errors[field];
        }
      });

      return isValid;
    }

    // Form submission
    form.addEventListener('submit', async function(e: Event) {
      e.preventDefault();

      if (!validateForm()) {
        showToast('Please fix the errors in the form', 'error');
        return;
      }

      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<div class="spinner"></div>Submitting...';

      // Collect form data
      const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
      const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
      const formData = {
        fullName: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        businessName: (document.getElementById('businessName') as HTMLInputElement).value,
        businessEmail: (document.getElementById('businessEmail') as HTMLInputElement).value,
        phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
        businessType: (document.querySelector('input[name="businessType"]:checked') as HTMLInputElement)?.value || '',
        deliveriesPerDay: (document.querySelector('input[name="deliveriesPerDay"]:checked') as HTMLInputElement)?.value || '',
        deliveryTeamSize: (document.querySelector('input[name="deliveryTeamSize"]:checked') as HTMLInputElement)?.value || '',
        biggestChallenge: (document.getElementById('biggestChallenge') as HTMLTextAreaElement).value
      };

      // Send to MailerLite via serverless function
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Subscription failed:', errorData);
          throw new Error(errorData.message || 'Subscription failed');
        }

        showToast('Thank you for signing up! We\'ll be in touch soon.', 'success');

        // Reset form
        form.reset();
        radioLabels.forEach(label => label.classList.remove('selected'));
      } catch (error) {
        console.error('Error:', error);
        showToast('Something went wrong. Please try again.', 'error');
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
      }
    });
  }, []);

  return (
    <div className="form-container">
      <style jsx global>{`
        .form-container * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .form-container {
          width: 100%;
          max-width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .early-access-form {
          background: transparent;
          padding: 0;
        }

        .section {
          margin-bottom: 64px;
        }

        @media (min-width: 768px) {
          .section {
            margin-bottom: 80px;
          }
        }

        .section-title {
          color: #000;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 28px;
            margin-bottom: 56px;
          }
        }

        .form-group {
          margin-bottom: 32px;
        }

        .form-label {
          display: block;
          font-size: 15px;
          letter-spacing: -0.01em;
          color: #1a1a1a;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .required {
          color: #ef4444;
          margin-left: 2px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: white;
          font-size: 14px;
          letter-spacing: -0.1504px;
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          transition: all 0.15s;
          font-family: inherit;
          color: #1a1a1a;
        }

        .form-input {
          height: 48px;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #717182;
        }

        .form-input:hover,
        .form-textarea:hover {
          border-color: #d1d5db;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #162318;
          box-shadow: 0 0 0 1px #162318;
        }

        .form-input.error,
        .form-textarea.error {
          border-color: #ef4444;
        }

        .form-input.error:focus,
        .form-textarea.error:focus {
          box-shadow: 0 0 0 1px #ef4444;
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
          height: auto;
        }

        .error-message {
          color: #ef4444;
          font-size: 14px;
          margin-top: 4px;
        }

        .helper-text {
          font-size: 13px;
          color: #717182;
          letter-spacing: -0.1504px;
          margin-top: 4px;
          line-height: 1.5;
        }

        .radio-group {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 32px;
        }

        @media (min-width: 640px) {
          .radio-group.business-types {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .radio-group.delivery-ranges {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 640px) {
          .radio-group.delivery-ranges {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .radio-group.team-sizes {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 640px) {
          .radio-group.team-sizes {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .radio-label {
          position: relative;
          display: flex;
          align-items: center;
          padding: 18px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid transparent;
          background: #fafafa;
        }

        .radio-label:hover {
          background: #f5f5f5;
        }

        .radio-label.selected {
          border-color: #1a1a1a;
          background: #fff;
        }

        .radio-input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .radio-button {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 14px;
          flex-shrink: 0;
          transition: all 0.2s ease;
          background: #fff;
        }

        .radio-label.selected .radio-button {
          border-color: #1a1a1a;
          border-width: 2px;
        }

        .radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1a1a1a;
          display: none;
        }

        .radio-label.selected .radio-dot {
          display: block;
        }

        .radio-text {
          font-size: 15px;
          letter-spacing: -0.01em;
          color: #1a1a1a;
          font-weight: 500;
        }

        .radio-label.simple {
          justify-content: center;
          padding: 18px;
        }

        .radio-label.simple .radio-button {
          display: none;
        }

        .submit-container {
          display: flex;
          justify-content: flex-start;
          padding-top: 24px;
        }

        .submit-button {
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 18px 48px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          letter-spacing: -0.01em;
        }

        .submit-button:hover:not(:disabled) {
          background: #000;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 10px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .toast {
          position: fixed;
          top: 24px;
          right: 24px;
          background: white;
          padding: 18px 24px;
          border-radius: 12px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
          border: 1px solid #e5e5e5;
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .toast.success {
          border-left: 4px solid #10b981;
        }

        .toast.error {
          border-left: 4px solid #ef4444;
        }

        .toast-message {
          font-size: 15px;
          color: #1a1a1a;
          font-weight: 500;
        }
      `}</style>

      <form id="earlyAccessForm" className="early-access-form">
        {/* Contact Information Section */}
        <div className="section">
          <h2 className="section-title">Contact Information</h2>

          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              placeholder="Enter your first name"
            />
            <div id="firstNameError" className="error-message"></div>
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              placeholder="Enter your last name"
            />
            <div id="lastNameError" className="error-message"></div>
          </div>

          <div className="form-group">
            <label htmlFor="businessName" className="form-label">
              Business Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="form-input"
              placeholder="Enter your business name"
            />
            <div id="businessNameError" className="error-message"></div>
          </div>

          <div className="form-group">
            <label htmlFor="businessEmail" className="form-label">
              Business Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              className="form-input"
              placeholder="your.email@business.com"
            />
            <div id="businessEmailError" className="error-message"></div>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number<span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input"
              placeholder="+254 700 000 000"
            />
            <div id="phoneNumberError" className="error-message"></div>
          </div>
        </div>

        {/* Business Details Section */}
        <div className="section">
          <h2 className="section-title">Business Details</h2>

          <div className="form-group">
            <label className="form-label">Business Type</label>
            <div className="radio-group business-types" id="businessTypeGroup">
              <label className="radio-label">
                <input type="radio" name="businessType" value="Online Store" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Online Store</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Restaurant / Café" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Restaurant / Café</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Bakery" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Bakery</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Electronics / Mobile Shop" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Electronics / Mobile Shop</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Courier / Logistics Company" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Courier / Logistics Company</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Fashion / Clothing Store" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Fashion / Clothing Store</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Bookstore / Stationery Shop" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Bookstore / Stationery Shop</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Beauty / Cosmetics Shop" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Beauty / Cosmetics Shop</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Hardware / Construction Supplies" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Hardware / Construction Supplies</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Water Delivery Business" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Water Delivery Business</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Alcohol / Beverages Distributor" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Alcohol / Beverages Distributor</span>
              </label>
              <label className="radio-label">
                <input type="radio" name="businessType" value="Fresh Produce / Farmers' Outlet" className="radio-input" />
                <div className="radio-button"><div className="radio-dot"></div></div>
                <span className="radio-text">Fresh Produce / Farmers' Outlet</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Number of Deliveries per day<span className="required">*</span>
            </label>
            <div className="radio-group delivery-ranges" id="deliveriesGroup">
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="1-5" className="radio-input" />
                <span className="radio-text">1-5</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="6-9" className="radio-input" />
                <span className="radio-text">6-9</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="10-15" className="radio-input" />
                <span className="radio-text">10-15</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="10-30" className="radio-input" />
                <span className="radio-text">10-30</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="31-50" className="radio-input" />
                <span className="radio-text">31-50</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveriesPerDay" value="51+" className="radio-input" />
                <span className="radio-text">51+</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Delivery Team Size (Riders/Drivers)<span className="required">*</span>
            </label>
            <div className="radio-group team-sizes" id="teamSizeGroup">
              <label className="radio-label simple">
                <input type="radio" name="deliveryTeamSize" value="0" className="radio-input" />
                <span className="radio-text">0</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveryTeamSize" value="1-2" className="radio-input" />
                <span className="radio-text">1-2</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveryTeamSize" value="3-5" className="radio-input" />
                <span className="radio-text">3-5</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveryTeamSize" value="6-10" className="radio-input" />
                <span className="radio-text">6-10</span>
              </label>
              <label className="radio-label simple">
                <input type="radio" name="deliveryTeamSize" value="11+" className="radio-input" />
                <span className="radio-text">11+</span>
              </label>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="section">
          <h2 className="section-title">Additional Information</h2>

          <div className="form-group">
            <label htmlFor="biggestChallenge" className="form-label">
              Biggest Delivery Challenge
            </label>
            <textarea
              id="biggestChallenge"
              name="biggestChallenge"
              className="form-textarea"
              placeholder="Tell us about your biggest delivery challenges..."
            ></textarea>
            <p className="helper-text">
              Example: High costs, Late deliveries, Customer complaints, etc.
            </p>
          </div>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button" id="submitBtn">
            Submit
          </button>
        </div>
      </form>

      {/* Toast elements - render them outside the form if they are to be truly global */}
      <div id="toastContainer" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}></div>

    </div>
  );
}
