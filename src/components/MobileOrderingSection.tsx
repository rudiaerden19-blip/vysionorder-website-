'use client'

import Image from 'next/image'
import { useLanguage } from '@/i18n'

export default function MobileOrderingSection() {
  const { t } = useLanguage()

  return (
    <section
      id="overal-bereikbaar"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[3/2] min-h-[14rem] w-full overflow-hidden rounded-3xl shadow-home-photo ring-1 ring-black/5 sm:min-h-[16rem] lg:aspect-[4/3]">
          <Image
            src="/images/mobile-ordering-laptop.jpg"
            alt={t('mobileOrdering.imageAlt')}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="section-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
            {t('mobileOrdering.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">{t('mobileOrdering.body')}</p>
        </div>
      </div>
    </section>
  )
}
