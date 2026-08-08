const included = [
  'Online bestelplatform',
  'Gratis website',
  'WhatsApp-bestellingen',
  'Klantenkaart',
  'Groepsbestellingen',
  'Online tafelreservatie',
  'Kassa-koppeling',
  'Cadeaubonnen',
  'Labelprintsoftware',
  'QR-code menu',
  'QR-code reviews',
  'Koppeling met Google',
  'Aanpasbare menukaart',
  'Alle betaalmethodes',
  'Pushberichten en e-mails',
  'Promoties voor klanten',
  'Afhalen, levering & ter plaatse',
] as const

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function MissionSection() {
  return (
    <section id="inbegrepen" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/mission-inbegrepen-bg.jpg)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-accent sm:text-base">Alles in één pakket</p>
          <h2 className="section-heading text-3xl font-bold drop-shadow-sm sm:text-4xl">Wat is inbegrepen</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">
            Eén online bestelplatform met alles wat je zaak nodig heeft, zonder losse modules bijkopen.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:p-10">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-left">
                <CheckIcon />
                <span className="text-base font-medium leading-snug text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
