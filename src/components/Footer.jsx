import { site, whatsappUrl } from '../config/site'
import Icon from './Icon'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-bg" aria-hidden="true" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              {site.logo.src ? null : <span className="sr-only">RS </span>}
              <Logo />
            </a>
            <p>
              Instalação e manutenção de sistemas de climatização para ambientes residenciais,
              comerciais e industriais.
            </p>
            <div className="footer-social">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da RS Refrigeração: ${site.instagram.handle}`}
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a RS Refrigeração pelo WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <span className="footer-social-label">Acompanhe e fale com a gente</span>
            </div>
          </div>

          <nav className="footer-column" aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <h3>Serviços</h3>
            <ul>
              {site.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#servicos">{service.title}</a>
                </li>
              ))}
              <li>
                <a href="#servicos" className="footer-more">
                  Ver todos os serviços
                  <Icon name="ArrowUpRight" size={13} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-column--contact">
            <h3>Contato</h3>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-label">WhatsApp</span>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  {site.whatsapp.display}
                </a>
              </li>
              <li>
                <span className="footer-contact-label">Instagram</span>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                <span className="footer-contact-label">Região</span>
                <span className="footer-contact-value">Rio de Janeiro e Baixada Fluminense</span>
              </li>
            </ul>
            <a href="#atendimento" className="footer-more">
              Ver áreas atendidas
              <Icon name="ArrowUpRight" size={13} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} RS Refrigeração. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#inicio" className="footer-top-link">
              Voltar ao topo
              <Icon name="ArrowUp" size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
