import { DEMO_LIVE_URL } from '@/lib/site'

export default function DemoLiveSection() {
  return (
    <section
      id="live-demo"
      className="scroll-mt-24 border-b border-gray-100 bg-gradient-to-b from-[#f6f4f1] to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Wil je het platform in actie zien?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
          Klik op de link, werk met onze demo en laat je overtuigen van de snelheid en professionaliteit van ons
          bestelplatform.
        </p>
        <a
          href={DEMO_LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-full bg-dark px-10 py-3.5 text-base font-bold text-white shadow-home-btn transition-colors hover:bg-dark/90"
        >
          Bekijk live demo →
        </a>
        <p className="mt-4 text-sm text-gray-500">Demo: bestel als gast — geen account nodig.</p>
      </div>
    </section>
  )
}
