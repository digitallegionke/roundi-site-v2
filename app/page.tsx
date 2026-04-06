import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { WhoThisIsFor } from '@/components/home/WhoThisIsFor';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/home/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roundi - Logistics Platform for African Product Businesses",
  description: "Roundi gives African product businesses smart routing, real-time visibility, and operational tools — the logistics platform to operate reliably today and scale boldly tomorrow.",
  keywords: ["logistics platform Africa", "delivery platform Kenya", "smart routing Nairobi", "logistics operating system", "product business logistics", "African logistics platform", "delivery platform Kenya", "logistics scale Africa", "Roundi logistics", "real-time delivery visibility"],
  openGraph: {
    title: "Roundi - The Platform to Go as Far as You Dare",
    description: "Logistics platform for African product businesses. Smart routing, real-time visibility, and operational tools — moving with your business from your first order to your biggest market.",
    url: "https://roundi.africa",
    type: "website",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Roundi Logistics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roundi - The Platform to Go as Far as You Dare",
    description: "Logistics infrastructure platform for African product businesses. Smart routing, real-time visibility, and operational tools.",
    images: ["/hero-bg.webp"],
  },
  alternates: {
    canonical: "https://roundi.africa",
  },
  other: {
    'google-site-verification': '',
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
    "description": "Logistics platform for African product businesses. Smart routing, real-time visibility, and operational tools — from your first order to your biggest market.",
    "featureList": [
      "Smart routing for African roads",
      "Real-time visibility across every order",
      "Route optimization for African roads",
      "Live tracking and ETAs",
      "Operational tools that scale",
      "Performance analytics and insights"
    ],
    "screenshot": "https://roundi.africa/hero-bg.webp"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Roundi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is a logistics platform that gives African product businesses smart routing, real-time visibility, and operational tools — everything needed to operate reliably today and scale boldly tomorrow. We move with your business from your first order to your biggest market."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Roundi built for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is built for ambitious product-based businesses that rely on delivery and are hungry to grow — including D2C brands, boutique manufacturers, cosmetics & skincare brands, fashion & apparel, food & beverage, and SMEs scaling nationwide or into new markets."
        }
      },
      {
        "@type": "Question",
        "name": "How is Roundi different from Uber delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uber is a consumer-focused marketplace where brands are just order sources. Roundi is a logistics platform built for product brands — smart routing, real-time visibility, and operational tools that scale from your first order to your biggest market."
        }
      },
      {
        "@type": "Question",
        "name": "How is Roundi different from Leta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leta is built for large enterprises. Roundi is a platform for ambitious product brands — smart routing and real-time visibility that moves with your business. Faster to launch, built to scale, designed for where you're going next."
        }
      },
      {
        "@type": "Question",
        "name": "How does Roundi help businesses grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi builds the foundation for growth by providing: Smart routing that scales with order volume, Real-time visibility that builds customer trust, Operational tools that grow with your business, Data and insights for better decisions. You're not just managing deliveries — you're laying the rails to go as far as you dare."
        }
      },
      {
        "@type": "Question",
        "name": "Does Roundi offer real-time rider tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Roundi provides real-time rider tracking and live delivery updates so businesses can monitor deliveries and customers receive accurate ETAs — reducing 'Where is my order?' calls."
        }
      },
      {
        "@type": "Question",
        "name": "Is Roundi available across Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is built Nairobi-first, but works anywhere in Kenya where businesses manage deliveries using riders."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Roundi cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi will offer affordable pricing designed for Kenyan SMEs, unlike enterprise logistics tools or per-delivery platforms. Pricing details will be shared at launch, with early access users receiving priority benefits."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://roundi.africa"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
