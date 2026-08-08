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
      className="scroll-mt-24 border-b border-gray-100 bg-gradient-to-b from-white via-[#faf8f6] to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-accent sm:text-base">
            Gratis installatie
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">Wat doen wij?</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Wij zetten je online bestelplatform klaar — menu, betalingen, website en vindbaarheid. Installatie{' '}
            <span className="font-semibold text-gray-900">€0</span>.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <ul className="space-y-3.5 sm:space-y-4">
            {services.map((line) => (
              <li key={line} className="flex items-start gap-3 border-l-2 border-accent/30 pl-4 text-left">
                <span className="text-base leading-relaxed text-gray-700 sm:text-lg">{line}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 text-center shadow-sm sm:p-8 lg:min-w-[16rem] lg:p-8">
            <p className="text-sm font-medium text-gray-500">Eenmalige installatie</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">€0</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">Geen setup-factuur bij start.</p>
            <a
              href={REGISTER_URL}
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 sm:text-base"
            >
              Start gratis proefperiode
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
