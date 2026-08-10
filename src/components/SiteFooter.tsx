'use client'

import Link from 'next/link'
import { MAIN_PLATFORM_URL, OFFICIAL_SITE_URL, SITE_NAME, TABLEVYSION_SITE_URL, WEBVYSION_SITE_URL } from '@/lib/site'
import { useLanguage } from '@/i18n'

const footerLinkClass = 'text-gray-400 hover:text-white transition-colors'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-dark py-8 text-white sm:py-10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-8 md:grid-cols-3 md:gap-6">
          <div>
            <p className="text-xl font-bold text-accent">{SITE_NAME}</p>
            <address className="mt-4 not-italic text-sm leading-snug text-gray-400">
              <span className="font-semibold text-white">{t('footer.addressLabel')}</span>
              <br />
              Vysion Group International
              <br />
              Siberiëstraat 24
              <br />
              3900 Pelt, België
              <br />
              BTW BE 1003.226.953
            </address>
            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a
                href={MAIN_PLATFORM_URL}
                className="font-medium text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.vysion-kassa.com
              </a>
              <a
                href={TABLEVYSION_SITE_URL}
                className="font-medium text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.tablevysion.com
              </a>
              <a href={OFFICIAL_SITE_URL} className="font-medium text-accent hover:underline">
                {t('footer.officialSite', { siteName: SITE_NAME })}
              </a>
              <a
                href={WEBVYSION_SITE_URL}
                className="font-medium text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.webvysion.tech
              </a>
            </div>
          </div>

          <nav aria-label={t('footer.productNav')}>
            <p className="mb-2 font-semibold text-white">{t('footer.productNav')}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#functies" className={footerLinkClass}>
                  {t('footer.featuresLink')}
                </Link>
              </li>
              <li>
                <Link href="/#prijzen" className={footerLinkClass}>
                  {t('footer.pricingLink')}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t('footer.companyNav')}>
            <p className="mb-2 font-semibold text-white">{t('footer.companyNav')}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#over-ons" className={footerLinkClass}>
                  {t('footer.aboutLink')}
                </Link>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/#contact`} className={footerLinkClass}>
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/support`} className={footerLinkClass}>
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/privacy`} className={footerLinkClass}>
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/juridisch`} className={footerLinkClass}>
                  {t('footer.legal')}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright', { year: String(year) })}</p>
          <p>{t('footer.design')}</p>
        </div>
      </div>
    </footer>
  )
}
