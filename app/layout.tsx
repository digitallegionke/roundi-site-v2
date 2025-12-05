import type React from "react"
// <CHANGE> Updated metadata for blog
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ConditionalNavbar } from "@/components/ConditionalNavbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Roundi - Effortless Delivery Management",
  description: "Startup hustle or seasoned brand. Deliver better, every time with Roundi's comprehensive delivery management platform.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Preloading for Safari Mobile Compatibility */}
        <link
          rel="preload"
          href="/fonts/OpenRunde-Regular-BF64ee9c6978988.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenRunde-Medium-BF64ee9c695513a.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenRunde-Semibold-BF64ee9c69788f3.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenRunde-Bold-BF64ee9c696534f.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ConditionalNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
