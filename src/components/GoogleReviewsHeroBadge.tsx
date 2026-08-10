'use client'

import { VYSION_GOOGLE_REVIEWS_URL } from '@/lib/google-business'
import { useLanguage } from '@/i18n'

function FiveStars() {
  return (
    <span className="text-lg leading-none tracking-[0.12em] text-[#FBBC04] sm:text-xl" aria-hidden>
      {'★★★★★'}
    </span>
  )
}

export default function GoogleReviewsHeroBadge({ className = '' }: { className?: string }) {
  const { t } = useLanguage()

  return (
    <a
      href={VYSION_GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('googleReviews.ariaLabel')}
      className={`mt-6 inline-flex flex-col items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-4 py-2.5 text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-black/45 sm:flex-row sm:gap-2.5 ${className}`}
    >
      <FiveStars />
      <span className="text-sm font-semibold sm:text-base">{t('googleReviews.label')}</span>
    </a>
  )
}
