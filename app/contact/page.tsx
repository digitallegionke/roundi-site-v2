import ContactForm from '@/components/ContactForm';
import { Footer } from '@/components/home/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Build Your Foundation with Roundi",
  description: "Questions about Roundi's logistics infrastructure platform? Contact our team for demos, support, or partnership opportunities. We're here to help you build the foundation to go as far as you dare.",
  keywords: ["contact Roundi", "logistics infrastructure demo", "Roundi support", "logistics platform partnership", "African logistics platform contact"],
  openGraph: {
    title: "Contact Us - Build Your Foundation with Roundi",
    description: "Have questions about Roundi? Contact our team for demos, support, or partnership opportunities.",
    url: "https://roundi.africa/contact",
  },
  alternates: {
    canonical: "https://roundi.africa/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Your Foundation</h1>
            <p className="text-lg text-gray-600">
              Ready to scale your product business with logistics infrastructure built for where you're going next? Let's talk.
            </p>
          </div>

          {/* Contact Information Card and Form - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div className="bg-white rounded-[10px] p-6 md:p-8 lg:p-10 border border-[rgba(22,35,24,0.1)]">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">+254 722 235314</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">hello@roundi.africa</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Protectorate Flats, Mamlaka Road, Nairobi, Kenya</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Wrapper */}
            <div className="form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
