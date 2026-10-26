import { site } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'

function AboutVisual() {
  if (site.images.about) {
    return (
      <figure className="about-visual about-visual--photo">
        <img
          src={site.images.about}
          alt="Equipe da RS Refrigeração em atendimento"
          width="880"
          height="1040"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="about-photo-caption">RS Refrigeração</figcaption>
      </figure>
    )
  }

  return (
    <div className="about-visual">
      <div className="about-blueprint about-blueprint--brand">
        <div className="about-blueprint-top">
          <span>RS / Refrigeração</span>
          <span className="about-blueprint-code">Institucional · 01</span>
        </div>

        <div className="about-brand-stage">
          <span className="about-brand-grid" aria-hidden="true" />
          <span className="about-brand-orbit about-brand-orbit--one" aria-hidden="true" />
          <span className="about-brand-orbit about-brand-orbit--two" aria-hidden="true" />
          <span className="about-brand-glow" aria-hidden="true" />

          <img
            className="about-brand-logo"
            src={site.logo.src}
            alt={site.logo.alt}
            width="870"
            height="432"
            loading="lazy"
            decoding="async"
          />

          <span className="about-brand-rule" aria-hidden="true" />
          <p className="about-brand-tagline">{site.tagline}</p>
        </div>

        <div className="about-badge">
          <span className="about-badge-number">03</span>
          <span className="about-badge-text">
            Segmentos de
            <br />
            atendimento
          </span>
          <Icon name="ArrowUpRight" size={17} />
        </div>

        <span className="about-blueprint-caption">
          Atendimento residencial · comercial · industrial
        </span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-visual-wrap">
          <AboutVisual />
        </Reveal>

        <div className="about-content">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow-index">01</span>
              <span>A empresa</span>
            </p>
            <h2 className="about-title" id="about-title">
              Especialistas em refrigeração e climatização
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="about-text">
              A RS Refrigeração atua com serviços de instalação e manutenção de sistemas de
              climatização, atendendo demandas residenciais, comerciais e industriais.
            </p>
            <p className="about-text">
              Oferecemos soluções voltadas ao funcionamento adequado dos equipamentos e à
              continuidade das operações de cada ambiente.
            </p>
          </Reveal>

          <Reveal delay={140} className="about-segments">
            {site.segments.map((segment, index) => (
              <div className="segment-row" key={segment.id}>
                <span className="segment-icon">
                  <Icon name={segment.icon} size={23} />
                </span>
                <div className="segment-copy">
                  <h3>{segment.title}</h3>
                  <p>{segment.description}</p>
                </div>
                <span className="segment-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={190} className="about-signature">
            <span className="about-signature-line" aria-hidden="true" />
            <span>Instalação · Manutenção · PMOC</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
