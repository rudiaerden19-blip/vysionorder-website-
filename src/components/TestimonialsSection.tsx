import Image from 'next/image'

const testimonials = [
  {
    tagline: 'Meer dan €600 bespaard per maand',
    quote:
      'Wij hadden eerst een andere app en moesten per bestelling een procent afgeven, zodat we aan het einde van elke maand een zeer hoog bedrag misliepen. Toen zijn we met Vysion Order gaan werken en sparen we per maand meer dan €600.',
    name: 'Frituur Nolim',
    place: 'Pelt',
    photo: '/images/testimonials/frituur-nolim.jpg',
    photoAlt: 'Interieur Frituur Nolim in Pelt',
  },
  {
    tagline: '€49 per maand, €0 installatie',
    quote:
      'Wij hadden bij een ander platform in de buurt prijzen opgevraagd: €119 per maand en €550 installatie. We contacteerden Vysion Order en hebben nu een platform dat zeer snel en feilloos werkt voor €49 per maand — zonder één euro installatiekosten.',
    name: 'Bar Lies',
    place: 'Opglabeek',
    photo: '/images/testimonials/bar-lies.jpg',
    photoAlt: 'Bar Lies met terras in Opglabeek',
  },
  {
    tagline: 'Alles aangepast naar onze wens',
    quote:
      'Wij hebben al veel platformen getest en misten steeds een bepaalde module die we zelf graag wilden. Vysion gebeld — een paar dagen later was alles aangepast naar onze wens. Niet normaal, wat een service!',
    name: 'Eethuis Blonkys',
    place: 'Dordrecht',
    photo: '/images/testimonials/blonkys-eethuis.jpg',
    photoAlt: 'Eethuis Blonkys in Dordrecht',
  },
] as const

function TestimonialPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-28 sm:w-28">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="112px" />
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="ervaringen"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
          Wat onze klanten zeggen
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {testimonials.map((item) => (
            <li key={item.name} className="flex flex-col text-center">
              <TestimonialPhoto src={item.photo} alt={item.photoAlt} />
              <p className="mt-6 text-lg font-bold text-gray-900 sm:text-xl">{item.tagline}</p>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-600 sm:text-[1.05rem]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 text-base text-gray-900">
                <cite className="not-italic">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-gray-600"> — {item.place}</span>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
