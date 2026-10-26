import { useEffect, useRef, useState } from 'react'

const VARIANTS = {
  up: { x: '0px', y: '28px', scale: '1' },
  left: { x: '-34px', y: '0px', scale: '1' },
  right: { x: '34px', y: '0px', scale: '1' },
  zoom: { x: '0px', y: '16px', scale: '0.965' },
  fade: { x: '0px', y: '0px', scale: '1' },
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  duration = 760,
  variant = 'up',
  className = '',
  once = true,
  style,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const motion = VARIANTS[variant] || VARIANTS.up

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    let observer

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true)
              if (once) observer.unobserve(entry.target)
            } else if (!once) {
              setVisible(false)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -7% 0px' },
      )

      observer.observe(element)
    } catch {
      setVisible(true)
      return undefined
    }

    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      data-reveal-variant={variant}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
        '--reveal-x': motion.x,
        '--reveal-y': motion.y,
        '--reveal-scale': motion.scale,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
