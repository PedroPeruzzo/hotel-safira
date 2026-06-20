import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const reviews = [
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
  {
    name: 'Roberto F.',
    initials: 'RF',
    date: 'Out 2024',
    text: 'Hotel excelente! Localização perfeita, perto da praia e com ótima estrutura. A piscina é linda e o café da manhã é farto e delicioso.',
  },
  {
    name: 'Mariana L.',
    initials: 'ML',
    date: 'Set 2024',
    text: 'Passamos uma semana maravilhosa. O hotel é muito bem cuidado, os quartos são confortáveis e a equipe é sempre muito atenciosa.',
  },
  {
    name: 'Carlos E.',
    initials: 'CE',
    date: 'Ago 2024',
    text: 'Ótimo custo-benefício! Estrutura completa com piscina, academia e bar. Porto Seguro é incrível e o Safira tornou tudo ainda melhor.',
  },
]

const cloned = [...reviews, ...reviews, ...reviews]
const OFFSET = reviews.length

export default function Reviews() {
  const [idx, setIdx]           = useState(OFFSET)
  const [dragDelta, setDragDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const trackRef   = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef<number | null>(null)

  /* ── helpers ── */
  const setInstant = (newIdx: number) => {
    const track = trackRef.current
    if (!track) return
    track.style.transition = 'none'
    setIdx(newIdx)
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (trackRef.current) trackRef.current.style.transition = ''
    }))
  }

  const go = (newIdx: number) => {
    setIdx(newIdx)
    restartTimer()
  }

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx(i => i + 1), 20000)
  }

  /* ── auto-advance ── */
  useEffect(() => {
    restartTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  /* ── seamless wrap ── */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onEnd = () => {
      if (idx >= OFFSET + reviews.length) setInstant(idx - reviews.length)
      else if (idx < OFFSET)              setInstant(idx + reviews.length)
    }
    track.addEventListener('transitionend', onEnd)
    return () => track.removeEventListener('transitionend', onEnd)
  }, [idx])

  /* ── drag ── */
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
    setIsDragging(true)
    setDragDelta(0)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return
    setDragDelta(e.clientX - dragStartX.current)
  }

  const onMouseUp = () => {
    if (dragStartX.current === null) return
    const threshold = 60
    if (dragDelta < -threshold)      go(idx + 1)
    else if (dragDelta > threshold)  go(idx - 1)
    else                             restartTimer()
    dragStartX.current = null
    setIsDragging(false)
    setDragDelta(0)
  }

  /* ── transform ── */
  const tx = -(idx / cloned.length) * 100
  const trackStyle: React.CSSProperties = {
    transform: isDragging
      ? `translateX(calc(${tx}% + ${dragDelta}px))`
      : `translateX(${tx}%)`,
    ...(isDragging ? { transition: 'none' } : {}),
  }

  return (
    <section className="reviews section">
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

        <div
          ref={wrapperRef}
          className={`reviews-track-wrapper${isDragging ? ' dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div ref={trackRef} className="reviews-track" style={trackStyle}>
            {cloned.map((review, i) => (
              <div key={i} className="review-card">
                <div className="review-card-inner">
                  <div className="review-stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={15} fill="currentColor" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
