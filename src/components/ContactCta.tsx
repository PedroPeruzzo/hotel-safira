import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="contact-cta-inner">
          <div className="contact-cta-text">
            <h2>Gostaríamos muito de te ouvir</h2>
            <p>
              Entre em contato conosco para reservas, dúvidas ou informações. Estamos sempre à disposição!
            </p>
          </div>
          <div className="contact-cta-actions">
            <a
              href="https://wa.me/5573988613327"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Phone size={16} />
              WhatsApp
            </a>
            <Link to="/contato" className="btn btn-outline-light">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
