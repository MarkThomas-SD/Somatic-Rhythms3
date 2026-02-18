import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Somatic Rhythms | Nervous System Regulation for Executives',
  description: 'Somatic breathwork for executives, leaders and high-performers. Reset your stress response so you can perform, recover, and lead without running on empty.',
  keywords: 'somatic breathwork, executive coaching, nervous system regulation, stress management, burnout recovery, San Diego breathwork',
  openGraph: {
    title: 'Somatic Rhythms | Nervous System Regulation for Executives',
    description: 'Somatic breathwork for executives, leaders and high-performers who don\'t have time for burnout.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
