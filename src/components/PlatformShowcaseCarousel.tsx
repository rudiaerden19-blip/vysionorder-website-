'use client'

import { useCallback, useEffect, useState } from 'react'

const ASSET_V = '1'

export const platformScreenshots = [
  {
    src: `/images/online-order-platform-1.png?v=${ASSET_V}`,
    alt: 'Vysion Order webshop overzicht',
    label: 'Webshop',
    width: 1920,
    height: 1080,
  },
  {
    src: `/images/online-order-platform-2.png?v=${ASSET_V}`,
    alt: 'Online bestellen voor afhalen',
    label: 'Afhalen',
    width: 1920,
    height: 1080,
  },
  {
    src: `/images/online-order-platform-3.png?v=${ASSET_V}`,
    alt: 'Bestellingen in admin',
    label: 'Bestellingen',
    width: 1920,
    height: 1080,
  },
  {
    src: `/images/online-order-platform-4.png?v=${ASSET_V}`,
    alt: 'Keukenscherm online orders',
    label: 'Keuken',
    width: 1920,
    height: 1080,
  },
  {
    src: `/images/online-order-platform-5.png?v=${ASSET_V}`,
    alt: 'Rapportage en omzet online',
    label: 'Rapporten',
    width: 1920,
    height: 1080,
  },
] as const

function NavArrow({
  direction,
  onClick,
  label,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-home-float transition hover:border-accent/40 hover:bg-accent/5 hover:text-accent sm:h-14 sm:w-14"
    >
      {direction === 'prev' ? (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}

export default function PlatformShowcaseCarousel() {
  const [index, setIndex] = useState(0)
  const total = platformScreenshots.length
  const slide = platformScreenshots[index]

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total)
  }, [total])

  useEffect(() => {
    const id = window.setInterval(goNext, 7000)
    return () => window.clearInterval(id)
  }, [goNext])

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <NavArrow direction="prev" onClick={goPrev} label="Vorige screenshot" />
        <p className="text-center text-sm font-semibold text-gray-800 sm:text-base">{slide.label}</p>
        <NavArrow direction="next" onClick={goNext} label="Volgende screenshot" />
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-home-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        {index + 1} / {total}
      </p>
    </div>
  )
}
