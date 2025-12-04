import { useState } from "react";
import { SharedLayout } from "../components/SharedLayout";
import { CTASection } from "../components/CTASection";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";

function ContactHero() {
  return (
    <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[52px] md:px-[56px] lg:px-[58px]">
        <div className="text-center">
          <h1 className="font-['Open_Runde:Semibold',sans-serif] text-[36px] md:text-[48px] lg:text-[60px] text-[#162318] tracking-[-1.8px] mb-[16px]">
            Contact Us
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-[#162318] opacity-70 max-w-[600px] mx-auto">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex-1">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] md:text-[28px] lg:text-[32px] text-[#162318] mb-[16px]">
        Get in Touch
      </h2>
      <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70 mb-[32px]">
        Have a question or want to learn more? Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-[24px]">
        {/* Full Name */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] mb-[8px]">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full px-[16px] py-[12px] border border-[rgba(22,35,24,0.2)] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] placeholder:text-[rgba(22,35,24,0.4)] focus:outline-none focus:ring-2 focus:ring-[#c8e298] focus:border-transparent transition-all"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] mb-[8px]">
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@example.com"
            required
            className="w-full px-[16px] py-[12px] border border-[rgba(22,35,24,0.2)] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] placeholder:text-[rgba(22,35,24,0.4)] focus:outline-none focus:ring-2 focus:ring-[#c8e298] focus:border-transparent transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] mb-[8px]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 700 000 000"
            className="w-full px-[16px] py-[12px] border border-[rgba(22,35,24,0.2)] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] placeholder:text-[rgba(22,35,24,0.4)] focus:outline-none focus:ring-2 focus:ring-[#c8e298] focus:border-transparent transition-all"
          />
          <p className="font-['Inter:Regular',sans-serif] text-[12px] md:text-[13px] text-[rgba(22,35,24,0.6)] mt-[6px]">
            Optional - We'll only call if necessary
          </p>
        </div>

        {/* Subject */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] mb-[8px]">
            Subject*
          </label>
          <div className="relative">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-[16px] py-[12px] border border-[rgba(22,35,24,0.2)] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#c8e298] focus:border-transparent transition-all cursor-pointer"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#162318] opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] mb-[8px]">
            Message*
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your inquiry..."
            required
            rows={5}
            className="w-full px-[16px] py-[12px] border border-[rgba(22,35,24,0.2)] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] placeholder:text-[rgba(22,35,24,0.4)] focus:outline-none focus:ring-2 focus:ring-[#c8e298] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#162318] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[17px] lg:text-[18px] px-[32px] py-[14px] md:py-[16px] lg:py-[18px] rounded-[50px] hover:bg-[#0f1a10] transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex-1">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] md:text-[28px] lg:text-[32px] text-[#162318] mb-[32px]">
        Contact Information
      </h2>

      <div className="space-y-[24px]">
        {/* Phone */}
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#c8e298] flex items-center justify-center">
            <Phone className="w-[20px] h-[20px] text-[#162318]" />
          </div>
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#162318] mb-[4px]">
              Call
            </p>
            <a 
              href="tel:+234722333344"
              className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70 hover:opacity-100 transition-opacity"
            >
              +234 722 333344
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#c8e298] flex items-center justify-center">
            <Mail className="w-[20px] h-[20px] text-[#162318]" />
          </div>
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#162318] mb-[4px]">
              Email
            </p>
            <a 
              href="mailto:hello@roundi.africa"
              className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70 hover:opacity-100 transition-opacity"
            >
              hello@roundi.africa
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#c8e298] flex items-center justify-center">
            <MapPin className="w-[20px] h-[20px] text-[#162318]" />
          </div>
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#162318] mb-[4px]">
              Address
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70">
              Professional Plaza, Mambolo Road, Mararba, Kenya
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#c8e298] flex items-center justify-center">
            <Clock className="w-[20px] h-[20px] text-[#162318]" />
          </div>
          <div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[17px] lg:text-[18px] text-[#162318] mb-[4px]">
              Hours
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70">
              Mon - Fri: 8:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's Roundi?",
      answer: "Roundi is a comprehensive delivery service platform that helps businesses manage their delivery operations efficiently. We provide tools for order management, driver coordination, and real-time tracking to streamline your delivery process."
    },
    {
      question: "Who is Roundi for?",
      answer: "Roundi is designed for businesses of all sizes that need reliable delivery services. Whether you're a restaurant, retail store, e-commerce business, or logistics company, Roundi can help you manage and scale your delivery operations."
    },
    {
      question: "How is Roundi different from delivery companies or pickup points?",
      answer: "Unlike traditional delivery companies or pickup points, Roundi gives you full control over your delivery operations. You can manage your own fleet, set your own rates, and maintain direct relationships with your customers while we provide the technology infrastructure."
    },
    {
      question: "Is my data safe?",
      answer: "Yes, absolutely. We take data security very seriously. All data is encrypted in transit and at rest, and we comply with industry-standard security practices. Your customer information and business data are protected with enterprise-grade security measures."
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[60px]">
        <div className="mb-[40px] md:mb-[50px] lg:mb-[60px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-60 mb-[12px] uppercase tracking-[1px]">
            FAQs
          </p>
          <h2 className="font-['Open_Runde:Semibold',sans-serif] text-[32px] md:text-[42px] lg:text-[52px] text-[#162318] tracking-[-1.2px]">
            Common questions & answers
          </h2>
        </div>

        <div className="space-y-[16px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] border border-[rgba(22,35,24,0.1)] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-[20px] md:p-[24px] lg:p-[28px] text-left hover:bg-[rgba(200,226,152,0.1)] transition-colors"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#162318] pr-[20px]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 w-[24px] h-[24px] text-[#162318] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-[20px] md:px-[24px] lg:px-[28px] pb-[20px] md:pb-[24px] lg:pb-[28px]">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#162318] opacity-70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <SharedLayout>
      <ContactHero />
      
      {/* Contact Info and Form Section */}
      <div className="w-full bg-white py-[40px] md:py-[60px] lg:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[60px]">
          <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[80px]">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      <FAQSection />
      <CTASection />
    </SharedLayout>
  );
}