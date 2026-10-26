import { site } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Stars({ rating = 5, label }) {
  return (
    <span
      className="testimonial-stars"
      role="img"
      aria-label={label || `${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="Star"
          size={15}
          className={index < rating ? 'is-filled' : 'is-empty'}
        />
      ))}
    </span>
  )
}

export default function Testimonials() {
  const count = site.testimonials.length
  const numericAverage = count
    ? site.testimonials.reduce((total, item) => total + item.rating, 0) / count
    : 0
  const average = numericAverage.toFixed(1).replace('.', ',')

  return (
    <section className="testimonials section" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="testimonials-bg" aria-hidden="true" />

      <div className="container">
        <div className="testimonials-head">
          <SectionHeading
            tone="light"
            index="07"
            eyebrow="Depoimentos"
            title="O que dizem nossos clientes"
            description="Relatos de quem já contratou a RS Refrigeração para instalação e manutenção de sistemas de climatização."
            titleId="testimonials-title"
          />

          <Reveal delay={110} className="testimonials-head-mark" variant="right">
            <span className="testimonials-head-line" aria-hidden="true" />
            <span className="testimonials-head-text">
              Depoimentos de clientes
              <br />
              da RS Refrigeração
            </span>
          </Reveal>
        </div>

        <div className="testimonials-layout">
          <Reveal className="rating-summary" variant="left">
            <span className="rating-label">Avaliações de clientes</span>

            <div className="rating-score-row">
              <strong className="rating-score">{average}</strong>
              <span className="rating-score-total">/ 5</span>
            </div>

            <Stars rating={5} label={`${average} de 5 estrelas`} />

            <p className="rating-count">
              {String(count).padStart(2, '0')} depoimentos compartilhados
            </p>

            <span className="rating-rule" aria-hidden="true" />

            <p className="rating-note">
              Depoimentos enviados por clientes da RS Refrigeração sobre atendimento, instalação e
              serviços realizados.
            </p>

            <span className="rating-mark" aria-hidden="true">
              “
            </span>
          </Reveal>

          <div className="testimonials-list">
            {site.testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.id}
                className="testimonial-item"
                delay={index * 85}
                variant="up"
              >
                <article className="testimonial-card">
                  <div className="testimonial-top">
                    <Stars
                      rating={testimonial.rating}
                      label={`${testimonial.rating} de 5 estrelas`}
                    />
                    {testimonial.price ? (
                      <span className="testimonial-price">{testimonial.price}</span>
                    ) : null}
                  </div>

                  <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>

                  {testimonial.service ? (
                    <span className="testimonial-service">{testimonial.service}</span>
                  ) : null}

                  <div className="testimonial-author">
                    <span className="testimonial-avatar" aria-hidden="true">
                      {testimonial.initials}
                    </span>
                    <span className="testimonial-author-copy">
                      <strong>{testimonial.name}</strong>
                      <span>Cliente RS Refrigeração</span>
                    </span>
                  </div>

                  {testimonial.reply ? (
                    <div className="testimonial-reply">
                      <span className="testimonial-reply-label">Resposta da RS Refrigeração</span>
                      <p>{testimonial.reply}</p>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
