'use client'

import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import PresenceSection from '@/components/PresenceSection'
import CTASection from '@/components/CTASection'
import FeaturesSection from '@/components/FeaturesSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <PresenceSection />
      <CTASection />
    </>
  )
}
