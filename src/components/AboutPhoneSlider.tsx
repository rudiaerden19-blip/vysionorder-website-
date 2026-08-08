'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { SITE_NAME } from '@/lib/site'

const SLIDES = [
  { src: '/images/about-phone/slide-0.png', alt: `${SITE_NAME} menu op smartphone` },
  { src: '/images/about-phone/slide-1.png', alt: 'Product toevoegen aan bestelling' },
  { src: '/images/about-phone/slide-2.png', alt: 'Opties kiezen bij friet special' },
  { src: '/images/about-phone/slide-3.png', alt: 'Sauzen en extras selecteren' },
  { src: '/images/about-phone/slide-4.png', alt: 'Afrekenen in de webshop' },
  { src: '/images/about-phone/slide-5.png', alt: 'Bestelling ontvangen bevestiging' },
] as const

const SLIDE_MS = 2000

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
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition hover:border-accent/40 hover:bg-accent/5 hover:text-accent sm:h-12 sm:w-12"
    >
      {direction === 'prev' ? (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}

export default function AboutPhoneSlider({ className = '' }: { className?: string }) {
  const [index, setIndex] = useState(0)
  const total = SLIDES.length
  const slide = SLIDES[index]

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total)
  }, [total])

  useEffect(() => {
    const id = window.setInterval(goNext, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [goNext])

  return (
    <div className={`flex w-full max-w-[min(100%,30rem)] items-center justify-center gap-1.5 sm:gap-2 ${className}`}>
      <NavArrow direction="prev" onClick={goPrev} label="Vorige telefoonafbeelding" />
      <div className="relative min-w-0 flex-1">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={464}
          height={912}
          className="mx-auto h-auto w-full max-w-[min(100%,16.5rem)] [filter:drop-shadow(0_26px_44px_rgba(0,0,0,0.23))] sm:max-w-[18rem] md:max-w-[19.5rem] lg:max-w-[22rem] xl:max-w-[24rem] 2xl:max-w-[25rem]"
          sizes="(max-width: 639px) 264px, (max-width: 1023px) 312px, 384px"
          priority={index === 0}
        />
        <p className="sr-only">
          Afbeelding {index + 1} van {total}
        </p>
      </div>
      <NavArrow direction="next" onClick={goNext} label="Volgende telefoonafbeelding" />
    </div>
  )
}
