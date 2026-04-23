import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import './fonts.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Azure Mas — Restaurant Gastronomique Méditerranéen | Provence',
  description: "Restaurant gastronomique sur la Côte d'Azur. Produits locaux d'exception, terrasse panoramique, cave à vins. Réservations et privatisation.",
  robots: 'index, follow',
  openGraph: {
    title: 'Azure Mas — Restaurant Gastronomique Méditerranéen',
    description: "Produits locaux d'exception, terrasse panoramique, cave à vins. Côte d'Azur.",
    type: 'website',
    url: 'https://azur-gamma.vercel.app',
    images: [{ url: '/images/hero.webp' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Azure Mas',
  description: "Restaurant gastronomique méditerranéen sur la Côte d'Azur",
  url: 'https://azur-gamma.vercel.app',
  telephone: '+33494001234',
  email: 'contact@azuremas.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Route des Calanques',
    addressLocality: 'Le Castellet',
    postalCode: '83330',
    addressCountry: 'FR',
  },
  openingHours: ['Tu-Su 12:00-14:00', 'Tu-Su 19:00-22:00'],
  servesCuisine: 'Mediterranean',
  priceRange: '€€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" href="/fonts/cinzel.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="canonical" href="https://azur-gamma.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <Navbar />
        {children}
        <Footer />
        <Script id="material-symbols" strategy="afterInteractive">{`
          var l=document.createElement('link');
          l.rel='stylesheet';
          l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
          document.head.appendChild(l);
        `}</Script>
      </body>
    </html>
  )
}
