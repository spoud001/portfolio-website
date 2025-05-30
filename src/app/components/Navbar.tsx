'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c1121]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <div className="text-2xl font-bold text-neon-green">Portfolio</div>
        <div className="space-x-6">
          <a href="#skills" className="hover:text-neon-green transition-all">Skills</a>
          <a href="#contact" className="hover:text-neon-green transition-all">Contact</a>
          <Link href="/resume" className="hover:text-neon-green transition-all">Resume</Link>
        </div>
      </div>
    </nav>
  )
}
