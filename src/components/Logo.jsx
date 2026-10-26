import { site } from '../config/site'

export default function Logo({ compact = false }) {
  if (site.logo.src) {
    return (
      <img
        className={`brand-image${compact ? ' is-compact' : ''}`}
        src={site.logo.src}
        alt={site.logo.alt}
        width="174"
        height="86"
      />
    )
  }

  return (
    <span className={`brand-lockup${compact ? ' is-compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" focusable="false">
          <path d="M9 32c4.5 0 4.5-16 9-16s4.5 16 9 16 4.5-10 7-10" />
          <path d="M9 38c4.5 0 4.5-8 9-8" className="brand-mark__soft" />
          <circle cx="37" cy="22" r="2.4" />
        </svg>
        <span className="brand-mark__letters">RS</span>
      </span>
      <span className="brand-type">
        <strong>Refrigeração</strong>
        <small>Climatização · RJ</small>
      </span>
    </span>
  )
}
