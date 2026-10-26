import { site, whatsappUrl } from '../config/site'
import HeroTitleTypewriter from './HeroTitleTypewriter'
import HeroVisual from './HeroVisual'
import Icon from './Icon'
import WhatsAppIcon from './WhatsAppIcon'

export default function Hero() {
  const heroBackground = site.images.heroBackground
  const heroBackgroundSmall = site.images.heroBackgroundSmall || heroBackground
  const hasPhotoBackground = Boolean(heroBackground)

  return (
    <section
      className={`hero${hasPhotoBackground ? ' hero--photo-bg' : ''}`}
      id="inicio"
      aria-labelledby="hero-title"
    >
      {hasPhotoBackground ? (
        <div className="hero-photo-layer" aria-hidden="true">
          <img
            src={heroBackground}
            srcSet={`${heroBackgroundSmall} 1200w, ${heroBackground} 2400w`}
            sizes="100vw"
            alt=""
            width="2400"
            height="1200"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      ) : null}

      <div className="hero-bg" aria-hidden="true">
        <span className="hero-bg-glow" />
        <span className="hero-bg-arc" />
        <span className="hero-bg-line" />
        <span className="hero-bg-ticks" />
      </div>

      <div className={`container hero-inner${hasPhotoBackground ? ' hero-inner--photo' : ''}`}>
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Refrigeração e climatização
          </p>

          <h1 id="hero-title" className="hero-title">
            <HeroTitleTypewriter />
          </h1>

          <p className="hero-lede">
            Soluções em instalação e manutenção de sistemas de climatização para ambientes
            residenciais, comerciais e industriais no Rio de Janeiro e região.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Solicitar orçamento
              <Icon name="ArrowUpRight" size={17} />
            </a>
            <a className="btn btn-ghost-light" href="#servicos">
              Conheça nossos serviços
              <Icon name="ArrowRight" size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <span className="hero-proof-label">Atendimento</span>
            <ul className="hero-segments">
              {site.segments.map((segment) => (
                <li key={segment.id}>{segment.title}</li>
              ))}
            </ul>
          </div>
        </div>

        {hasPhotoBackground ? null : <HeroVisual />}
      </div>

      <div className="container hero-bottom">
        <div className="hero-bottom-item">
          <span className="hero-bottom-label">Sistemas</span>
          <span>Split · Fancoil · Chiller</span>
        </div>
        <div className="hero-bottom-item">
          <span className="hero-bottom-label">Soluções</span>
          <span>Câmaras frigoríficas · PMOC</span>
        </div>
        <div className="hero-bottom-item hero-bottom-item--region">
          <span className="hero-bottom-label">Região</span>
          <span>Rio de Janeiro e Baixada Fluminense</span>
        </div>
        <a className="hero-scroll" href="#sobre">
          <span>Role para explorar</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
