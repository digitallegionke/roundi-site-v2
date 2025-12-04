'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface NavbarProps {
  variant?: 'light' | 'dark'
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isDark = variant === 'dark'

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className={isDark ? "p-[12px] md:p-[16px] lg:p-[20px]" : "p-4 sm:p-6 md:p-10"}>
      <nav className={`flex items-center justify-between px-[18px] py-[22px] rounded-lg relative ${
        isDark
          ? 'backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.42)] border border-[rgba(255,255,255,0.1)]'
          : 'bg-white border border-gray-200'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {isDark ? (
            <Image
              src="/logos/white-roundi-logo.svg"
              alt="Roundi Logo"
              width={222}
              height={63}
              className="h-10 sm:h-12 w-auto"
            />
          ) : (
            <img src="/logo.svg" alt="Roundi Logo" className="h-10 sm:h-12 w-auto" />
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex items-center flex-1 lg:ml-[72px] ${
          isDark ? 'gap-[20px] xl:gap-[30px] text-[18px] xl:text-[23px] tracking-[-0.46px]' : 'gap-6 text-base'
        }`}>
          <Link
            href="/"
            className={isDark ? "text-white font-medium hover:opacity-80 transition-opacity" : "text-gray-800 font-medium hover:text-gray-600 transition"}
          >
            Home
          </Link>
          <a
            href="/#features-section"
            className={isDark ? "text-white font-medium hover:opacity-80 transition-opacity cursor-pointer" : "text-gray-800 font-medium hover:text-gray-600 transition"}
            onClick={(e) => {
              if (isDark) {
                e.preventDefault()
                scrollToFeatures()
              }
            }}
          >
            About
          </a>
          <Link
            href="/blog"
            className={isDark ? "text-white font-medium hover:opacity-80 transition-opacity" : "text-gray-800 font-medium hover:text-gray-600 transition"}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={isDark ? "text-white font-medium hover:opacity-80 transition-opacity" : "text-gray-800 font-medium hover:text-gray-600 transition"}
          >
            Contact Us
          </Link>
          <Link
            href="/early-access-form"
            className={isDark ? "text-white font-medium hover:opacity-80 transition-opacity" : "text-gray-800 font-medium hover:text-gray-600 transition"}
          >
            Early Access
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className={`hidden lg:flex font-semibold rounded-full transition text-base ${
            isDark
              ? 'bg-[#c8e298] text-[#162318] px-[16px] md:px-[20px] lg:px-[25px] py-[10px] md:py-[12px] lg:py-[14px] hover:bg-[#b8d288]'
              : 'bg-gray-900 text-lime-300 px-8 py-2 hover:bg-gray-800'
          }`}
        >
          Talk to Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg lg:hidden z-50 ${
            isDark
              ? 'backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.9)] border border-[rgba(255,255,255,0.14)]'
              : 'bg-white border border-gray-200'
          }`}>
            <div className="flex flex-col p-[20px] gap-[16px]">
              <Link
                href="/"
                className={`font-medium text-[18px] py-[12px] transition ${
                  isDark ? 'text-white hover:opacity-70 tracking-[-0.46px]' : 'text-gray-800 hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/#features-section"
                className={`font-medium text-[18px] py-[12px] transition cursor-pointer ${
                  isDark ? 'text-white hover:opacity-70 tracking-[-0.46px]' : 'text-gray-800 hover:text-gray-600'
                }`}
                onClick={(e) => {
                  if (isDark) {
                    e.preventDefault()
                    scrollToFeatures()
                  } else {
                    setIsMenuOpen(false)
                  }
                }}
              >
                About
              </a>
              <Link
                href="/blog"
                className={`font-medium text-[18px] py-[12px] transition ${
                  isDark ? 'text-white hover:opacity-70 tracking-[-0.46px]' : 'text-gray-800 hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`font-medium text-[18px] py-[12px] transition ${
                  isDark ? 'text-white hover:opacity-70 tracking-[-0.46px]' : 'text-gray-800 hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/early-access-form"
                className={`font-medium text-[18px] py-[12px] transition ${
                  isDark ? 'text-white hover:opacity-70 tracking-[-0.46px]' : 'text-gray-800 hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Early Access
              </Link>
              <Link
                href="/contact"
                className={`font-semibold px-[20px] py-[14px] rounded-full transition text-[18px] text-center mt-[8px] ${
                  isDark
                    ? 'bg-[#c8e298] text-[#162318] hover:bg-[#b8d288] tracking-[-0.4px]'
                    : 'bg-gray-900 text-lime-300 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
