import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'

const highlights = [
  'Manutenção preventiva e corretiva',
  'Sistemas de climatização',
  'Refrigeração industrial',
  'PMOC para empresas',
]

export default function IndustrialSection() {
  const image = site.images.industrial

  return (
    <section className="industrial" id="industrial" aria-labelledby="industrial-title">
      <div className="industrial-bg" aria-hidden="true">
        <span className="industrial-bg-grid" />
        <span className="industrial-bg-glow" />
        <span className="industrial-bg-word">HVAC</span>
      </div>

      <div className="container industrial-grid">
        <div className="industrial-copy">
          <Reveal>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow-index">03</span>
              <span>Industrial e comercial</span>
            </p>
            <h2 id="industrial-title">
              Refrigeração & Climatização para operações que exigem desempenho
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="industrial-lede">
              Atendimento em manutenção preventiva e corretiva de sistemas de climatização e
              refrigeração, incluindo equipamentos Split, Fancoil, Chiller e câmaras frigoríficas.
            </p>
          </Reveal>

          <Reveal delay={130} variant="fade">
            <ul className="industrial-list">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="industrial-check" aria-hidden="true">
                    <Icon name="CheckCircle2" size={17} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="industrial-actions" variant="fade">
            <a
              className="btn btn-primary"
              href={whatsappUrl(site.messages.industrial)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um especialista
              <Icon name="ArrowUpRight" size={18} />
            </a>
            <span className="industrial-action-note">Atendimento sob consulta para sua região.</span>
          </Reveal>
        </div>

        <Reveal delay={120} className="industrial-media" variant="right">
          <figure className="industrial-figure">
            {image ? (
              <img
                src={image}
                alt={site.images.industrialAlt}
                width="1280"
                height="960"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="industrial-placeholder">
                <Icon name="Factory" size={48} />
                <span>Sistema industrial</span>
              </div>
            )}
            <div className="industrial-shade" aria-hidden="true" />
            {site.images.industrialIllustrative ? (
              <figcaption className="industrial-credit">Imagem ilustrativa</figcaption>
            ) : null}

            <div className="industrial-tag">
              <span className="status-dot" aria-hidden="true" />
              Preventiva · Corretiva
            </div>

            <div className="industrial-media-foot" aria-hidden="true">
              <span>SPLIT</span>
              <span>FANCOIL</span>
              <span>CHILLER</span>
              <span>CÂMARAS</span>
            </div>

            <span className="industrial-corner industrial-corner--tl" aria-hidden="true" />
            <span className="industrial-corner industrial-corner--br" aria-hidden="true" />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
