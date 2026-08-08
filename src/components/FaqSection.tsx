import { OFFICIAL_SITE_URL, REGISTER_URL } from '@/lib/site'

const FAQ = [
  {
    q: 'Heb ik een volledige kassa nodig?',
    a: 'Nee. Vysion Order werkt standalone. Wil je ook kassa en keuken? Dat kan binnen hetzelfde Vysion-account.',
  },
  {
    q: 'Wat kost het?',
    a: '€49 per maand excl. BTW. Geen commissie op bestellingen. Maandelijks opzegbaar.',
  },
  {
    q: 'Waar log ik in na registratie?',
    a: `Via Inloggen op ${OFFICIAL_SITE_URL.replace('https://', '')} — je wordt doorgestuurd naar het platform met je tenant.`,
  },
  {
    q: 'Kan ik mijn bestaande website koppelen?',
    a: 'Ja. Link een knop op je site naar je persoonlijke shop-URL (tenant.ordervysion.com). Geen iframe verplicht.',
  },
  {
    q: 'Werkt dit voor meerdere zaken?',
    a: 'Elke zaak heeft een eigen tenant — het platform is multi-tenant, geschikt voor vele locaties.',
  },
  {
    q: 'Moet ik installatiekosten betalen?',
    a: 'Neen. Je registreert online en start met je proefperiode.',
  },
  {
    q: 'Heb ik een jaarlijks contract?',
    a: 'Neen. Maandelijks betalen en opzeggen kan altijd.',
  },
  {
    q: 'Hoe start ik?',
    a: `Registreer via Start gratis — je gaat naar ${REGISTER_URL.includes('vysion-kassa') ? 'vysion-kassa.com' : 'het platform'} met productlijn online bestellen.`,
  },
] as const

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-gray-200 bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Veelgestelde vragen
        </h2>
        <dl className="space-y-8">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-bold text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-gray-600 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
