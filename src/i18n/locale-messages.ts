import type { Locale } from './config'
import { defaultLocale } from './config'
import nlMessages from '../../messages/nl.json'

export type Messages = Record<string, unknown>

const cache: Partial<Record<Locale, Messages>> = {
  [defaultLocale]: nlMessages as Messages,
}

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  nl: () => Promise.resolve({ default: nlMessages as Messages }),
  en: () => import('../../messages/en.json'),
  fr: () => import('../../messages/fr.json'),
  de: () => import('../../messages/de.json'),
}

export function getCachedLocaleMessages(locale: Locale): Messages | undefined {
  return cache[locale]
}

export function getDefaultLocaleMessages(): Messages {
  return cache[defaultLocale]!
}

/** Laadt vertalingen on-demand; nl zit al in de hoofdbundle. */
export async function loadLocaleMessages(locale: Locale): Promise<Messages> {
  const hit = cache[locale]
  if (hit) return hit
  const mod = await loaders[locale]()
  cache[locale] = mod.default
  return mod.default
}

export function translateKey(key: string, locale: Locale, catalog: Partial<Record<Locale, Messages>>): string {
  const keys = key.split('.')
  const primary =
    catalog[locale] ??
    getCachedLocaleMessages(locale) ??
    catalog[defaultLocale] ??
    getDefaultLocaleMessages()

  let value: unknown = primary
  for (const k of keys) {
    if (value && typeof value === 'object' && k in (value as object)) {
      value = (value as Record<string, unknown>)[k]
    } else {
      let fallback: unknown = catalog[defaultLocale] ?? getDefaultLocaleMessages()
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fk in (fallback as object)) {
          fallback = (fallback as Record<string, unknown>)[fk]
        } else {
          return key
        }
      }
      return typeof fallback === 'string' ? fallback : key
    }
  }

  return typeof value === 'string' ? value : key
}

export function formatTranslation(str: string, params?: Record<string, string>): string {
  if (!params) return str
  let out = str
  for (const [k, v] of Object.entries(params)) {
    out = out.split(`{${k}}`).join(v)
  }
  return out
}
