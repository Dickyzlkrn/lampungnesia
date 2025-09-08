// app/page.js
import PreloaderHero from './components/PreloaderHero'
import Features from './components/Features'
import PotensiEkonomi from './components/PotensiEkonomi'
import CTA from './components/CTA'
import SliderBanner from './components/SliderBanner'
import Pricing from './components/Pricing'

export default function Home() {
  return (
    <>
      {/* Preloader + Hero */}
      <PreloaderHero />

      {/* Bagian lain muncul setelah Hero */}
      <Features />
      <SliderBanner />
      <PotensiEkonomi />
      <Pricing />
      <CTA />
    </>
  )
}
