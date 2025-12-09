'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Menu as MenuIcon, X } from "lucide-react"

interface NavbarProps {
  variant?: 'light' | 'dark'
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isDark = variant === 'dark'
  const bgClass = isDark ? 'bg-[rgba(22,35,24,0.42)]' : 'bg-white'
  const borderClass = isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-200'
  const textClass = isDark ? 'text-white' : 'text-gray-800'
  const hoverTextClass = isDark ? 'hover:text-white/80' : 'hover:text-gray-600'
  const backdropClass = isDark ? 'backdrop-blur-[7px] backdrop-filter' : ''
  const mobileMenuBg = isDark ? 'bg-[rgba(22,35,24,0.9)]' : 'bg-white'
  const mobileMenuBorder = isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-200'

  const scrollToAbout = () => {
    // If not on homepage, navigate to homepage with hash
    if (pathname !== '/') {
      router.push('/#about-section')
      setIsMenuOpen(false)
      return
    }

    // If on homepage, scroll to about section
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className={`p-4 sm:p-6 md:p-10 ${isDark ? '' : ''}`}>
      <nav className={`flex items-center justify-between px-[18px] py-[22px] ${bgClass} border ${borderClass} rounded-lg relative ${backdropClass}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {isDark ? (
            <img src="/logos/white-roundi-logo.svg" alt="Roundi Logo" className="h-10 sm:h-12 w-auto" />
          ) : (
            <img src="/logo.svg" alt="Roundi Logo" className="h-10 sm:h-12 w-auto" />
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex items-center gap-6 flex-1 lg:ml-[72px] font-medium text-base ${textClass} transition`}>
          <Link
            href="/"
            className={`${hoverTextClass} transition ${pathname === '/' ? 'border-b border-current opacity-60' : ''}`}
          >
            Home
          </Link>
          <a
            href="/#about-section"
            onClick={(e) => {
              e.preventDefault()
              scrollToAbout()
            }}
            className={`${hoverTextClass} transition`}
          >
            About
          </a>
          <Link
            href="/blog"
            className={`${hoverTextClass} transition ${pathname.startsWith('/blog') ? 'border-b border-current opacity-60' : ''}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${hoverTextClass} transition ${pathname === '/contact' ? 'border-b border-current opacity-60' : ''}`}
          >
            Contact Us
          </Link>
          <Link
            href="/early-access-form"
            className={`${hoverTextClass} transition ${pathname === '/early-access-form' ? 'border-b border-current opacity-60' : ''}`}
          >
            Early Access
          </Link>
        </div>

        {/* Desktop CTA Button */}
        {isDark ? (
          <Link
            href="/early-access-form"
            className="hidden lg:flex bg-[#c8e298] text-[#162318] font-semibold px-8 py-2 rounded-full hover:bg-[#b8d288] transition text-base"
          >
            Join Early Access
          </Link>
        ) : (
          <Link
            href="/early-access-form"
            className="hidden lg:flex bg-[#162318] text-[#c8e298] font-semibold px-8 py-2 rounded-full hover:bg-[#1a2a1f] transition text-base"
          >
            Join Early Access
          </Link>
        )}

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          ) : (
            <MenuIcon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full right-0 mt-2 w-80 ${mobileMenuBg} border ${mobileMenuBorder} rounded-lg shadow-lg lg:hidden z-50 ${isDark ? 'backdrop-blur-[7px] backdrop-filter' : ''}`}>
            <div className="flex flex-col p-4">
              <Link
                href="/"
                className={`${textClass} font-medium text-base hover:opacity-70 transition py-3 border-b ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-100'} ${pathname === '/' ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/#about-section"
                className={`${textClass} font-medium text-base hover:opacity-70 transition py-3 border-b ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-100'}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToAbout()
                  setIsMenuOpen(false)
                }}
              >
                About
              </a>
              <Link
                href="/blog"
                className={`${textClass} font-medium text-base hover:opacity-70 transition py-3 border-b ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-100'} ${pathname.startsWith('/blog') ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`${textClass} font-medium text-base hover:opacity-70 transition py-3 border-b ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-100'} ${pathname === '/contact' ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/early-access-form"
                className={`${textClass} font-medium text-base hover:opacity-70 transition py-3 border-b ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-gray-100'} ${pathname === '/early-access-form' ? 'font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Early Access
              </Link>
              {isDark ? (
                <Link
                  href="/early-access-form"
                  className="bg-[#c8e298] text-[#162318] font-semibold px-8 py-3 rounded-full hover:bg-[#b8d288] transition text-base text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Early Access
                </Link>
              ) : (
                <Link
                  href="/early-access-form"
                  className="bg-[#162318] text-[#c8e298] font-semibold px-8 py-3 rounded-full hover:bg-[#1a2a1f] transition text-base text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Early Access
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
