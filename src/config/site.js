/**
 * CONFIGURAÇÃO CENTRAL DA RS REFRIGERAÇÃO
 * ------------------------------------------------------------
 * Altere aqui os dados da empresa, contatos, serviços, áreas,
 * fotografias e vídeos. Os componentes leem este arquivo.
 */

export const site = {
  name: 'RS Refrigeração',
  nameMark: 'RS',
  descriptor: 'Refrigeração e Climatização',
  tagline: 'Climatização eficiente. Desempenho em cada ambiente.',
  description:
    'Instalação e manutenção de sistemas de climatização para ambientes residenciais, comerciais e industriais no Rio de Janeiro e região.',
  city: 'Rio de Janeiro',
  region: 'Rio de Janeiro e Baixada Fluminense',

  whatsapp: {
    // Formato internacional, apenas dígitos
    number: '5521965613684',
    display: '(21) 96561-3684',
  },

  instagram: {
    handle: '@rs_.refrigeracao',
    url: 'https://www.instagram.com/rs_.refrigeracao/',
  },

  // Logotipo oficial: quando receber o arquivo, coloque em /public/images/logo.png
  // e informe o caminho abaixo. Enquanto estiver vazio, o site usa a marca textual.
  logo: {
    src: '/images/logo.png',
    alt: 'RS Refrigeração',
  },

  /**
   * Fotografias opcionais de apoio (hero, apresentação).
   * Deixe vazio para manter as composições técnicas originais.
   * Exemplo: '/images/hero.jpg'
   */
  images: {
    hero: '',
    // Foto de fundo do hero (otimizada a partir de fundohero.png).
    heroBackground: '/images/hero-background.jpg',
    heroBackgroundSmall: '/images/hero-background-1200.jpg',
    about: '',
    // Fotografia real de manutenção em equipamento de climatização.
    industrial: '/images/manutencao-industrial-comercial.jpg',
    // A foto atual é real; o selo "Imagem ilustrativa" fica oculto.
    industrialIllustrative: false,
    industrialAlt:
      'Técnico realizando manutenção em unidade externa de ar-condicionado',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ],

  segments: [
    {
      id: 'residencial',
      icon: 'House',
      title: 'Residencial',
      description:
        'Climatização pensada para o conforto e o bem-estar da sua casa.',
      message: 'atendimento residencial',
    },
    {
      id: 'comercial',
      icon: 'Building2',
      title: 'Comercial',
      description:
        'Soluções para lojas, escritórios e ambientes de atendimento ao público.',
      message: 'atendimento comercial',
    },
    {
      id: 'industrial',
      icon: 'Factory',
      title: 'Industrial',
      description:
        'Atendimento a sistemas de climatização e refrigeração de operações industriais.',
      message: 'atendimento industrial',
    },
  ],

  services: [
    {
      id: 'instalacao',
      icon: 'AirVent',
      title: 'Instalação de ar-condicionado',
      description:
        'Instalação de sistemas de climatização para ambientes residenciais e comerciais.',
      message: 'instalação de ar-condicionado',
    },
    {
      id: 'preventiva',
      icon: 'ClipboardCheck',
      title: 'Manutenção preventiva',
      description:
        'Cuidados periódicos para acompanhar o funcionamento dos equipamentos e identificar necessidades de manutenção.',
      message: 'manutenção preventiva',
    },
    {
      id: 'corretiva',
      icon: 'Wrench',
      title: 'Manutenção corretiva',
      description:
        'Avaliação e manutenção de equipamentos que apresentam falhas ou problemas de funcionamento.',
      message: 'manutenção corretiva',
    },
    {
      id: 'split',
      icon: 'Wind',
      title: 'Sistemas Split',
      description:
        'Instalação e manutenção de equipamentos do tipo split.',
      message: 'serviço em sistema split',
    },
    {
      id: 'fancoil',
      icon: 'Fan',
      title: 'Sistemas Fancoil',
      description:
        'Serviços de manutenção preventiva e corretiva em sistemas fancoil.',
      message: 'manutenção de sistema fancoil',
    },
    {
      id: 'chillers',
      icon: 'Snowflake',
      title: 'Chillers',
      description:
        'Atendimento de manutenção em sistemas de refrigeração do tipo chiller.',
      message: 'manutenção de chiller',
    },
    {
      id: 'camaras',
      icon: 'Refrigerator',
      title: 'Câmaras frigoríficas',
      description:
        'Manutenção de sistemas de refrigeração utilizados em câmaras frigoríficas.',
      message: 'manutenção de câmara frigorífica',
    },
    {
      id: 'pmoc',
      icon: 'FileCheck2',
      title: 'PMOC para empresas',
      description:
        'Serviços relacionados ao Plano de Manutenção, Operação e Controle de sistemas de climatização.',
      message: 'PMOC para empresas',
    },
  ],

  differentials: [
    {
      icon: 'House',
      title: 'Atendimento residencial, comercial e industrial',
      description:
        'Soluções adequadas à rotina e à escala de cada tipo de ambiente.',
    },
    {
      icon: 'Settings2',
      title: 'Instalação e manutenção de sistemas de climatização',
      description:
        'Serviços voltados ao funcionamento adequado dos equipamentos.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Manutenção preventiva e corretiva',
      description:
        'Acompanhamento periódico e atendimento a equipamentos com falhas.',
    },
    {
      icon: 'MapPin',
      title: 'Rio de Janeiro e Baixada Fluminense',
      description:
        'Consulte a disponibilidade de atendimento para o seu bairro.',
    },
  ],

  /**
   * DEPOIMENTOS — conteúdo enviado pelo cliente.
   * Datas relativas foram omitidas para não ficarem desatualizadas.
   */
  testimonials: [
    {
      id: 'jose-zandona',
      name: 'JOSE ZANDONA',
      initials: 'JZ',
      rating: 5,
      quote:
        'Excelente profissional, pontual e dedicado ao que propõe. Recomendo',
      price: 'Preço razoável · R$ 600–800',
      reply: '',
    },
    {
      id: 'uniao-das-tendas',
      name: 'Uniao das Tendas',
      initials: 'UT',
      rating: 5,
      quote:
        'Quero aqui agradecer ao excelente trabalho prestado pelo profissional Ricardo, trabalho esse que envolve, comportamental e profissional, muito respeitado e profissional, qualidade e preço justo.',
      reply: 'Obrigado pela confiança',
    },
    {
      id: 'rosilene-rosi',
      name: 'Rosilene Rosi',
      initials: 'RR',
      rating: 5,
      service: 'Instalação de ar-condicionado',
      quote:
        'Gostei bastante do serviço. Desde o primeiro contato fui bem atendida, tiraram minhas dúvidas e fizeram a instalação com bastante cuidado. O aparelho ficou funcionando perfeitamente e o acabamento ficou muito bom. Recomendo!',
      reply: 'Muito obrigado',
    },
    {
      id: 'camila-soares',
      name: 'Camila Soares',
      initials: 'CS',
      rating: 5,
      quote:
        'Excelente experiência com a RS Refrigeração. Desde o orçamento até a execução do serviço foram muito profissionais. Cumpriram o combinado e deixaram tudo organizado depois. É difícil encontrar um serviço tão cuidadoso hoje em dia.',
      reply: 'Obrigado pela confiança',
    },
  ],
  serviceAreas: [
    {
      id: 'zona-oeste',
      code: 'RJ · 01',
      region: 'Rio de Janeiro',
      zone: 'Zona Oeste',
      areas: ['Barra da Tijuca', 'Recreio dos Bandeirantes'],
    },
    {
      id: 'zona-sul',
      code: 'RJ · 02',
      region: 'Rio de Janeiro',
      zone: 'Zona Sul',
      areas: ['Leblon', 'Ipanema', 'Copacabana', 'Botafogo'],
    },
    {
      id: 'zona-norte',
      code: 'RJ · 03',
      region: 'Rio de Janeiro',
      zone: 'Zona Norte',
      areas: ['Tijuca', 'Penha', 'Méier'],
    },
    {
      id: 'baixada',
      code: 'RJ · 04',
      region: 'Região Metropolitana',
      zone: 'Baixada Fluminense',
      areas: [
        'Belford Roxo',
        'Duque de Caxias',
        'Nova Iguaçu',
        'Nilópolis',
        'São João de Meriti',
      ],
    },
  ],

  /**
   * GALERIA — 8 posições com cards uniformes 4:3.
   * Todas as oito posições já usam fotos reais enviadas pelo cliente.
   * Para adicionar novas fotos, salve o arquivo em /public/images/galeria/
   * e ajuste src, title, alt, tag e placeholder no item correspondente.
   * Fotos verticais são recortadas no card 4:3; o lightbox exibe a imagem completa.
   */
  gallery: [
    {
      id: 1,
      src: '/images/galeria/ar-condicionado-split-instalacao.jpeg',
      alt: 'Ar condicionado Split - instalação realizada pela RS Refrigeração',
      title: 'Ar condicionado Split - instalação',
      tag: 'Instalação',
      icon: 'AirVent',
      placeholder: false,
    },
    {
      id: 2,
      src: '/images/galeria/ar-condicionado-split-manutencao-preventiva.jpeg',
      alt: 'Ar condicionado Split - Manutenção preventiva realizada pela RS Refrigeração',
      title: 'Ar condicionado Split - Manutenção preventiva',
      tag: 'Preventiva',
      icon: 'Gauge',
      placeholder: false,
    },
    {
      id: 3,
      src: '/images/galeria/ar-condicionado-split-manutencao-preventiva-02.jpeg',
      alt: 'Ar condicionado Split - manutenção preventiva realizada pela RS Refrigeração',
      title: 'Ar condicionado Split - manutenção preventiva',
      tag: 'Preventiva',
      icon: 'AirVent',
      placeholder: false,
    },
    {
      id: 4,
      src: '/images/galeria/fancoil-sistema.jpeg',
      alt: 'Sistema fancoil em manutenção pela RS Refrigeração',
      title: 'Fancoil',
      tag: 'Fancoil',
      icon: 'Fan',
      placeholder: false,
    },
    {
      id: 5,
      src: '/images/galeria/split-cassete-manutencao-preventiva.jpeg',
      alt: 'Split Cassete - manutenção preventiva realizada pela RS Refrigeração',
      title: 'Split Cassete - manutenção preventiva',
      tag: 'Cassete',
      icon: 'AirVent',
      fit: 'contain',
      placeholder: false,
    },
    {
      id: 6,
      src: '/images/galeria/chiller-manutencao.jpeg',
      alt: 'Chiller - manutenção realizada pela RS Refrigeração',
      title: 'Chiller - manutenção',
      tag: 'Chiller',
      icon: 'Snowflake',
      placeholder: false,
    },
    {
      id: 7,
      src: '/images/galeria/camara-frigorifica-manutencao.jpeg',
      alt: 'Câmara Frigorífica - manutenção realizada pela RS Refrigeração',
      title: 'Câmara Frigorífica - Manutenção',
      tag: 'Refrigeração',
      icon: 'Refrigerator',
      placeholder: false,
    },
    {
      id: 8,
      src: '/images/galeria/pmoc-para-empresas.jpeg',
      alt: 'PMOC para empresas - atendimento da RS Refrigeração',
      title: 'PMOC para empresas',
      tag: 'PMOC',
      icon: 'FileCheck2',
      placeholder: false,
    },
  ],
  /**
   * VÍDEOS — 4 vídeos locais, verticais e sem faixa de áudio.
   * Arquivos atuais: /public/videos/video1.mp4 ... video4.mp4
   * Capas: /public/images/videos/video-01.jpg ... video-04.jpg
   * Para substituir, troque o arquivo e ajuste title, description, tag, poster e src.
   * Para YouTube: use type: 'youtube' + youtubeUrl (o card continua usando a capa).
   */
  videos: [
    {
      id: 1,
      title: 'Instalação de ar-condicionado Split',
      description: 'Registro de instalação de ar-condicionado Split.',
      tag: 'Instalação',
      poster: '/images/videos/video-01.jpg',
      type: 'local',
      src: '/videos/video1.mp4',
      youtubeUrl: '',
      portrait: true,
      placeholder: false,
    },
    {
      id: 2,
      title: 'Manutenção em balcão refrigerado',
      description:
        'Manutenção preventiva e corretiva em balcão refrigerado, com substituição de evaporador.',
      tag: 'Refrigeração',
      poster: '/images/videos/video-02.jpg',
      type: 'local',
      src: '/videos/video2.mp4',
      youtubeUrl: '',
      portrait: true,
      placeholder: false,
    },
    {
      id: 3,
      title: 'Manutenção preventiva',
      description: 'Registro de manutenção preventiva em equipamento de climatização.',
      tag: 'Preventiva',
      poster: '/images/videos/video-03.jpg',
      type: 'local',
      src: '/videos/video3.mp4',
      youtubeUrl: '',
      portrait: true,
      placeholder: false,
    },
    {
      id: 4,
      title: 'Manutenção de equipamentos',
      description: 'Registro de manutenção em equipamentos de refrigeração.',
      tag: 'Manutenção',
      poster: '/images/videos/video-04.jpg',
      type: 'local',
      src: '/videos/video4.mp4',
      youtubeUrl: '',
      portrait: true,
      placeholder: false,
    },
  ],
  form: {
    types: ['Residencial', 'Comercial', 'Industrial'],
    serviceOptions: [
      'Instalação de ar-condicionado',
      'Manutenção preventiva',
      'Manutenção corretiva',
      'Sistemas Split',
      'Sistemas Fancoil',
      'Chillers',
      'Câmaras frigoríficas',
      'PMOC para empresas',
      'Outro serviço / não sei informar',
    ],
  },

  messages: {
    general:
      'Olá! Acessei o site da RS Refrigeração e gostaria de solicitar um orçamento. Poderiam me ajudar?',
    industrial:
      'Olá! Acessei o site da RS Refrigeração e gostaria de falar com um especialista sobre climatização para minha operação.',
    area:
      'Olá! Acessei o site da RS Refrigeração e gostaria de consultar a disponibilidade de atendimento na minha região.',
    service: (serviceName) =>
      `Olá! Acessei o site da RS Refrigeração e gostaria de solicitar um orçamento para ${serviceName}. Poderiam me ajudar?`,
  },
}

export function whatsappUrl(message = site.messages.general) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}
