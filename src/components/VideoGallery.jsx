import { useEffect, useState } from 'react'
import { site } from '../config/site'
import Icon from './Icon'
import Modal from './Modal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function getYouTubeId(url = '') {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
  return match ? match[1] : ''
}

export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [mediaError, setMediaError] = useState(false)
  const isOpen = activeIndex !== null
  const current = isOpen ? site.videos[activeIndex] : null
  const hasPlaceholders = site.videos.some((video) => video.placeholder)
  const currentYouTubeId = current ? getYouTubeId(current.youtubeUrl) : ''
  const ready = Boolean(current && !current.placeholder && (current.src || currentYouTubeId))

  useEffect(() => {
    setMediaError(false)
  }, [activeIndex])

  const close = () => setActiveIndex(null)

  return (
    <section className="videos section" id="videos" aria-labelledby="videos-title">
      <div className="videos-bg" aria-hidden="true" />
      <div className="container">
        <div className="videos-head">
          <SectionHeading
            index="05"
            eyebrow="Vídeos"
            title="RS Refrigeração em ação"
            description="Conheça nossos serviços, equipamentos e soluções em climatização."
            titleId="videos-title"
            tone="light"
          />
          <Reveal delay={100} className="videos-note" variant="right">
            <Icon name="Play" size={15} />
            <span>
              {hasPlaceholders
                ? 'Quatro espaços preparados para os vídeos oficiais'
                : 'Vídeos oficiais da RS Refrigeração'}
            </span>
          </Reveal>
        </div>

        <div className="videos-grid">
          {site.videos.map((video, index) => (
            <Reveal
              key={video.id}
              className="video-item"
              delay={index * 90}
              variant="up"
            >
              <article className={`video-card${video.placeholder ? ' is-placeholder' : ''}`}>
                <button
                  type="button"
                  className="video-poster"
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="sr-only">
                    {video.placeholder
                      ? `Vídeo em breve: ${video.title}. `
                      : `Reproduzir vídeo: ${video.title}. `}
                  </span>
                  <img
                    src={video.poster}
                    alt=""
                    width="720"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="video-shade" aria-hidden="true" />
                  <span className="video-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="video-play" aria-hidden="true">
                    <Icon name="Play" size={24} />
                  </span>
                  {video.placeholder ? (
                    <span className="video-coming">
                      <span className="status-dot" aria-hidden="true" />
                      Vídeo em breve
                    </span>
                  ) : null}
                  <span className="video-corner" aria-hidden="true" />
                </button>

                <div className="video-meta">
                  <div className="video-meta-copy">
                    {video.tag ? <span className="video-tag">{video.tag}</span> : null}
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                  <span className="video-meta-arrow" aria-hidden="true">
                    <Icon name="ArrowUpRight" size={18} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={isOpen}
        onClose={close}
        labelledBy="video-modal-title"
        className="video-modal"
      >
        {current ? (
          <>
            <div className="video-modal-top">
              <div>
                <span className="video-modal-label">RS Refrigeração · vídeo</span>
                <h3 id="video-modal-title">{current.title}</h3>
              </div>
              <button type="button" className="modal-close" onClick={close} aria-label="Fechar vídeo">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className={`video-player${current.portrait ? ' is-portrait' : ''}`}>
              {ready && !mediaError ? (
                currentYouTubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${currentYouTubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={current.src}
                    poster={current.poster}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onError={() => setMediaError(true)}
                  >
                    Seu navegador não suporta reprodução de vídeo em HTML5.
                  </video>
                )
              ) : (
                <div className="video-modal-placeholder">
                  <img src={current.poster} alt="" width="720" height="1280" />
                  <div className="video-modal-placeholder-shade" aria-hidden="true" />
                  <div className="video-modal-placeholder-copy">
                    <span className="status-dot" aria-hidden="true" />
                    <p>{mediaError ? 'Não foi possível carregar este vídeo.' : 'Conteúdo em breve'}</p>
                    <span>
                      {mediaError
                        ? 'O arquivo configurado não pôde ser reproduzido. Verifique a fonte do vídeo.'
                        : 'Este vídeo será adicionado à seção assim que o material oficial for enviado.'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="video-modal-foot">
              <p>{current.description}</p>
              <span className="video-modal-count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(site.videos.length).padStart(2, '0')}
              </span>
            </div>
          </>
        ) : null}
      </Modal>
    </section>
  )
}
