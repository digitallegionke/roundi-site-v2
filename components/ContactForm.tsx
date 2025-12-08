'use client';

import React, { FormEvent, ChangeEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-message">${message}</div>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      showToast('Thank you! Your message has been sent successfully.', 'success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Error:', error);
      showToast('Something went wrong. Please try again or email us directly.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

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
          font-family: 'OpenRunde', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: 10px;
          border: 1px solid rgba(22, 35, 24, 0.1);
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 24px;
          }
        }

        .form-title {
          font-size: 24px;
          font-weight: 600;
          color: #000;
          margin-bottom: 8px;
        }

        .form-description {
          font-size: 15px;
          color: #717182;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 24px;
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
          color: #fb2c36;
        }

        .form-input,
        .form-select,
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

        .form-input,
        .form-select {
          height: 48px;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #717182;
        }

        .form-input:hover,
        .form-select:hover,
        .form-textarea:hover {
          border-color: #d1d5db;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #162318;
          box-shadow: 0 0 0 1px #162318;
        }

        .form-input.error,
        .form-select.error,
        .form-textarea.error {
          border-color: #ef4444;
        }

        .form-input.error:focus,
        .form-select.error:focus,
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

        .submit-container {
          display: flex;
          justify-content: flex-start;
          padding-top: 8px;
        }

        .submit-button {
          background: #162318;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          letter-spacing: -0.1504px;
        }

        .submit-button:hover:not(:disabled) {
          background: #0f1811;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .toast {
          position: fixed;
          top: 24px;
          right: 24px;
          background: white;
          padding: 16px 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
          border: 1px solid #e5e7eb;
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
          font-size: 14px;
          color: #1a1a1a;
          font-weight: 500;
        }
      `}</style>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-description">
          Have a question or want to learn more? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input ${touched.name && errors.name ? 'error' : ''}`}
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.name && errors.name && (
            <div className="error-message">{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
        </div>

        {/* Phone (Optional) */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="+254 700 000 000"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="helper-text">Optional - We'll only call if necessary</p>
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject<span className="required">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            className={`form-select ${touched.subject && errors.subject ? 'error' : ''}`}
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales Question</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          {touched.subject && errors.subject && (
            <div className="error-message">{errors.subject}</div>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message<span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-textarea ${touched.message && errors.message ? 'error' : ''}`}
            placeholder="Tell us more about your inquiry..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {touched.message && errors.message && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
