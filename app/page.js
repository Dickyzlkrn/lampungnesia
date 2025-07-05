// app/page.js
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA' // <-- 1. Impor komponen baru
import SliderBanner from './components/SliderBanner'
import Pricing from './components/Pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <SliderBanner />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA /> {/* <-- 2. Letakkan di sini, sebelum Footer */}
    </>
  )
}