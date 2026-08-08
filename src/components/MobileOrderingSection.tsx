import Image from 'next/image'

export default function MobileOrderingSection() {
  return (
    <section
      id="overal-bereikbaar"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] min-h-[16rem] w-full overflow-hidden rounded-3xl shadow-home-photo ring-1 ring-black/5 sm:min-h-[18rem] lg:aspect-[3/4]">
          <Image
            src="/images/mobile-ordering-horeca.jpg"
            alt="Bediening met bestelling in de zaak — online orders en horeca"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-accent sm:text-4xl lg:text-[2.35rem]">
            Beheer bestellingen overal waar je bent.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            In de zaak, op het terras of thuis: open je admin op telefoon, tablet of laptop en volg online orders,
            status en omzet — waar je ook bent. Pas je website aan waar je ook bent, zolang je internet hebt.
          </p>
        </div>
      </div>
    </section>
  )
}
