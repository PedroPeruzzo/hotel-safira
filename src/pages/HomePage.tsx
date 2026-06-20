import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesTeaser from '../components/ServicesTeaser'
import Accommodations from '../components/Accommodations'
import Offers from '../components/Offers'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Reviews from '../components/Reviews'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Accommodations />
      <ServicesTeaser />
      <Offers />
      <ExclusiveOffer />
      <Reviews />
    </>
  )
}
