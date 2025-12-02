import Link from "next/link"

export function Navbar() {
  return (
    <div className="p-10">
      <nav className="flex items-center justify-between px-8 py-4 bg-white border border-gray-200 rounded-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Roundi Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 flex-1 ml-12">
          <Link href="/" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/blog" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-800 font-medium text-base hover:text-gray-600 transition">
            Contact us
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-gray-900 text-lime-300 font-semibold px-8 py-2 rounded-full hover:bg-gray-800 transition">
          Talk to Us
        </button>
      </nav>
    </div>
  )
}
