import { useEffect, useState } from 'react'
import { site } from '../config/site'
import Icon from './Icon'
import Modal from './Modal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function GalleryTile({ photo, index, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <button
      type="button"
      className={`gallery-item${failed ? ' is-fallback' : ''}`}
      onClick={() => onOpen(index)}
    >
      <span className="sr-only">Ampliar imagem: </span>

      <span className="gallery-media">
        {!failed ? (
          <img
            src={photo.src}
            alt={photo.placeholder ? '' : photo.alt}
            width="1600"
            height="1200"
            className={photo.fit === 'contain' ? 'is-contain' : undefined}
            style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="gallery-fallback" aria-hidden="true">
            <Icon name={photo.icon} size={44} />
            <span>Fotografia em breve</span>
          </span>
        )}

        <span className="gallery-shade" aria-hidden="true" />

        <span className="gallery-top">
          <span className="gallery-tag">{photo.tag}</span>
          {photo.placeholder ? <span className="gallery-coming">Em breve</span> : null}
        </span>
      </span>

      <span className="gallery-caption">
        <span className="gallery-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="gallery-title">{photo.title}</span>
        <span className="gallery-expand" aria-hidden="true">
          <Icon name="Maximize2" size={16} />
        </span>
      </span>
    </button>
  )
}

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const current = isOpen ? site.gallery[activeIndex] : null
  const total = site.gallery.length
  const hasPlaceholders = site.gallery.some((photo) => photo.placeholder)
  const hasRealPhotos = site.gallery.some((photo) => !photo.placeholder)

  const close = () => setActiveIndex(null)

  const navigate = (direction) => {
    setActiveIndex((index) => (index + direction + total) % total)
  }

  useEffect(() => {
    if (!isOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((index) => (index - 1 + total) % total)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((index) => (index + 1) % total)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, total])

  return (
    <section className="gallery section" id="galeria" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery-head">
          <SectionHeading
            index="04"
            eyebrow="Galeria"
            title="Conheça nosso trabalho"
            description="Veja de perto os serviços e as soluções de climatização da RS Refrigeração."
            titleId="gallery-title"
          />
          <Reveal delay={120} className="gallery-status" variant="right">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {hasPlaceholders ? (
                <>
                  {hasRealPhotos ? 'Novas fotografias' : 'Fotografias reais'}
                  <br />
                  em breve
                </>
              ) : (
                'Registros RS Refrigeração'
              )}
            </span>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {site.gallery.map((photo, index) => (
            <Reveal
              key={photo.id}
              className="gallery-reveal"
              delay={index * 55}
              variant="zoom"
            >
              <GalleryTile photo={photo} index={index} onOpen={setActiveIndex} />
            </Reveal>
          ))}
        </div>

        <Reveal className="gallery-foot" delay={80} variant="fade">
          <p>
            {hasPlaceholders
              ? hasRealPhotos
                ? 'Registros reais da RS Refrigeração e espaços reservados para as próximas fotografias.'
                : 'Este espaço está preparado para receber registros reais de instalações, equipamentos e atendimentos realizados pela RS Refrigeração.'
              : 'Registros de instalações, equipamentos e atendimentos realizados pela RS Refrigeração.'}
          </p>
          <span className="gallery-foot-line" aria-hidden="true" />
          <span className="gallery-foot-count">{String(total).padStart(2, '0')} imagens</span>
        </Reveal>
      </div>

      <Modal
        open={isOpen}
        onClose={close}
        labelledBy="lightbox-title"
        className="lightbox"
      >
        {current ? (
          <>
            <div className="lightbox-top">
              <span className="lightbox-counter" aria-live="polite">
                <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
                <span>/ {String(total).padStart(2, '0')}</span>
              </span>
              <span className="lightbox-tag">{current.tag}</span>
              <button type="button" className="modal-close" onClick={close} aria-label="Fechar visualização">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                onClick={() => navigate(-1)}
                aria-label="Imagem anterior"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>

              <figure className="lightbox-figure">
                <div className="lightbox-image-wrap">
                  <img
                    src={current.src}
                    alt={current.placeholder ? '' : current.alt}
                    width="1600"
                    height="1200"
                    onError={(event) => {
                      event.currentTarget.style.visibility = 'hidden'
                    }}
                  />
                </div>
                <figcaption className="lightbox-caption">
                  <span className="lightbox-caption-index">{String(activeIndex + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 id="lightbox-title">{current.title}</h3>
                    {current.placeholder ? (
                      <p>
                        Este é um espaço reservado. A fotografia real deste serviço será publicada
                        em breve.
                      </p>
                    ) : (
                      <p>{current.alt}</p>
                    )}
                  </div>
                </figcaption>
              </figure>

              <button
                type="button"
                className="lightbox-nav lightbox-nav--next"
                onClick={() => navigate(1)}
                aria-label="Próxima imagem"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </div>

            <div className="lightbox-bottom">
              <span>Use as setas do teclado para navegar</span>
              <span className="lightbox-dots" aria-hidden="true">
                {site.gallery.map((photo, index) => (
                  <i key={photo.id} className={index === activeIndex ? 'is-active' : undefined} />
                ))}
              </span>
              <span>Esc para fechar</span>
            </div>
          </>
        ) : null}
      </Modal>
    </section>
  )
}
