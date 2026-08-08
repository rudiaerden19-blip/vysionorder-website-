import { VYSION_ORDER_MONTHLY } from '@/lib/pricing'

type ComparisonRow = {
  feature: string
  budget: string
  enterprise: string
  vysionOrder: string
}

const rows: ComparisonRow[] = [
  {
    feature: 'Vaste maandprijs',
    budget: 'Laag + commissie per order',
    enterprise: 'Hoog (€100 – €170+ / maand)',
    vysionOrder: `€${VYSION_ORDER_MONTHLY}/maand`,
  },
  {
    feature: 'Commissie op bestellingen',
    budget: 'Vaak 5–15%',
    enterprise: 'Soms bij aggregators',
    vysionOrder: '€0 — commissievrij',
  },
  {
    feature: 'Eigen webshop / huisstijl',
    budget: 'Beperkt template',
    enterprise: 'Vaak extra module',
    vysionOrder: 'Inbegrepen',
  },
  {
    feature: 'Keuken & kassa-koppeling',
    budget: 'Losse tools',
    enterprise: 'Add-ons',
    vysionOrder: 'Inbegrepen (Vysion stack)',
  },
  {
    feature: 'Afhalen & levering',
    budget: 'Basis',
    enterprise: 'Inbegrepen',
    vysionOrder: 'Inbegrepen',
  },
  {
    feature: 'Support',
    budget: 'E-mail only',
    enterprise: 'Ticket',
    vysionOrder: 'Persoonlijk, België',
  },
]

export default function ComparisonTableSection() {
  return (
    <section
      id="vergelijking"
      className="scroll-mt-24 border-b border-gray-200 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="comparison-heading" className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Vergelijk online bestelplatformen
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 pr-4 font-semibold text-gray-900"> </th>
                <th className="px-4 py-4 font-semibold text-gray-600">Budget / commissie</th>
                <th className="px-4 py-4 font-semibold text-gray-600">Enterprise</th>
                <th className="px-4 py-4 font-semibold text-accent">Vysion Order</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-gray-100">
                  <th scope="row" className="py-4 pr-4 font-medium text-gray-900">
                    {row.feature}
                  </th>
                  <td className="px-4 py-4 text-gray-600">{row.budget}</td>
                  <td className="px-4 py-4 text-gray-600">{row.enterprise}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{row.vysionOrder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
