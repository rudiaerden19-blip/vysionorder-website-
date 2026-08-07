'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  KASSA_SITE_URL,
  SITE_NAME,
  TABLEVYSION_SITE_URL,
} from '@/lib/site'

const productLinks = [
  { href: KASSA_SITE_URL, label: 'Kassa' },
  { href: TABLEVYSION_SITE_URL, label: 'Reserveringen' },
] as const

const navLinkClass =
  'inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-white sm:text-xl">
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {productLinks.map((l) => (
            <a key={l.href} href={l.href} className={navLinkClass}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="p-2 text-zinc-900 md:hidden dark:text-white"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-zinc-200 px-4 pb-4 md:hidden dark:border-zinc-800">
          {productLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block rounded-lg px-3 py-3 font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
