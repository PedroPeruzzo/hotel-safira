import { useEffect, useState } from 'react'

interface Props {
  onClick?: () => void
}

export default function ScrollDownBtn({ onClick }: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = onClick ?? (() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  })

  return (
    <button
      className={`hero-scroll-btn${visible ? '' : ' hero-scroll-btn--hidden'}`}
      onClick={handleClick}
      aria-label="Ir para próxima seção"
    >
      <span className="hero-scroll-label">Explorar</span>
      <svg
        className="hero-scroll-arrow"
        width="18"
        height="11"
        viewBox="0 0 18 11"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 1L9 9.5L17 1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
