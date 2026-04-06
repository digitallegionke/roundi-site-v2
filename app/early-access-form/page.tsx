import { EarlyAccessFormContent } from '../../components/early-access-form-content';
import { Footer } from '@/components/home/Footer';
import { Users, TrendingUp, Shield, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Early Access - Build Your Foundation with Roundi",
  description: "Join Roundi's early access program and be among the first to access our logistics platform for growth. Smart routing, real-time visibility, and operational tools — from your first order to your biggest market.",
  keywords: ["Roundi early access", "logistics platform Africa", "logistics platform beta", "African logistics early access", "Roundi signup"],
  openGraph: {
    title: "Join Early Access - Build Your Foundation with Roundi",
    description: "Be among the first to access Roundi's logistics platform for growth. Exclusive benefits and special pricing available.",
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Build Your Foundation Early</h1>
            <p className="text-base md:text-lg text-gray-600">
              Be among the first to access the logistics platform that moves with your business — from your first order to your biggest market.
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
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Build Your Foundation Early</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Access the full platform before launch — smart routing, real-time visibility, and operational tools.</p>
                  </div>
                </div>

                {/* Shape the Product */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Shape the Platform</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Help us build the platform that African businesses deserve. Your feedback shapes what we build next.</p>
                  </div>
                </div>

                {/* Special Pricing */}
                <div className="flex items-start gap-3 md:gap-4">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Preferred Pricing</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Lock in exclusive early adopter pricing that grows with you, not against you.</p>
                  </div>
                </div>

                {/* Priority Support */}
                <div className="flex items-start gap-3 md:gap-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Build Together</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Dedicated support from our team as you scale. We're invested in how far you go.</p>
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
