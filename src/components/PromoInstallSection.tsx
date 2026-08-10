'use client'

import { DEMO_LIVE_URL, platformRegisterUrl } from '@/lib/site'
import { useLanguage } from '@/i18n'

const serviceKeys = ['launch', 'menuPhotos', 'payments', 'website', 'seo'] as const

export default function PromoInstallSection() {
  const { t, locale } = useLanguage()
  const registerUrl = platformRegisterUrl(locale)

  return (
    <section
      id="gratis-installatie"
      className="scroll-mt-24 border-b border-gray-100 bg-gradient-to-b from-white via-[#faf8f6] to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-accent sm:text-base">
            {t('promoInstall.eyebrow')}
          </p>
          <h2 className="section-heading text-3xl font-bold tracking-tight sm:text-4xl">{t('promoInstall.title')}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t('promoInstall.introBefore')}{' '}
            <span className="font-semibold text-gray-900">€0</span>
            {t('promoInstall.introAfter')}
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <ul className="space-y-3.5 sm:space-y-4">
            {serviceKeys.map((key) => (
              <li key={key} className="flex items-start gap-3 border-l-2 border-accent/30 pl-4 text-left">
                <span className="text-base leading-relaxed text-gray-700 sm:text-lg">{t(`promoInstall.services.${key}`)}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 text-center shadow-sm sm:p-8 lg:min-w-[16rem] lg:p-8">
            <p className="text-sm font-medium text-gray-500">{t('promoInstall.boxLabel')}</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">€0</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{t('promoInstall.boxNote')}</p>
            <div className="mt-6 flex w-full flex-col gap-3">
              <a
                href={registerUrl}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 sm:text-base"
              >
                {t('promoInstall.ctaTrial')}
              </a>
              <a
                href={DEMO_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 sm:text-base"
              >
                {t('promoInstall.ctaLive')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
