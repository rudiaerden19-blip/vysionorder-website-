'use client'

import { useLanguage } from '@/i18n'
import { ORDER_INCLUDED_FEATURE_KEYS } from '@/lib/order-included-features'

type Variant = 'mission' | 'pricing'

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function IncludedFeaturesChecklist({ variant }: { variant: Variant }) {
  const { t } = useLanguage()

  const isMission = variant === 'mission'

  return (
    <ul
      className={
        isMission
          ? 'grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2'
      }
    >
      {ORDER_INCLUDED_FEATURE_KEYS.map((key) => (
        <li
          key={key}
          className={isMission ? 'flex items-start gap-3 text-left' : 'flex items-start gap-3'}
        >
          <CheckIcon
            className={
              isMission ? 'h-5 w-5 shrink-0 text-accent' : 'mt-0.5 h-5 w-5 shrink-0 text-accent'
            }
          />
          <span
            className={
              isMission
                ? 'text-base font-medium leading-snug text-white'
                : 'text-sm leading-snug text-gray-600 sm:text-base'
            }
          >
            {t(`mission.included.${key}`)}
          </span>
        </li>
      ))}
    </ul>
  )
}
