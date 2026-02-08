import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/* Breath Cycle Icon - Light version for dark background */}
              <svg width="40" height="40" viewBox="0 0 400 400" className="flex-shrink-0">
                <g transform="translate(200, 200)">
                  <path
                    d="M -100 0 C -100 -70, -40 -70, 0 0 C 40 70, 100 70, 100 0 C 100 -70, 40 -70, 0 0 C -40 70, -100 70, -100 0"
                    fill="none"
                    stroke="#f5f2ed"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="0" r="16" fill="#c4a77d"/>
                </g>
              </svg>
              <span className="font-display text-xl font-medium">
                <span className="text-white">Somatic </span>
                <span className="text-secondary">Rhythms</span>
              </span>
            </Link>
            <p className="text-mid text-sm leading-relaxed max-w-sm mb-6">
              Nervous system regulation for executives who need results, not rituals.
            </p>
            <div className="flex items-center gap-2 text-mid text-sm">
              <MapPin size={16} />
              <span>San Diego, CA · Available remotely via Zoom</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-secondary text-xs font-semibold tracking-widest mb-6">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-mid text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-mid text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link href="/how-it-works" className="text-mid text-sm hover:text-white transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-secondary text-xs font-semibold tracking-widest mb-6">
              CONTACT
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:mark@somaticrhythms.com"
                className="text-mid text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                mark@somaticrhythms.com
              </a>
              <a
                href="tel:+16197238463"
                className="text-mid text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                (619) 723-8463
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-mid/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-mid text-xs">
            © {currentYear} Somatic Rhythms. All rights reserved.
          </p>
          <p className="text-mid text-xs">
            Certified Somatic Breathwork Practitioner · Arizona State University
          </p>
        </div>
      </div>
    </footer>
  )
}
