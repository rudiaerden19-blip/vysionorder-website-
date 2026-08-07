import SiteNav from '@/components/SiteNav'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 pt-24 pb-16 dark:bg-black">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Vysion Order
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Online bestelplatform voor horeca — gekoppeld aan Vysion kassa en TableVysion reserveringen.
          </p>
        </div>
      </main>
    </>
  )
}
