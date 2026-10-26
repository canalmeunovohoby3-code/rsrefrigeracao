import { site } from '../config/site'
import Icon from './Icon'

export default function HeroVisual() {
  const photo = site.images.hero

  if (photo) {
    return (
      <figure className="hero-visual hero-visual--photo">
        <img
          src={photo}
          alt="Sistema de climatização instalado pela RS Refrigeração"
          width="960"
          height="1080"
          fetchpriority="high"
        />
        <div className="hero-photo-shade" aria-hidden="true" />
        <div className="hv-chip hv-chip--status">
          <span className="status-dot" aria-hidden="true" />
          <span className="hv-chip-copy">
            <small>Sistema</small>
            <strong>Climatização</strong>
          </span>
        </div>
        <div className="hv-reading" aria-hidden="true">
          <span className="hv-reading-label">Conforto</span>
          <span className="hv-reading-value">
            22<sup>°</sup>
          </span>
          <span className="hv-reading-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <figcaption className="hv-caption">Climatização · RS Refrigeração</figcaption>
      </figure>
    )
  }

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hv-frame">
        <svg className="hv-drawing" viewBox="0 0 560 640" role="presentation" focusable="false">
          <defs>
            <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#031c40" />
              <stop offset="0.62" stopColor="#00173a" />
              <stop offset="1" stopColor="#000c20" />
            </linearGradient>
            <pattern id="hv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            </pattern>
            <linearGradient id="hv-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.55" stopColor="#eaf0f5" />
              <stop offset="1" stopColor="#c3d0dc" />
            </linearGradient>
            <linearGradient id="hv-flow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FB6D09" stopOpacity="0.95" />
              <stop offset="0.55" stopColor="#FB6D09" stopOpacity="0.5" />
              <stop offset="1" stopColor="#FB6D09" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hv-flap" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9fb0c0" />
              <stop offset="0.5" stopColor="#e9f0f5" />
              <stop offset="1" stopColor="#adbdca" />
            </linearGradient>
            <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#FB6D09" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FB6D09" stopOpacity="0" />
            </radialGradient>
            <filter id="hv-shadow" x="-30%" y="-30%" width="160%" height="180%">
              <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#00030c" floodOpacity="0.5" />
            </filter>
          </defs>

          <rect width="560" height="640" fill="url(#hv-bg)" />
          <rect width="560" height="640" fill="url(#hv-grid)" />

          <g className="hv-rings">
            <circle cx="403" cy="222" r="208" fill="none" stroke="rgba(255,255,255,0.075)" />
            <circle cx="403" cy="222" r="152" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 9" />
            <circle cx="403" cy="222" r="222" fill="none" stroke="rgba(251,109,9,0.45)" strokeWidth="1.4" strokeDasharray="116 1280" transform="rotate(-48 403 222)" />
          </g>

          <circle cx="300" cy="320" r="185" fill="url(#hv-glow)" />

          <g className="hv-ruler" stroke="rgba(181,191,201,0.32)" strokeWidth="1">
            <line x1="40" y1="164" x2="40" y2="454" />
            {Array.from({ length: 11 }).map((_, index) => (
              <line
                key={index}
                x1={index % 5 === 0 ? 32 : 36}
                y1={164 + index * 29}
                x2="40"
                y2={164 + index * 29}
              />
            ))}
            <text x="24" y="318" fill="rgba(181,191,201,0.55)" stroke="none" fontSize="8" letterSpacing="2" transform="rotate(-90 24 318)" textAnchor="middle">
              TEMPERATURA
            </text>
          </g>

          <g className="hv-unit" filter="url(#hv-shadow)" transform="rotate(-6 280 246)">
            <rect x="84" y="206" width="398" height="126" rx="20" fill="url(#hv-body)" />
            <path d="M104 208h358a18 18 0 0 1 18 18v12H86v-12a18 18 0 0 1 18-18Z" fill="rgba(255,255,255,0.55)" />
            <line x1="98" y1="278" x2="468" y2="278" stroke="rgba(0,25,65,0.18)" />
            <rect x="104" y="287" width="358" height="18" rx="9" fill="#071e3c" />
            {Array.from({ length: 29 }).map((_, index) => (
              <line
                key={index}
                x1={112 + index * 12}
                y1="291"
                x2={112 + index * 12}
                y2="301"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1"
              />
            ))}
            <rect x="104" y="307" width="358" height="6" rx="3" fill="rgba(0,25,65,0.12)" />
            <path d="M104 316h358a10 10 0 0 1-10 10H114a10 10 0 0 1-10-10Z" fill="url(#hv-flap)" opacity="0.9" />
            <rect x="362" y="230" width="54" height="20" rx="5" fill="#0a203c" />
            <text x="389" y="244" textAnchor="middle" fill="#FB6D09" fontFamily="'IBM Plex Mono', monospace" fontSize="10" letterSpacing="1">
              22
            </text>
            <circle cx="350" cy="240" r="3.4" fill="#FB6D09" />
            <circle cx="122" cy="224" r="2" fill="rgba(0,25,65,0.18)" />
            <circle cx="444" cy="224" r="2" fill="rgba(0,25,65,0.18)" />
            <path d="M84 236H62l-8-8" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1.4" />
            <path d="M482 236h22l8-8" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1.4" />
          </g>

          <g className="hv-flows" fill="none" strokeLinecap="round">
            <path d="M174 334c-48 48-76 68-57 121 17 49 8 77-29 104" stroke="url(#hv-flow)" strokeWidth="22" opacity="0.13" />
            <path d="M245 338c-24 69-41 82-27 133 11 41 2 67-21 88" stroke="url(#hv-flow)" strokeWidth="3" />
            <path d="M308 340c8 58-9 92 7 130 12 29 4 51-11 70" stroke="url(#hv-flow)" strokeWidth="2.4" />
            <path d="M371 336c40 47 62 70 47 119-12 39-2 63 26 87" stroke="url(#hv-flow)" strokeWidth="2.8" />
            <path d="M419 330c52 39 74 67 57 106" stroke="url(#hv-flow)" strokeWidth="1.8" />
          </g>

          <g className="hv-callout" fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" letterSpacing="1.8" fill="rgba(181,191,201,0.7)">
            <line x1="64" y1="150" x2="150" y2="150" stroke="rgba(181,191,201,0.25)" />
            <circle cx="154" cy="150" r="3" fill="#FB6D09" />
            <text x="64" y="140">UNIDADE INTERNA</text>
            <line x1="390" y1="514" x2="488" y2="514" stroke="rgba(181,191,201,0.25)" />
            <circle cx="386" cy="514" r="3" fill="#FB6D09" />
            <text x="408" y="530">FLUXO DE AR</text>
          </g>

          <g className="hv-measure" stroke="rgba(181,191,201,0.28)" strokeWidth="1">
            <line x1="76" y1="582" x2="484" y2="582" />
            <line x1="76" y1="575" x2="76" y2="589" />
            <line x1="484" y1="575" x2="484" y2="589" />
            <line x1="280" y1="575" x2="280" y2="589" />
            <circle cx="280" cy="582" r="2.6" fill="#FB6D09" stroke="none" />
          </g>

          <text x="532" y="36" textAnchor="end" fill="rgba(251,109,9,0.9)" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="2.4">
            SPLIT · 01
          </text>
        </svg>

        <div className="hv-chip hv-chip--status">
          <span className="status-dot" aria-hidden="true" />
          <span className="hv-chip-copy">
            <small>Sistema</small>
            <strong>Climatização</strong>
          </span>
        </div>

        <div className="hv-reading">
          <span className="hv-reading-icon">
            <Icon name="Thermometer" size={16} />
          </span>
          <span className="hv-reading-label">Conforto</span>
          <span className="hv-reading-value">
            22<sup>°</sup>
          </span>
          <span className="hv-reading-bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>

        <span className="hv-corner hv-corner--tl" />
        <span className="hv-corner hv-corner--br" />
      </div>
      <span className="hv-caption">Ilustração técnica · sistema split</span>
    </div>
  )
}
