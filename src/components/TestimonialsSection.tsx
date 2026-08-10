'use client'

import Image from 'next/image'
import { useLanguage } from '@/i18n'

const testimonialMeta = [
  { id: 'nolim' as const, name: 'Frituur Nolim', place: 'Pelt', photo: '/images/testimonials/frituur-nolim.jpg' },
  { id: 'lies' as const, name: 'Bar Lies', place: 'Opglabeek', photo: '/images/testimonials/bar-lies.jpg' },
  { id: 'blonkys' as const, name: 'Eethuis Blonkys', place: 'Dordrecht', photo: '/images/testimonials/blonkys-eethuis.jpg' },
]

function TestimonialPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-28 sm:w-28">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="112px" />
    </div>
  )
}

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="ervaringen"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
          {t('testimonials.title')}
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {testimonialMeta.map((item) => (
            <li key={item.id} className="flex flex-col text-center">
              <TestimonialPhoto src={item.photo} alt={t(`testimonials.items.${item.id}.photoAlt`)} />
              <p className="mt-6 text-lg font-bold text-gray-900 sm:text-xl">{t(`testimonials.items.${item.id}.tagline`)}</p>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-600 sm:text-[1.05rem]">
                &ldquo;{t(`testimonials.items.${item.id}.quote`)}&rdquo;
              </blockquote>
              <footer className="mt-6 text-base text-gray-900">
                <cite className="not-italic">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-gray-600">, {item.place}</span>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
