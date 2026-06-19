import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/servicos"  element={<ServicesPage />} />
        <Route path="/servicos/" element={<ServicesPage />} />
        <Route path="/contato"   element={<ContactPage />} />
        <Route path="/contato/"  element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
