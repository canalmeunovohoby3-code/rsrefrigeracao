import { site } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Differentials() {
  return (
    <section className="differentials section" aria-labelledby="differentials-title">
      <div className="container">
        <div className="differentials-head">
          <SectionHeading
            index="06"
            eyebrow="Diferenciais"
            title="Compromisso com o funcionamento do seu ambiente"
            titleId="differentials-title"
          />
          <Reveal delay={100} className="differentials-aside" variant="right">
            <span className="eyebrow-line" aria-hidden="true" />
            <p>
              Com experiência e compromisso com a qualidade, buscamos solucionar problemas com
              agilidade, segurança e eficiência, contribuindo para o melhor desempenho e maior
              durabilidade dos equipamentos.
            </p>
          </Reveal>
        </div>

        <div className="differentials-grid">
          {site.differentials.map((item, index) => (
            <Reveal
              key={item.title}
              className="differential-item"
              delay={index * 65}
              variant="up"
            >
              <article className="differential">
                <div className="differential-top">
                  <span className="differential-icon">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <span className="differential-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
