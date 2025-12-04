import { EarlyAccessFormContent } from '../../components/early-access-form-content';
import { Footer } from '@/components/home/Footer';

export default function EarlyAccessFormPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen bg-background px-10">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto py-12 sm:py-16 sm:pb-[0]">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Welcome to our Early Access
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join the early access to get early access to Roundi — the platform that makes deliveries cheaper, more reliable, and fully transparent.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-7xl mx-auto py-8">
          <EarlyAccessFormContent />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
