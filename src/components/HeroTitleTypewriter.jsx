import { useEffect, useState } from 'react'

const FULL_TITLE = 'Climatização eficiente. Desempenho em cada ambiente.'
const LINES = ['Climatização', 'eficiente.', 'Desempenho em', 'cada ambiente.']

const LINE_STARTS = []
let characterCount = 0

for (const line of LINES) {
  LINE_STARTS.push(characterCount)
  characterCount += line.length
}

const TOTAL_CHARACTERS = characterCount

function TypedTitle({ visibleCount }) {
  const typedLines = LINES.map((line, index) => {
    const start = LINE_STARTS[index]
    const end = start + line.length
    return line.slice(0, Math.max(0, Math.min(visibleCount, end) - start))
  })

  return (
    <span className="hero-title-typed" aria-hidden="true">
      <span className="hero-title-silver">
        {typedLines[0]}
        <br />
        {typedLines[1]}
        <br />
        {typedLines[2]}
      </span>
      <span className="hero-title-line">
        <span className={`hero-title-em${typedLines[3] ? ' has-text' : ''}`}>
          {typedLines[3]}
        </span>
      </span>
    </span>
  )
}

export default function HeroTitleTypewriter() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    let count = 0
    let deleting = false
    let timer

    setVisibleCount(0)

    const tick = () => {
      if (deleting) {
        count = Math.max(0, count - 1)
        setVisibleCount(count)

        if (count === 0) {
          deleting = false
          timer = window.setTimeout(tick, 0)
          return
        }

        timer = window.setTimeout(tick, 20)
        return
      }

      count += 1
      setVisibleCount(count)

      if (count === TOTAL_CHARACTERS) {
        deleting = true
        timer = window.setTimeout(tick, 1800)
        return
      }

      timer = window.setTimeout(tick, 50)
    }

    timer = window.setTimeout(tick, 300)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <span className="sr-only">{FULL_TITLE}</span>
      <span className="hero-title-measure" aria-hidden="true">
        <span className="hero-title-silver">
          Climatização
          <br />
          eficiente.
          <br />
          Desempenho em
        </span>
        <span className="hero-title-line">
          <span className="hero-title-em">cada ambiente.</span>
        </span>
      </span>
      <TypedTitle visibleCount={visibleCount} />
    </>
  )
}
