import { useEffect, useRef, useState } from 'react'
import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = site.nav.map((item) => item.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const backgroundElements = [
      document.querySelector('main'),
      document.querySelector('.site-footer'),
      document.querySelector('.whatsapp-float'),
    ].filter(Boolean)
    backgroundElements.forEach((element) => element.setAttribute('inert', ''))
    const focusTimer = window.setTimeout(() => {
      const firstLink = menuRef.current?.querySelector('a, button')
      firstLink?.focus()
    }, 60)

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(focusTimer)
      backgroundElements.forEach((element) => element.removeAttribute('inert'))
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const quoteUrl = whatsappUrl()

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <p className="topbar-note">
            <span className="status-dot" aria-hidden="true" />
            Atendimento no Rio de Janeiro e Baixada Fluminense
          </p>
          <div className="topbar-links">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram da RS Refrigeração: ${site.instagram.handle}`}
            >
              <Icon name="Instagram" size={14} />
              <span>{site.instagram.handle}</span>
            </a>
            <span className="topbar-divider" aria-hidden="true" />
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={14} />
              <span>{site.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            {site.logo.src ? null : <span className="sr-only">RS </span>}
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <ul>
              {site.nav.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={isActive ? 'is-active' : undefined}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="header-actions">
            <a
              className="btn btn-primary btn-sm header-cta"
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span>Solicitar orçamento</span>
              <Icon name="ArrowUpRight" size={16} />
            </a>

            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu" id="menu-mobile" ref={menuRef}>
          <div className="container mobile-menu-inner">
            <p className="mobile-menu-label">Navegação</p>
            <nav aria-label="Menu principal no celular">
              <ul className="mobile-nav-list">
                {site.nav.map((item, index) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={closeMenu}>
                      <span className="mobile-nav-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{item.label}</span>
                      <Icon name="ArrowUpRight" size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-menu-contact">
              <a
                className="btn btn-primary btn-block"
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <WhatsAppIcon size={18} />
                Solicitar orçamento
              </a>
              <div className="mobile-menu-meta">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <Icon name="Phone" size={15} />
                  {site.whatsapp.display}
                </a>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={15} />
                  {site.instagram.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
