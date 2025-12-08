import { EarlyAccessFormContent } from '../../components/early-access-form-content';
import { Footer } from '@/components/home/Footer';
import { Users, TrendingUp, Shield, Award } from 'lucide-react';

export default function EarlyAccessFormPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Early Access Program</h1>
            <p className="text-lg text-gray-600">
              Be among the first to experience Roundi and help shape the future of delivery management.
            </p>
          </div>

          {/* Information Card and Form - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Information Card */}
            <div className="bg-white rounded-[10px] p-6 md:p-8 lg:p-10 border border-[rgba(22,35,24,0.1)]">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Why Join Early Access?</h2>

              <div className="space-y-6">
                {/* First Access */}
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Be First</h3>
                    <p className="text-gray-600 text-sm">Get exclusive early access to Roundi before the official launch.</p>
                  </div>
                </div>

                {/* Shape the Product */}
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Shape the Product</h3>
                    <p className="text-gray-600 text-sm">Your feedback will directly influence product development and features.</p>
                  </div>
                </div>

                {/* Special Pricing */}
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Special Pricing</h3>
                    <p className="text-gray-600 text-sm">Lock in exclusive early adopter pricing and benefits.</p>
                  </div>
                </div>

                {/* Priority Support */}
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Priority Support</h3>
                    <p className="text-gray-600 text-sm">Get dedicated support from our team to help you succeed.</p>
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
