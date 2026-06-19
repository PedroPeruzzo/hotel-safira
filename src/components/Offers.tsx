import { ArrowRight } from 'lucide-react'

interface Offer {
  tag: string
  title: string
  description: string
  image: string
}

const offers: Offer[] = [
  {
    tag: 'Promoção',
    title: 'Baixa Temporada',
    description: 'Aproveite preços especiais na baixa temporada e curta o melhor de Porto Seguro com mais tranquilidade e conforto.',
    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=900&q=80',
  },
  {
    tag: 'Especial',
    title: 'Réveillon',
    description: 'Comemore a virada do ano com muita alegria no Safira Praia Hotel. Pacotes especiais para o Réveillon na Bahia.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=900&q=80',
  },
  {
    tag: 'Exclusivo Site',
    title: '10% de Desconto',
    description: 'Reserve agora pelo nosso site e aproveite 10% de um desconto especial exclusivo em sua hospedagem.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80',
  },
]

export default function Offers() {
  return (
    <section id="promocoes" className="offers section section-dark">
      <div className="container">
        <h2 className="section-title light">Ofertas Especiais</h2>
        <div className="section-divider" />
        <p className="section-subtitle light">
          Aproveite nossas promoções exclusivas e garanta a melhor experiência pelo melhor preço.
        </p>

        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.title} className="offer-card">
              <img src={offer.image} alt={offer.title} loading="lazy" />
              <div className="offer-overlay">
                <span className="offer-tag">{offer.tag}</span>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>
                <a
                  href="https://wa.me/5573988613327?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20promoções."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-link"
                >
                  SAIBA MAIS <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
