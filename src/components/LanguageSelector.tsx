'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage, type Locale } from '@/i18n'

export default function LanguageSelector() {
  const { locale, setLocale, locales, localeNames, localeFlags, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const pick = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('languageSelector.ariaLabel')}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
      >
        <span aria-hidden>{localeFlags[locale]}</span>
        <span className="uppercase tracking-wide">{locale}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('languageSelector.ariaLabel')}
          className="absolute right-0 top-full z-[60] mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl"
        >
          {locales.map((code) => (
            <li key={code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                onClick={() => pick(code)}
                className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors hover:bg-gray-50 ${
                  locale === code ? 'bg-accent/10 font-semibold text-accent' : 'text-gray-800'
                }`}
              >
                <span aria-hidden>{localeFlags[code]}</span>
                <span>{localeNames[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
