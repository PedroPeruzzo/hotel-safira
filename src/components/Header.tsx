import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Página inicial', to: '/' },
  { label: 'Serviços',       to: '/servicos' },
  { label: 'Acomodação',     to: '/#acomodacoes' },
  { label: 'Contato',        to: '/contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Always transparent — hero image shows through on every page */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="header-logo">
              <img
                src="https://safirapraiahotel.com/wp-content/uploads/2024/05/SAFIRA-LOGO-BRANCA-HORIZONTAL.png"
                alt="Safira Praia Hotel"
              />
            </Link>

            <nav className="header-nav">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* White outline button — transparent bg, white border */}
            <a
              href="https://book.omnibees.com/hotelresults?q=5282"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta btn-header-reserve"
            >
              RESERVE JÁ!
            </a>

            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} onClick={closeMenu}>{link.label}</Link>
        ))}
        <a
          href="https://wa.me/5573988613327?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-header-reserve"
          onClick={closeMenu}
        >
          RESERVE JÁ!
        </a>
      </nav>
    </>
  )
}
