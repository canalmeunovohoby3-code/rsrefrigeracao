import { useEffect, useState } from 'react'
import { site, whatsappUrl } from '../config/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let contactVisible = false
    let observer

    const updateVisibility = () => {
      setVisible(window.scrollY > 420 && !contactVisible)
    }

    const contact = document.getElementById('contato')
    if (contact && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          contactVisible = entry.isIntersecting
          updateVisibility()
        },
        { threshold: 0.08 },
      )
      observer.observe(contact)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  return (
    <a
      className={`whatsapp-float${visible ? ' is-visible' : ''}`}
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Solicitar orçamento pelo WhatsApp — ${site.whatsapp.display}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <span className="whatsapp-float-icon">
        <WhatsAppIcon size={27} />
      </span>
      <span className="whatsapp-float-label">
        <small>Orçamento</small>
        <strong>Fale no WhatsApp</strong>
      </span>
    </a>
  )
}
