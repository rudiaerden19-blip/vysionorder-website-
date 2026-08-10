import { VYSION_GOOGLE_REVIEWS_URL } from '@/lib/google-business'

function FiveStars() {
  return (
    <span className="text-lg leading-none tracking-[0.12em] text-[#FBBC04] sm:text-xl" aria-hidden>
      {'★★★★★'}
    </span>
  )
}

export default function GoogleReviewsHeroBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={VYSION_GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Lees onze Google-reviews"
      className={`mt-6 inline-flex flex-col items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-4 py-2.5 text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-black/45 sm:flex-row sm:gap-2.5 ${className}`}
    >
      <FiveStars />
      <span className="text-sm font-semibold sm:text-base">5 sterren op Google</span>
    </a>
  )
}
