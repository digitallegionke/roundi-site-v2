import type React from "react"
// <CHANGE> Updated metadata for blog
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ConditionalNavbar } from "@/components/ConditionalNavbar"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://roundi.africa'),
  title: {
    default: "Roundi - Effortless Delivery Management for African Businesses",
    template: "%s | Roundi"
  },
  description: "Transform your delivery operations with Roundi. Track orders, manage riders, optimize routes, and delight customers. Built for African businesses, from startups to established brands.",
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
    locale: "en_US",
    url: "https://roundi.africa",
    title: "Roundi - Effortless Delivery Management for African Businesses",
    description: "Transform your delivery operations with Roundi. Track orders, manage riders, optimize routes, and delight customers.",
    siteName: "Roundi",
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
    title: "Roundi - Effortless Delivery Management",
    description: "Transform your delivery operations with Roundi. Track orders, manage riders, and delight customers.",
    images: ["/hero-bg.webp"],
    creator: "@roundi",
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
    "url": "https://roundi.africa",
    "logo": "https://roundi.africa/logo.svg",
    "description": "Transform your delivery operations with Roundi. Track orders, manage riders, optimize routes, and delight customers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Protectorate Flats, Mamlaka Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-722-235314",
      "contactType": "Customer Service",
      "email": "hello@roundi.africa",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/roundi",
      "https://linkedin.com/company/roundi"
    ]
  }

  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
