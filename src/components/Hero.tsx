import ScrollDownBtn from './ScrollDownBtn'

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
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

      <ScrollDownBtn onClick={scrollDown} />
    </section>
  )
}
