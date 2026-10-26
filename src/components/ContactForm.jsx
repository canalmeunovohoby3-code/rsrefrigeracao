import { useRef, useState } from 'react'
import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import WhatsAppIcon from './WhatsAppIcon'

const initialValues = {
  name: '',
  phone: '',
  type: '',
  service: '',
  city: '',
  description: '',
}

function onlyDigits(value) {
  return value.replace(/\D/g, '')
}

function formatPhone(value) {
  let digits = onlyDigits(value)
  if (digits.length > 11 && digits.startsWith('55')) digits = digits.slice(2)
  digits = digits.slice(0, 11)

  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validate(values) {
  const errors = {}
  const phoneDigits = onlyDigits(values.phone)

  if (values.name.trim().length < 2) {
    errors.name = 'Informe seu nome.'
  }
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.phone = 'Informe um telefone com DDD, por exemplo (21) 96561-3684.'
  }
  if (!values.type) {
    errors.type = 'Selecione o tipo de atendimento.'
  }
  if (!values.service) {
    errors.service = 'Selecione o serviço desejado.'
  }
  if (values.city.trim().length < 2) {
    errors.city = 'Informe sua cidade ou bairro.'
  }

  return errors
}

const typeIcons = {
  Residencial: 'House',
  Comercial: 'Building2',
  Industrial: 'Factory',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [whatsappMessageUrl, setWhatsappMessageUrl] = useState('')
  const formRef = useRef(null)

  const updateField = (field) => (event) => {
    let value = event.target.value
    if (field === 'phone') value = formatPhone(value)
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    setStatus('idle')
  }

  const buildMessage = () => {
    const lines = [
      `Olá! Acessei o site da RS Refrigeração e gostaria de solicitar um orçamento. Meu serviço é relacionado a ${values.service}. Poderiam me ajudar?`,
      '',
      `• Nome: ${values.name.trim()}`,
      `• Telefone/WhatsApp: ${values.phone}`,
      `• Tipo de atendimento: ${values.type}`,
      `• Serviço desejado: ${values.service}`,
      `• Cidade/Bairro: ${values.city.trim()}`,
    ]

    if (values.description.trim()) {
      lines.push(`• Descrição da necessidade: ${values.description.trim()}`)
    }

    lines.push('', 'Aguardo o contato. Obrigado(a)!')
    return lines.join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      const firstField = Object.keys(nextErrors)[0]
      window.requestAnimationFrame(() => {
        const target = formRef.current?.querySelector(`[name="${firstField}"]`)
        target?.focus()
      })
      return
    }

    const messageUrl = whatsappUrl(buildMessage())
    setWhatsappMessageUrl(messageUrl)
    setStatus('ready')
    window.open(messageUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal className="contact-aside">
          <div className="contact-aside-inner">
            <span className="contact-aside-glow" aria-hidden="true" />
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow-index">09</span>
              <span>Contato</span>
            </p>
            <h2 id="contact-title">Solicite seu orçamento</h2>
            <p className="contact-aside-text">
              Conte o que você precisa. A solicitação será organizada e aberta no WhatsApp para
              concluir o atendimento.
            </p>

            <ul className="contact-channels">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <span className="contact-channel-icon">
                    <WhatsAppIcon size={19} />
                  </span>
                  <span className="contact-channel-copy">
                    <small>WhatsApp</small>
                    <strong>{site.whatsapp.display}</strong>
                  </span>
                  <Icon name="ArrowUpRight" size={16} />
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  <span className="contact-channel-icon">
                    <Icon name="Instagram" size={19} />
                  </span>
                  <span className="contact-channel-copy">
                    <small>Instagram</small>
                    <strong>{site.instagram.handle}</strong>
                  </span>
                  <Icon name="ArrowUpRight" size={16} />
                </a>
              </li>
              <li>
                <span className="contact-channel-static">
                  <span className="contact-channel-icon">
                    <Icon name="MapPin" size={19} />
                  </span>
                  <span className="contact-channel-copy">
                    <small>Atendimento</small>
                    <strong>Rio de Janeiro e Baixada Fluminense</strong>
                  </span>
                </span>
              </li>
            </ul>

            <div className="contact-scope">
              <span className="contact-scope-label">Segmentos atendidos</span>
              <ul>
                {site.segments.map((segment) => (
                  <li key={segment.id}>
                    <Icon name={segment.icon} size={14} />
                    {segment.title}
                  </li>
                ))}
              </ul>
            </div>

            <p className="contact-aside-note">
              <Icon name="ShieldCheck" size={15} />
              Nenhum dado é armazenado neste site. A conversa acontece no WhatsApp.
            </p>

            <span className="contact-aside-mark" aria-hidden="true">
              RS
            </span>
          </div>
        </Reveal>

        <Reveal className="contact-form-card" delay={100}>
          <div className="form-head">
            <div>
              <span className="form-kicker">Formulário de contato</span>
              <h3>Solicitar orçamento</h3>
            </div>
            <span className="form-required-note">* campos obrigatórios</span>
          </div>

          {Object.keys(errors).length > 0 ? (
            <div className="form-alert form-alert--error" role="alert">
              <Icon name="AlertCircle" size={18} />
              <p>Revise os campos destacados para continuar.</p>
            </div>
          ) : null}

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="name">Nome *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={updateField('name')}
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Seu nome"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name ? (
                  <span className="field-error" id="name-error">
                    <Icon name="AlertCircle" size={14} />
                    {errors.name}
                  </span>
                ) : null}
              </div>

              <div className={`field${errors.phone ? ' has-error' : ''}`}>
                <label htmlFor="phone">Telefone / WhatsApp *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={updateField('phone')}
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={16}
                  placeholder="(21) 96561-3684"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone ? (
                  <span className="field-error" id="phone-error">
                    <Icon name="AlertCircle" size={14} />
                    {errors.phone}
                  </span>
                ) : null}
              </div>
            </div>

            <fieldset className={`field field-type${errors.type ? ' has-error' : ''}`}>
              <legend>Tipo de atendimento *</legend>
              <div className="type-options">
                {site.form.types.map((type) => (
                  <label key={type} className={`type-option${values.type === type ? ' is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={values.type === type}
                      onChange={updateField('type')}
                      aria-describedby={errors.type ? 'type-error' : undefined}
                    />
                    <span className="type-option-inner">
                      <Icon name={typeIcons[type]} size={18} />
                      {type}
                    </span>
                  </label>
                ))}
              </div>
              {errors.type ? (
                <span className="field-error" id="type-error">
                  <Icon name="AlertCircle" size={14} />
                  {errors.type}
                </span>
              ) : null}
            </fieldset>

            <div className="form-row">
              <div className={`field${errors.service ? ' has-error' : ''}`}>
                <label htmlFor="service">Serviço desejado *</label>
                <div className="select-wrap">
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={updateField('service')}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {site.form.serviceOptions.map((service) => (
                      <option value={service} key={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={16} />
                </div>
                {errors.service ? (
                  <span className="field-error" id="service-error">
                    <Icon name="AlertCircle" size={14} />
                    {errors.service}
                  </span>
                ) : null}
              </div>

              <div className={`field${errors.city ? ' has-error' : ''}`}>
                <label htmlFor="city">Cidade ou bairro *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={values.city}
                  onChange={updateField('city')}
                  autoComplete="address-level2"
                  maxLength={80}
                  placeholder="Ex.: Barra da Tijuca"
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                />
                {errors.city ? (
                  <span className="field-error" id="city-error">
                    <Icon name="AlertCircle" size={14} />
                    {errors.city}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="field field-full">
              <label htmlFor="description">
                Descrição da necessidade <span className="label-optional">(opcional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={updateField('description')}
                rows={4}
                maxLength={600}
                placeholder="Descreva o equipamento, o ambiente ou o problema que precisa resolver."
              />
              <span className="field-counter">{values.description.length}/600</span>
            </div>

            {status === 'ready' ? (
              <div className="form-alert form-alert--success" role="status">
                <Icon name="CheckCircle2" size={19} />
                <div>
                  <p>Solicitação pronta! O WhatsApp foi aberto para concluir o contato.</p>
                  <a
                    href={whatsappMessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="form-alert-link"
                  >
                    Se o WhatsApp não abriu, clique aqui para abrir novamente
                    <Icon name="ArrowUpRight" size={14} />
                  </a>
                </div>
              </div>
            ) : null}

            <div className="form-submit">
              <button type="submit" className="btn btn-primary btn-lg">
                <Icon name="Send" size={18} />
                Enviar solicitação
              </button>
              <p className="form-privacy">
                Ao enviar, o WhatsApp será aberto com uma mensagem organizada com seus dados.
                Nenhum dado é enviado a um servidor.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
