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
    icon: "/icon.png",
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
        <meta name="format-detection" content="telephone=no" />
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
