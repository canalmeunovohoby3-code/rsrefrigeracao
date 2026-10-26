import Reveal from './Reveal'

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
  titleId,
}) {
  return (
    <Reveal
      className={`section-heading section-heading--${align} section-heading--${tone}${className ? ` ${className}` : ''}`}
    >
      <p className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true" />
        {index ? <span className="eyebrow-index">{index}</span> : null}
        <span>{eyebrow}</span>
      </p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-lede">{description}</p> : null}
    </Reveal>
  )
}
