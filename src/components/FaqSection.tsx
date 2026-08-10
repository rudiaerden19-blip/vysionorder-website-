'use client'

import { MAIN_PLATFORM_URL, OFFICIAL_SITE_URL } from '@/lib/site'
import { useLanguage } from '@/i18n'

const faqKeys = [
  'needPos',
  'cost',
  'login',
  'website',
  'multiTenant',
  'installCost',
  'contract',
  'start',
] as const

const officialHost = OFFICIAL_SITE_URL.replace('https://', '')
const registerHost = MAIN_PLATFORM_URL.replace('https://www.', '')

export default function FaqSection() {
  const { t } = useLanguage()
  const hostParams = { officialHost, registerHost }

  return (
    <section id="faq" className="scroll-mt-24 border-t border-gray-200 bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading mb-10 text-center text-2xl font-bold sm:text-3xl">{t('faq.title')}</h2>
        <dl className="space-y-8">
          {faqKeys.map((key) => (
            <div key={key}>
              <dt className="font-bold text-gray-900">{t(`faq.items.${key}.q`)}</dt>
              <dd className="mt-2 text-gray-600 leading-relaxed">
                {t(`faq.items.${key}.a`, key === 'login' || key === 'start' ? hostParams : undefined)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
