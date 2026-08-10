'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  ReactNode,
} from 'react'
import { Locale, defaultLocale, locales, localeNames, localeFlags } from './config'
import {
  type Messages,
  formatTranslation,
  getCachedLocaleMessages,
  getDefaultLocaleMessages,
  loadLocaleMessages,
  translateKey,
} from './locale-messages'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string>) => string
  locales: typeof locales
  localeNames: typeof localeNames
  localeFlags: typeof localeFlags
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function applyDocumentLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [messageCatalog, setMessageCatalog] = useState<Partial<Record<Locale, Messages>>>(() => ({
    [defaultLocale]: getDefaultLocaleMessages(),
  }))
  const [isHydrated, setIsHydrated] = useState(false)

  useLayoutEffect(() => {
    let initial: Locale = defaultLocale
    try {
      const savedLocale = localStorage.getItem('vysion_locale') as Locale | null
      if (savedLocale && locales.includes(savedLocale)) {
        initial = savedLocale
      } else {
        const raw = typeof navigator !== 'undefined' ? navigator.language : ''
        const browserLang = (raw.split('-')[0] || '') as Locale
        if (browserLang && locales.includes(browserLang)) {
          initial = browserLang
        }
      }
    } catch {
      /* private mode / storage blocked */
    }

    setLocaleState(initial)
    applyDocumentLocale(initial)

    if (initial !== defaultLocale) {
      void loadLocaleMessages(initial).then((msgs) => {
        setMessageCatalog((prev) => ({ ...prev, [initial]: msgs }))
      })
    }

    setIsHydrated(true)
  }, [])

  useEffect(() => {
    const failSafe = window.setTimeout(() => setIsHydrated(true), 4000)
    return () => window.clearTimeout(failSafe)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem('vysion_locale', newLocale)
    } catch {
      /* private mode */
    }
    applyDocumentLocale(newLocale)
    const cached = getCachedLocaleMessages(newLocale)
    if (cached) {
      setMessageCatalog((prev) => ({ ...prev, [newLocale]: cached }))
    }
    void loadLocaleMessages(newLocale).then((msgs) => {
      setMessageCatalog((prev) => ({ ...prev, [newLocale]: msgs }))
    })
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string>) =>
      formatTranslation(translateKey(key, locale, messageCatalog), params),
    [locale, messageCatalog],
  )

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        locales,
        localeNames,
        localeFlags,
      }}
    >
      <div style={{ visibility: isHydrated ? 'visible' : 'hidden', minHeight: '100vh' }}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    const catalog = { [defaultLocale]: getDefaultLocaleMessages() }
    return {
      locale: defaultLocale as Locale,
      setLocale: () => {},
      t: (key: string, params?: Record<string, string>) =>
        formatTranslation(translateKey(key, defaultLocale, catalog), params),
      locales,
      localeNames,
      localeFlags,
    }
  }

  return context
}

export function useTranslation() {
  const context = useContext(LanguageContext)

  if (!context) {
    return {
      t: (key: string) => key,
      locale: defaultLocale as Locale,
    }
  }

  return {
    t: context.t,
    locale: context.locale,
  }
}
