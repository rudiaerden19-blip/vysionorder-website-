'use client'

import Link from 'next/link'
import { REGISTER_URL } from '@/lib/site'

const HERO_IMAGE = '/images/hero-vysion-order.jpg'

export default function LandingHero() {
  return (
    <section className="relative pt-20 min-h-[72svh] sm:min-h-[76svh] flex flex-col text-white overflow-hidden pb-8">
      <div className="absolute inset-x-0 top-[-5rem] bottom-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Thuis afhaalmaaltijd uitpakken — online bestellen bij horeca"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center py-8">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold leading-tight tracking-tight text-accent">
          Meer online bestellingen. Minder gedoe.
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Start gratis proefperiode
          </a>
          <Link
            href="/#functies"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Bekijk functies
          </Link>
        </div>
        <p className="mt-[2cm] text-base sm:text-lg md:text-xl font-semibold text-white max-w-2xl leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
          Het meest professionele online bestelsysteem op de markt — zonder transactiekosten
        </p>
      </div>
    </section>
  )
}
