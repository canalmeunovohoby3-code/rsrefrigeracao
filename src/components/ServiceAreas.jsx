import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function ServiceAreas() {
  return (
    <section className="areas section" id="atendimento" aria-labelledby="areas-title">
      <div className="container areas-grid">
        <div className="areas-intro">
          <SectionHeading
            index="08"
            eyebrow="Área de atendimento"
            title="Atendimento no Rio de Janeiro e região"
            titleId="areas-title"
          />

          <Reveal delay={90} className="areas-intro-copy">
            <p>
              Atendemos bairros do Rio de Janeiro e municípios da Baixada Fluminense. Consulte a
              disponibilidade de atendimento para sua região.
            </p>
            <div className="areas-cta">
              <a
                className="btn btn-dark"
                href={whatsappUrl(site.messages.area)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar pelo WhatsApp
                <Icon name="ArrowUpRight" size={17} />
              </a>
              <span className="areas-cta-note">Resposta pelo WhatsApp</span>
            </div>
          </Reveal>

          <span className="areas-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </span>
        </div>

        <div className="areas-list">
          {site.serviceAreas.map((group, index) => (
            <Reveal
              key={group.id}
              className="area-card"
              delay={index * 65}
              as="article"
            >
              <div className="area-card-head">
                <span className="area-code">{group.code}</span>
                <span className="area-pin">
                  <Icon name="MapPin" size={18} />
                </span>
              </div>
              <p className="area-region">{group.region}</p>
              <h3>{group.zone}</h3>
              <ul className="area-tags">
                {group.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
