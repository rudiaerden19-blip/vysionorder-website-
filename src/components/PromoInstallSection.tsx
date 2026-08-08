import { REGISTER_URL } from '@/lib/site'

const services = [
  'Wij starten je volledige online platform op.',
  'Wij plaatsen je volledige menu op je platform in 4K-foto\'s.',
  'Wij stellen je betalingen in.',
  'Wij bouwen je website zoals jij het graag wilt.',
  'Wij verzorgen SEO-vindbaarheid op Google.',
] as const

export default function PromoInstallSection() {
  return (
    <section
      id="gratis-installatie"
      className="scroll-mt-24 border-b border-gray-100 bg-gradient-to-br from-accent/[0.08] via-white to-[#faf8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/20 bg-white shadow-home-card ring-1 ring-black/5">
          <div className="border-b border-accent/15 bg-accent px-6 py-4 text-center sm:px-10 sm:py-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/95 sm:text-base">Promo</p>
            <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl lg:text-[2rem]">Gratis installatie</h2>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <h3 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">Wat doen wij?</h3>
            <ul className="mx-auto mt-8 max-w-2xl space-y-4">
              {services.map((line) => (
                <li key={line} className="flex items-start gap-3 text-left">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    aria-hidden
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-gray-700 sm:text-lg">{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              En dit allemaal voor{' '}
              <span className="text-accent">€0</span>
            </p>

            <div className="mt-8 text-center">
              <a
                href={REGISTER_URL}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-10 py-3.5 text-base font-bold text-white shadow-home-btn transition-colors hover:bg-accent/90"
              >
                Start gratis proefperiode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
