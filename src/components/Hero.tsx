export default function Hero() {
  const scrollDown = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/*
        Vídeo em loop — coloque o arquivo em /public/hero-video.mp4
        O atributo `poster` é exibido enquanto o vídeo carrega ou como fallback.
      */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title-script">O seu melhor destino!</h1>
        <p className="hero-subtitle-caps">O SEU HOTEL EM PORTO SEGURO, BAHIA.</p>
      </div>

      {/* Scroll indicator — discreet arrow + label */}
      <button
        className="hero-scroll-btn"
        onClick={scrollDown}
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
    </section>
  )
}
