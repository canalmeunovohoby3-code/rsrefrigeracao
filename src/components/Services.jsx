import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section className="services section" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <div className="services-head">
          <SectionHeading
            index="02"
            eyebrow="Serviços"
            title="Soluções completas em climatização"
            description="Instalação e manutenção para diferentes sistemas de climatização e refrigeração."
            titleId="services-title"
          />
          <Reveal delay={120} className="services-aside">
            <span className="services-aside-label">Precisa de orientação?</span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Fale com a equipe
              <Icon name="ArrowUpRight" size={15} />
            </a>
          </Reveal>
        </div>

        <div className="services-grid">
          {site.services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={(index % 4) * 70}
              className="service-card"
              as="article"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Icon name={service.icon} size={26} />
                </span>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                className="service-link"
                href={whatsappUrl(site.messages.service(service.message))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar orçamento para ${service.title} pelo WhatsApp`}
              >
                Solicitar orçamento
                <Icon name="ArrowUpRight" size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
