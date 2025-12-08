import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roundi - Transform Your Delivery Operations",
  description: "Effortless delivery management for African businesses. Track orders in real-time, manage riders, optimize routes, and delight customers. From startup hustle to established brand, deliver better every time.",
  keywords: ["delivery management system", "logistics platform Kenya", "delivery tracking software", "rider management app", "route optimization", "last mile delivery Africa", "fleet management Kenya", "delivery app for businesses"],
  openGraph: {
    title: "Roundi - Transform Your Delivery Operations",
    description: "Effortless delivery management for African businesses. Track orders, manage riders, and delight customers.",
    url: "https://roundi.africa",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Roundi Delivery Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roundi - Transform Your Delivery Operations",
    description: "Effortless delivery management for African businesses. Track orders, manage riders, and delight customers.",
    images: ["/hero-bg.png"],
  },
  alternates: {
    canonical: "https://roundi.africa",
  },
};

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
