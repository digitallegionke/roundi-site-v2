import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { WhoThisIsFor } from '@/components/home/WhoThisIsFor';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Delivery Management Software for Kenyan SMEs & Businesses in Nairobi",
  description: "Roundi is delivery management software built for Kenyan SMEs. Track orders in real-time, manage riders across Nairobi, optimize delivery routes. Trusted by restaurants, e-commerce stores, and logistics businesses across East Africa.",
  keywords: ["delivery management software Kenya", "logistics platform Nairobi", "delivery tracking Kenya", "rider management Nairobi", "route optimization Kenya", "last mile delivery East Africa", "fleet management Kenya", "delivery app Kenyan businesses", "SME delivery software Africa", "Nairobi delivery management"],
  openGraph: {
    title: "Delivery Management Software for Kenyan SMEs | Roundi",
    description: "Roundi is delivery management software for Kenyan businesses. Track orders, manage Nairobi riders, and optimize East African deliveries.",
    url: "https://roundi.africa",
    images: [
      {
        url: "/hero-bg.webp",
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
    images: ["/hero-bg.webp"],
  },
  alternates: {
    canonical: "https://roundi.africa",
  },
};

export default function Home() {
  // Structured Data for SEO
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Roundi",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "description": "Delivery management software for Kenyan and East African SMEs. Track orders, manage riders, and optimize routes across Nairobi and Kenya.",
    "featureList": [
      "Real-time delivery tracking",
      "Rider management",
      "Route optimization for Nairobi",
      "Order management",
      "Customer notifications",
      "Analytics and reporting"
    ],
    "screenshot": "https://roundi.africa/hero-bg.webp"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's Roundi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is a delivery management platform designed to help product-based businesses streamline their delivery operations with smarter routes, dependable riders, and real-time tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Roundi for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is perfect for product-based businesses of all sizes — from startups sending out their first deliveries to established brands scaling their operations. Whether you're doing 5 or 50 deliveries a day in Nairobi or across Kenya, we make it easy."
        }
      },
      {
        "@type": "Question",
        "name": "How is Roundi different from delivery companies or pickup points?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike traditional delivery companies, Roundi gives you full control and visibility over your delivery operations. We provide the technology to optimize routes, track deliveries in real-time, and offer your customers a professional delivery experience — all without the high costs of big logistics providers."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white flex flex-col w-full min-h-screen">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          <HeroSection />
          <IntroSection />
          <FeaturesSection />
          <WhoThisIsFor />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
