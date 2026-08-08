'use client'

import Link from 'next/link'
import { REGISTER_URL } from '@/lib/site'

const HERO_IMAGE = '/images/hero-vysion-order-v2.jpg'

export default function LandingHero() {
  return (
    <section className="relative flex min-h-[min(100svh,920px)] w-full flex-col overflow-hidden pb-8 pt-20 text-white sm:min-h-[82svh]">
      <div className="absolute inset-x-0 bottom-0 top-[-5rem] overflow-hidden bg-[#1c1512]">
        {/* Vult de breedte; scherpe foto blijft contain (portrait) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-2xl brightness-[0.55]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Terras van een horecazaak — online bestellen bij Vysion Order"
          className="relative z-[1] h-full w-full object-contain object-center"
        />
        <div className="absolute inset-0 z-[2] bg-black/30" aria-hidden />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-accent drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl lg:text-[2.85rem]">
          Meer online bestellingen. Minder gedoe.
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn transition-colors hover:bg-accent/90"
          >
            Start gratis proefperiode
          </a>
          <Link
            href="/#functies"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 bg-black/25 px-8 py-3 text-base font-semibold text-white backdrop-blur-[2px] transition-colors hover:bg-black/40"
          >
            Bekijk functies
          </Link>
        </div>
        <p className="mt-7 max-w-2xl text-base font-semibold leading-snug text-accent drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:mt-8 sm:text-lg md:text-xl">
          Het meest professionele online bestelsysteem op de markt — zonder transactiekosten
        </p>
      </div>
    </section>
  )
}
