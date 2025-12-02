'use client'

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <nav className="flex items-center justify-between px-[18px] py-[22px] bg-white border border-gray-200 rounded-lg relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Roundi Logo" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 flex-1 lg:ml-[72px]">
          <a
            href="https://roundi.framer.website"
            className="text-gray-800 font-medium text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            href="https://roundi.framer.website/#about"
            className="text-gray-800 font-medium text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <Link href="/blog" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            Blog
          </Link>
          <a
            href="https://roundi.framer.website/contact-v2"
            className="text-gray-800 font-medium text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
          <Link href="/early-access-form" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            Early Access
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <a
          href="https://roundi.framer.website/contact-v2"
          className="hidden lg:flex bg-gray-900 text-lime-300 font-semibold px-8 py-2 rounded-full hover:bg-gray-800 transition text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to Us
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg lg:hidden z-50">
            <div className="flex flex-col p-4">
              <a
                href="https://roundi.framer.website"
                className="text-gray-800 font-medium text-base hover:text-gray-600 transition py-3 border-b border-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="https://roundi.framer.website/#about"
                className="text-gray-800 font-medium text-base hover:text-gray-600 transition py-3 border-b border-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link
                href="/blog"
                className="text-gray-800 font-medium text-base hover:text-gray-600 transition py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://roundi.framer.website/contact-v2"
                className="text-gray-800 font-medium text-base hover:text-gray-600 transition py-3 border-b border-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </a>
              <Link
                href="/early-access-form"
                className="text-gray-800 font-medium text-base hover:text-gray-600 transition py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Early Access
              </Link>
              <a
                href="https://roundi.framer.website/contact-v2"
                className="bg-gray-900 text-lime-300 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition text-base text-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Talk to Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
