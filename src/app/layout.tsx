import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { OFFICIAL_SITE_URL, SITE_NAME } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = OFFICIAL_SITE_URL

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: SITE_NAME,
      legalName: 'Vysion Group International',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      description:
        'Online bestelplatform voor horeca: webshop, afhalen en levering, gekoppeld aan kassa en keuken.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Siberiëstraat 24',
        addressLocality: 'Pelt',
        postalCode: '3900',
        addressCountry: 'BE',
      },
      areaServed: [
        { '@type': 'Country', name: 'België' },
        { '@type': 'Country', name: 'Nederland' },
      ],
      sameAs: [
        'https://www.vysion-kassa.com',
        'https://www.tablevysion.com',
        'https://www.webvysion.tech',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: SITE_NAME,
      description: 'Online bestellen voor horeca, webshop en afhaal in één platform.',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'nl-BE',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Online bestelplatform voor horeca`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Online bestellen, eigen webshop, afhalen en levering. Gekoppeld aan Vysion kassa en keukenscherm. €49/maand excl. BTW. Start gratis.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} | Online bestelplatform`,
    description: 'Online bestellen voor restaurants en horeca. Start gratis proefperiode.',
    type: 'website',
    locale: 'nl_BE',
    url: siteUrl,
    siteName: SITE_NAME,
    images: [{ url: '/images/online-order-platform-1.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
