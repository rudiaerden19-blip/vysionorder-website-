'use client'

import { useLanguage } from '@/i18n'
import IncludedFeaturesChecklist from '@/components/IncludedFeaturesChecklist'

export default function MissionSection() {
  const { t } = useLanguage()

  return (
    <section id="inbegrepen" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/mission-inbegrepen-bg.png)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-accent sm:text-base">{t('mission.eyebrow')}</p>
          <h2 className="section-heading text-3xl font-bold drop-shadow-sm sm:text-4xl">{t('mission.title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">{t('mission.subtitle')}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:p-10">
          <IncludedFeaturesChecklist variant="mission" />
        </div>
      </div>
    </section>
  )
}
