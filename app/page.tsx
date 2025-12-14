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
    type: "website",
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
        "name": "What is Roundi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is a delivery management and last-mile delivery software built for Kenyan SMEs. It helps businesses plan delivery routes, track riders in real time, manage multiple deliveries, and give customers accurate ETAs — all in one platform designed for Nairobi and other Kenyan cities."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Roundi built for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi is built for small and medium businesses in Kenya that manage their own deliveries. This includes online stores, product brands, wholesalers, and shops with one or more riders handling daily deliveries."
        }
      },
      {
        "@type": "Question",
        "name": "How is Roundi different from Uber delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uber focuses on on-demand transport, not delivery operations. Roundi helps businesses manage their own riders, plan routes, track deliveries, and improve accountability — making it more cost-effective for businesses doing deliveries every day."
        }
      },
      {
        "@type": "Question",
        "name": "How is Roundi different from Leta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leta is built for large enterprises and logistics-heavy operations. Roundi is designed specifically for SMEs, with simpler setup, lower costs, and features focused on day-to-day delivery execution rather than complex logistics networks."
        }
      },
      {
        "@type": "Question",
        "name": "How does Roundi help businesses save money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roundi helps Kenyan businesses save money by: Optimizing routes to reduce fuel costs, Reducing failed and repeat deliveries, Cutting customer support calls with live tracking, Improving rider accountability and performance. Instead of hiring more riders or paying per-trip delivery fees, businesses run more efficient operations with what they already have."
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
