import { whatsappUrl } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'
import WhatsAppIcon from './WhatsAppIcon'

export default function CtaBanner() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta-panel">
          <div className="cta-art" aria-hidden="true">
            <svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" focusable="false">
              <defs>
                <linearGradient id="cta-flow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#FB6D09" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#FB6D09" stopOpacity="0.65" />
                  <stop offset="1" stopColor="#FB6D09" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="742" cy="208" r="210" fill="none" stroke="rgba(255,255,255,0.08)" />
              <circle cx="742" cy="208" r="148" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 9" />
              <circle cx="742" cy="208" r="268" fill="none" stroke="rgba(251,109,9,0.18)" />
              <path d="M468 112c120 0 132 194 252 194s132-150 252-150" fill="none" stroke="url(#cta-flow)" strokeWidth="2.5" />
              <path d="M460 154c112 0 142 170 258 170s148-112 240-112" fill="none" stroke="url(#cta-flow)" strokeWidth="1.5" opacity="0.65" />
              <path d="M490 70c90 0 138 118 250 118" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <g fill="none" stroke="rgba(255,255,255,0.16)">
                <path d="M660 56v304M686 56v304" />
                <path d="M620 94h122M620 322h122" />
              </g>
            </svg>
          </div>

          <div className="cta-copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow-line" aria-hidden="true" />
              <span>Orçamento</span>
            </p>
            <h2 id="cta-title">Precisa de instalação ou manutenção?</h2>
            <p className="cta-text">
              Entre em contato com a RS Refrigeração e solicite um orçamento para sua necessidade.
            </p>
          </div>

          <div className="cta-action">
            <a
              className="btn btn-primary btn-lg"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              Solicitar orçamento pelo WhatsApp
              <Icon name="ArrowUpRight" size={18} />
            </a>
            <p className="cta-meta">
              <span className="status-dot" aria-hidden="true" />
              Atendimento no Rio de Janeiro e Baixada Fluminense
            </p>
          </div>

          <span className="cta-corner cta-corner--tl" aria-hidden="true" />
          <span className="cta-corner cta-corner--br" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  )
}
