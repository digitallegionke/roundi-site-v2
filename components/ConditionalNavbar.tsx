'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navbar'

export function ConditionalNavbar() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  // Show dark navbar on homepage (absolute positioned), light navbar on other pages (normal flow)
  if (isHomepage) {
    return (
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar variant="dark" />
      </div>
    )
  }

  return <Navbar variant="light" />
}
