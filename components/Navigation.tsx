'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-sm'
          : 'bg-white/97 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Breath Cycle Icon */}
            <svg width="50" height="50" viewBox="0 0 400 400" className="flex-shrink-0">
              <g transform="translate(200, 200)">
                <path
                  d="M -100 0 C -100 -70, -40 -70, 0 0 C 40 70, 100 70, 100 0 C 100 -70, 40 -70, 0 0 C -40 70, -100 70, -100 0"
                  fill="none"
                  stroke="#1a2332"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="0" r="16" fill="#c4a77d"/>
              </g>
            </svg>
            <span className="font-display text-xl md:text-2xl font-medium">
              <span className="text-primary">Somatic </span>
              <span className="text-secondary">Rhythms</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary text-sm font-medium tracking-wide px-4 py-2 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/mark-somaticrhythms/15-min-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-secondary text-primary font-semibold px-5 py-2.5 text-sm tracking-wide hover:bg-accent hover:text-white transition-all"
            >
              Book a Consult
            </a>
            <a
              href="https://calendly.com/mark-somaticrhythms/90-min-somatic-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-primary text-white font-semibold px-5 py-2.5 text-sm tracking-wide hover:bg-primary/90 transition-all"
            >
              Book a Full Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary text-base font-medium px-2 py-2 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/mark-somaticrhythms/15-min-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-secondary text-primary font-semibold px-6 py-3 text-sm tracking-wide text-center hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consult
              </a>
              <a
                href="https://calendly.com/mark-somaticrhythms/90-min-somatic-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-primary text-white font-semibold px-6 py-3 text-sm tracking-wide text-center hover:bg-primary/90 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Full Session
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
