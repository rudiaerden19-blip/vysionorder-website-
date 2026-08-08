import { SITE_NAME } from '@/lib/site'

export default function AboutSection() {
  return (
    <section
      id="over-ons"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-accent sm:mb-4 sm:text-xl">
            Over ons
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Horeca software van mensen die meedenken
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {SITE_NAME} is het online bestelplatform van Vysion Group International, gebouwd voor horeca en retail
            die willen bestellen via webshop, afhalen of levering — zonder commissie per bestelling.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Gekoppeld aan Vysion kassa en keukenscherm: één flow van bestelling tot bon, voor alle tenants op het
            platform.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Geen chatbots: heb je een vraag, onze techniekers staan je persoonlijk ter woord.
          </p>
        </div>
      </div>
    </section>
  )
}
