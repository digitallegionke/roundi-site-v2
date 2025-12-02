import Link from "next/link"

export function Navbar() {
  return (
    <div className="p-4 sm:p-6 md:p-10">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-[18px] py-[22px] bg-white border border-gray-200 rounded-lg gap-4 sm:gap-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Roundi Logo" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 flex-1 sm:ml-12">
          <a
            href="https://roundi.framer.website"
            className="text-gray-800 font-medium text-sm sm:text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            href="https://roundi.framer.website/#about"
            className="text-gray-800 font-medium text-sm sm:text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <Link href="/blog" className="text-gray-800 font-medium text-sm sm:text-base hover:text-gray-600 transition">
            Blog
          </Link>
          <a
            href="https://roundi.framer.website/contact-v2"
            className="text-gray-800 font-medium text-sm sm:text-base hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="https://roundi.framer.website/contact-v2"
          className="bg-gray-900 text-lime-300 font-semibold px-6 sm:px-8 py-2 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to Us
        </a>
      </nav>
    </div>
  )
}
