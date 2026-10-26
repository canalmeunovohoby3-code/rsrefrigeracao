import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import IndustrialSection from './components/IndustrialSection'
import PhotoGallery from './components/PhotoGallery'
import VideoGallery from './components/VideoGallery'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import CtaBanner from './components/CtaBanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return undefined

    const timer = window.setTimeout(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      target?.scrollIntoView({ block: 'start', behavior: 'auto' })
    }, 120)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <IndustrialSection />
        <PhotoGallery />
        <VideoGallery />
        <Differentials />
        <Testimonials />
        <ServiceAreas />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
