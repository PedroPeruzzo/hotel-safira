import { Star } from 'lucide-react'

interface Review {
  name: string
  initials: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Naiára C.',
    initials: 'NC',
    date: 'Jan 2025',
    text: 'Foi uma ótima estadia, tudo limpo e organizado! Funcionários receptivos e educados. Super recomendo o Safira Praia Hotel!',
  },
  {
    name: 'Kátia M.',
    initials: 'KM',
    date: 'Dez 2024',
    text: 'Tranquilo, limpíssimo, funcionários muito educados e prestativos, café da manhã maravilhoso. Uma experiência incrível!',
  },
  {
    name: 'Alessandra S.',
    initials: 'AS',
    date: 'Nov 2024',
    text: 'Atendimento impecável! O quarto estava muito bem cuidado e a equipe foi extremamente profissional e simpática. Voltarei com certeza.',
  },
]

export default function Reviews() {
  return (
    <section className="reviews section section-alt">
      <div className="container">
        <div className="reviews-intro">
          <div className="ta-badge">
            <svg width="20" height="14" viewBox="0 0 60 42" fill="#00AA6C" aria-hidden="true">
              <ellipse cx="15" cy="21" rx="12" ry="12" />
              <ellipse cx="45" cy="21" rx="12" ry="12" />
              <circle cx="15" cy="21" r="6" fill="white" />
              <circle cx="45" cy="21" r="6" fill="white" />
              <circle cx="15" cy="21" r="3" />
              <circle cx="45" cy="21" r="3" />
              <polygon points="30,4 35,14 25,14" />
            </svg>
            TripAdvisor
          </div>
          <h2 className="section-title">O que nossos hóspedes dizem</h2>
          <div className="section-divider" />
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.name} className="review-card">
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date} · TripAdvisor</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
