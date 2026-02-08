'use client'

import Script from 'next/script'

// TODO: Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function GoogleAnalytics() {
  // Don't render in development or if no ID is set
  if (process.env.NODE_ENV !== 'production' || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
