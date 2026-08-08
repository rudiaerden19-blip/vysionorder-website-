import SiteNav from '@/components/SiteNav'
import LandingHero from '@/components/LandingHero'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import MissionSection from '@/components/MissionSection'
import PromoInstallSection from '@/components/PromoInstallSection'
import PricingSection from '@/components/PricingSection'
import MobileOrderingSection from '@/components/MobileOrderingSection'
import FaqSection from '@/components/FaqSection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <LandingHero />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <MissionSection />
        <PromoInstallSection />
        <PricingSection />
        <MobileOrderingSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
