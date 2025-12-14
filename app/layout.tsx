import type React from "react"
// <CHANGE> Updated metadata for blog
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ConditionalNavbar } from "@/components/ConditionalNavbar"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://roundi.africa'),
  title: {
    default: "Delivery Management Software for SMEs in Kenya & Africa | Roundi",
    template: "%s | Roundi - Delivery Management Software"
  },
  description: "Roundi is delivery management software built for Kenyan and African SMEs. Track orders in real-time, manage riders, optimize routes for Nairobi deliveries. Used by restaurants, e-commerce, and logistics businesses across East Africa.",
  keywords: ["delivery management", "logistics software", "delivery tracking", "rider management", "route optimization", "last mile delivery", "Kenya delivery", "African logistics", "delivery app", "fleet management"],
  authors: [{ name: "Roundi" }],
  creator: "Roundi",
  publisher: "Roundi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://roundi.africa",
    title: "Delivery Management Software for Kenyan SMEs | Roundi",
    description: "Roundi is delivery management software for Kenyan and East African businesses. Track orders, manage Nairobi riders, optimize routes across Kenya.",
    siteName: "Roundi - Delivery Management Software",
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
    title: "Delivery Management Software for Kenyan SMEs | Roundi",
    description: "Roundi helps Kenyan businesses track orders, manage Nairobi riders, and optimize delivery routes across East Africa.",
    images: ["/hero-bg.webp"],
    creator: "@getroundi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roundi",
    "alternateName": "Roundi Delivery Management",
    "url": "https://roundi.africa",
    "logo": "https://roundi.africa/logos/light-green-roundi-logo.svg",
    "description": "Delivery management software for Kenyan and East African SMEs. We help businesses track orders, manage riders, and optimize delivery routes across Nairobi and Kenya.",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Protectorate Flats, Mamlaka Road",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE",
      "postalCode": "00100"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "City",
        "name": "Nairobi"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-722-235314",
      "contactType": "Customer Service",
      "email": "hello@roundi.africa",
      "availableLanguage": ["English", "Swahili"],
      "areaServed": "KE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/roundi",
      "https://www.instagram.com/getroundi/",
      "https://www.tiktok.com/@getroundi"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Roundi",
    "url": "https://roundi.africa",
    "description": "Delivery management software for Kenyan and East African SMEs",
    "publisher": {
      "@type": "Organization",
      "name": "Roundi"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://roundi.africa/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }
        `}} />
      </head>
      <body className={`font-sans antialiased`} style={{fontFamily: 'OpenRunde, system-ui, -apple-system, sans-serif'}}>
        <ConditionalNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
