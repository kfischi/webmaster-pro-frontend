import './globals.css'

export const metadata = {
  title: 'WebMaster Pro - בניית אתרים מקצועית עם בינה מלאכותית',
  description: '500+ תבניות מקצועיות, עיצוב חכם עם AI ופתרון מלא לעסק שלך. מאתר פשוט ועד חנות מקוונת מלאה - הכל תוך 24 שעות.',
  keywords: 'בניית אתרים, עיצוב אתרים, בינה מלאכותית, AI, תבניות, חנות מקוונת, עסקים',
  authors: [{ name: 'WebMaster Pro Team' }],
  creator: 'WebMaster Pro',
  publisher: 'WebMaster Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webmaster-pro.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WebMaster Pro - בניית אתרים מקצועית',
    description: '500+ תבניות מקצועיות עם בינה מלאכותית',
    url: 'https://webmaster-pro.vercel.app',
    siteName: 'WebMaster Pro',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebMaster Pro - בניית אתרים מקצועית',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebMaster Pro - בניית אתרים מקצועית',
    description: '500+ תבניות מקצועיות עם בינה מלאכותית',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org markup for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebMaster Pro",
              "description": "פלטפורמת בניית אתרים מתקדמת עם בינה מלאכותית",
              "url": "https://webmaster-pro.vercel.app",
              "logo": "https://webmaster-pro.vercel.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+972-50-123-4567",
                "contactType": "customer service",
                "areaServed": "IL",
                "availableLanguage": "Hebrew"
              },
              "sameAs": [
                "https://facebook.com/webmasterpro",
                "https://linkedin.com/company/webmasterpro"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          דלג לתוכן הראשי
        </a>
        
        {/* Main content */}
        <main id="main-content">
          {children}
        </main>
        
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
