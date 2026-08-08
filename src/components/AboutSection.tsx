import Image from 'next/image'
import type { ReactNode } from 'react'
import { REGISTER_URL, SITE_NAME } from '@/lib/site'

type FeatureItem = {
  title: string
  body: string
  icon: ReactNode
}

const leftFeatures: FeatureItem[] = [
  {
    title: 'Afhaal & levering',
    body: 'Beheer afhaal- en leverbestellingen in één dashboard: tijdsloten, status en keukenscherm — zonder commissie per order.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8M8 17a2 2 0 01-2-2V9a2 2 0 012-2h1l1.5-3h3L15 7h1a2 2 0 012 2v6a2 2 0 01-2 2M8 17a2 2 0 002 2h4a2 2 0 002-2m-6 0h6"
      />
    ),
  },
  {
    title: 'Groepsbestellingen',
    body: 'Bedrijven, scholen of verenigingen bestellen apart op één link. Jij houdt overzicht; iedereen betaalt zoals afgesproken.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
]

const rightFeatures: FeatureItem[] = [
  {
    title: 'Bestellen via QR-code',
    body: 'QR op tafel of in de wachtrij: gasten scannen, bestellen en betalen zelf. Meer tijd voor service in de zaak.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h4v4H4V5zM16 5h4v4h-4V5zM4 15h4v4H4v-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15h2v2h-2v-2zm4 0h0m-2 2h2m2-2v2m0-2h2m-2 2v2" />
      </>
    ),
  },
  {
    title: 'Klantenkaart',
    body: 'Sparen en stempels zitten standaard in het platform — geen apart loyalty-abonnement. Eenvoudig voor jou, leuk voor vaste klanten.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
]

function FeatureBlock({ item, align }: { item: FeatureItem; align: 'left' | 'right' }) {
  const textAlign = align === 'right' ? 'lg:text-right lg:flex-row-reverse' : 'lg:text-left'
  const iconMargin = align === 'right' ? 'lg:ml-0 lg:mr-5' : 'lg:mr-5'

  return (
    <article className={`flex flex-col items-center gap-4 sm:flex-row sm:items-start ${textAlign}`}>
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark text-white ${iconMargin}`}
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          {item.icon}
        </svg>
      </div>
      <div
        className={`max-w-sm text-center sm:max-w-none sm:text-left lg:max-w-xs ${align === 'right' ? 'lg:text-right' : ''}`}
      >
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{item.body}</p>
      </div>
    </article>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[min(100%,17.5rem)]">
      <div
        className="relative aspect-[9/19] overflow-hidden rounded-[2.25rem] border-[10px] border-dark bg-dark shadow-home-photo ring-1 ring-black/10"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-dark" />
        <Image
          src="/images/online-order-platform-1.png"
          alt={`${SITE_NAME} webshop op smartphone`}
          fill
          className="object-cover object-top"
          sizes="280px"
          priority={false}
        />
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="over-ons"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-base font-medium text-gray-500 sm:text-lg">Een compleet</p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.35rem]">
            Bestelplatform aan 0% commissie
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {SITE_NAME} koppelt webshop, afhaal en levering aan je keuken en kassa — één flow voor elke zaak op het
            platform.
          </p>
        </header>

        <div className="mt-14 lg:mt-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10 xl:gap-x-14">
            <div className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-16 lg:justify-self-end">
              {leftFeatures.map((item) => (
                <FeatureBlock key={item.title} item={item} align="right" />
              ))}
            </div>

            <div className="order-1 lg:order-2 lg:row-span-2">
              <PhoneMockup />
            </div>

            <div className="order-3 flex flex-col gap-12 lg:gap-16 lg:justify-self-start">
              {rightFeatures.map((item) => (
                <FeatureBlock key={item.title} item={item} align="left" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center sm:mt-16">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-accent px-10 py-3.5 text-base font-bold text-white shadow-home-btn transition-colors hover:bg-accent/90"
          >
            Start gratis proefperiode
          </a>
        </div>
      </div>
    </section>
  )
}
