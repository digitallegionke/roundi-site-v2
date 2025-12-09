import { EarlyAccessFormContent } from '../../components/early-access-form-content';
import { Footer } from '@/components/home/Footer';
import { Users, TrendingUp, Shield, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Early Access - Be First to Experience Roundi",
  description: "Join Roundi's early access program and be among the first to transform your delivery operations. Get exclusive benefits, special pricing, and help shape the future of delivery management in Africa.",
  keywords: ["Roundi early access", "delivery software beta", "logistics platform early bird", "delivery management trial", "Roundi signup"],
  openGraph: {
    title: "Join Early Access - Be First to Experience Roundi",
    description: "Be among the first to transform your delivery operations with Roundi. Exclusive benefits and special pricing available.",
    url: "https://roundi.africa/early-access-form",
  },
  alternates: {
    canonical: "https://roundi.africa/early-access-form",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EarlyAccessFormPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen py-8 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Join Our Early Access Program</h1>
            <p className="text-base md:text-lg text-gray-600">
              Be among the first to experience Roundi and help shape the future of delivery management.
            </p>
          </div>

          {/* Information Card and Form - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Information Card */}
            <div className="bg-white rounded-[10px] p-5 md:p-8 lg:p-10 border border-[rgba(22,35,24,0.1)]">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Why Join Early Access?</h2>

              <div className="space-y-5 md:space-y-6">
                {/* First Access */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Be First</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Get exclusive early access to Roundi before the official launch.</p>
                  </div>
                </div>

                {/* Shape the Product */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Shape the Product</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Your feedback will directly influence product development and features.</p>
                  </div>
                </div>

                {/* Special Pricing */}
                <div className="flex items-start gap-3 md:gap-4">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Special Pricing</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Lock in exclusive early adopter pricing and benefits.</p>
                  </div>
                </div>

                {/* Priority Support */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Priority Support</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Get dedicated support from our team to help you succeed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Wrapper */}
            <div className="form-container">
              <EarlyAccessFormContent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
