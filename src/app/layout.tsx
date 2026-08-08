import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n'
import { VYSION_BRAND_SITE_NAME, VYSION_CANONICAL_ORIGIN } from '@/lib/vysion-site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1a1a',
}

export const metadata: Metadata = {
  title: {
    absolute: `Online bestelplatform | ${VYSION_BRAND_SITE_NAME}`,
  },
  description:
    'Vysion Order: online bestellen voor horeca, gekoppeld aan kassa en keuken. Webshop, afhalen, levering — 14 dagen gratis proberen.',
  metadataBase: new URL(VYSION_CANONICAL_ORIGIN),
  openGraph: {
    siteName: VYSION_BRAND_SITE_NAME,
    type: 'website',
    locale: 'nl_BE',
    url: VYSION_CANONICAL_ORIGIN,
    images: [{ url: '/images/online-order-platform-1.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
