import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/images/SAFIRA-LOGO-BRANCA-HORIZONTAL.png"
              alt="Safira Praia Hotel"
            />
            <p>
              Seu refúgio na deslumbrante Orla de Porto Seguro, onde cada momento é uma celebração da vida no calor da Bahia.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
              <a
                href="https://www.instagram.com/safirapraiahotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100051879346154"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.com.br/Hotel_Review-g303270-d9741186-Reviews-Safira_Praia_Hotel-Porto_Seguro_State_of_Bahia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="TripAdvisor"
              >
                <svg width="18" height="13" viewBox="0 0 60 42" fill="currentColor" aria-hidden="true">
                  <ellipse cx="15" cy="21" rx="12" ry="12" />
                  <ellipse cx="45" cy="21" rx="12" ry="12" />
                  <circle cx="15" cy="21" r="6" fill="var(--color-primary)" />
                  <circle cx="45" cy="21" r="6" fill="var(--color-primary)" />
                  <circle cx="15" cy="21" r="3" />
                  <circle cx="45" cy="21" r="3" />
                  <polygon points="30,4 35,14 25,14" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-h">Navegação</h4>
            <nav className="footer-links">
              <a href="#home">Home</a>
              <a href="#sobre">Sobre nós</a>
              <a href="#servicos">Serviços</a>
              <a href="#acomodacoes">Hospedagem</a>
              <a href="#promocoes">Promoções</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="footer-h">Acomodações</h4>
            <nav className="footer-links">
              <a href="#acomodacoes">Suíte Luxo</a>
              <a href="#acomodacoes">Suíte Master</a>
            </nav>
          </div>

          <div>
            <h4 className="footer-h">Contato</h4>
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>Av. do Coqueiral, 540 - Praia Taperapuã, Porto Seguro - BA</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+5573988613327">+55 73 98861-3327</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+557331627110">+55 73 3162-7110</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:reservas@safirapraiahotel.com">reservas@safirapraiahotel.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Safira Praia Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
