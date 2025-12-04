import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
