# RS Refrigeração — Landing Page

Landing page institucional da **RS Refrigeração**, com foco em apresentação dos serviços e geração de orçamentos pelo WhatsApp.

Projeto construído do zero com **React + Vite**, sem backend, sem banco de dados e sem bibliotecas de UI pesadas. O visual usa a paleta fornecida pelo cliente, tipografia Manrope + IBM Plex Mono, arte técnica original e seção de depoimentos. As fotos e os vídeos reais enviados pelo cliente já estão publicados; a galeria está completa com oito fotos.

---

## 1. Como rodar

Requisitos: Node.js 18+ (recomendado Node 20/22) e npm.

```bash
npm install
npm run dev       # ambiente local em http://localhost:5173
npm run build     # gera a versão de produção em /dist
npm run preview   # pré-visualiza o build
npm run lint      # verifica o código com ESLint
```

Para publicar, hospede a pasta `dist/` em qualquer serviço de arquivos estáticos (Vercel, Netlify, Cloudflare Pages, Hostinger etc.). Como a página é única e usa apenas âncoras internas, não é necessário configurar rotas de SPA.

---

## 2. Estrutura principal

```text
index.html                     Metadados, SEO, Open Graph e JSON-LD
src/
  config/site.js               CONFIGURAÇÃO CENTRAL (contatos, serviços, mídias, áreas)
  components/                  Header, Hero, About, Services, galeria, vídeos, contato etc.
  styles/                      CSS organizado por seção
  assets/fonts/                Manrope e IBM Plex Mono locais
  lib/icons.js                 Registro dos ícones Lucide usados
public/
  images/galeria/              foto-01.jpg ... foto-08.jpg (placeholders)
  images/videos/               video-01.jpg ... video-04.jpg (capas)
  images/manutencao-industrial-comercial.jpg
  videos/                      Pasta para os arquivos MP4
  og-image.jpg                 Imagem de compartilhamento (1200 × 630)
  favicon.svg, favicon-32.png, apple-touch-icon.png, favicon-512.png
  robots.txt, sitemap.xml, site.webmanifest
```

### Onde alterar cada coisa

- **WhatsApp, Instagram, serviços, bairros, depoimentos, títulos da galeria/vídeos, logo e textos de configuração:** `src/config/site.js`.
- **Cores, tipografia, espaçamentos e componentes visuais:** `src/styles/base.css` e os demais arquivos em `src/styles/`.
- **Textos de seção que não são de configuração:** dentro do componente correspondente em `src/components/`.
- **SEO, domínio e metadados:** `index.html`, `public/robots.txt`, `public/sitemap.xml`.

---

## 3. O que substituir quando receber o material do cliente

### 3.1. Logotipo oficial

O logotipo oficial enviado pelo cliente já está aplicado em `public/images/logo.png` (fundo transparente) e configurado no site:

```js
logo: {
  src: '/images/logo.png',
  alt: 'RS Refrigeração',
},
```

Ele aparece no cabeçalho, no rodapé e no card institucional da seção “A empresa”. Se precisar substituir por outra versão, troque o arquivo mantendo o mesmo caminho ou atualize `logo.src`. O tamanho é controlado por `.brand-image` em `src/styles/header.css`, pela regra específica do rodapé e por `.about-brand-logo` em `src/styles/about.css`.

Os arquivos de favicon atuais ainda usam a marca provisória. Para trocar pelo símbolo oficial, substitua `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png` e `public/favicon-512.png`.
### 3.2. Fotos da galeria

A galeria usa **cards uniformes na proporção 4:3** e exibe o nome de cada imagem na legenda. As oito posições já estão com fotos reais:

- `public/images/galeria/ar-condicionado-split-instalacao.jpeg` — “Ar condicionado Split - instalação”
- `public/images/galeria/ar-condicionado-split-manutencao-preventiva.jpeg` — “Ar condicionado Split - Manutenção preventiva”
- `public/images/galeria/ar-condicionado-split-manutencao-preventiva-02.jpeg` — “Ar condicionado Split - manutenção preventiva”
- `public/images/galeria/fancoil-sistema.jpeg` — “Fancoil”
- `public/images/galeria/split-cassete-manutencao-preventiva.jpeg` — “Split Cassete - manutenção preventiva”
- `public/images/galeria/chiller-manutencao.jpeg` — “Chiller - manutenção”
- `public/images/galeria/camara-frigorifica-manutencao.jpeg` — “Câmara Frigorífica - Manutenção”
- `public/images/galeria/pmoc-para-empresas.jpeg` — “PMOC para empresas”

Os arquivos originais enviados pelo cliente estão preservados em `public/images/galeria/originais/`. A oitava posição é a foto de **PMOC para empresas** (`pmoc-para-empresas.jpeg`).

Para publicar novas fotos:

1. Salve o arquivo em `public/images/galeria/` com um nome descritivo (de preferência sem espaços e acentos).
2. Em `src/config/site.js`, no item correspondente de `gallery`:
   - informe o caminho em `src`;
   - use `title` com o nome da imagem que deve aparecer para o visitante;
   - ajuste `alt` e `tag`;
   - altere `placeholder` para `false`.
3. Fotos horizontais ou verticais são aceitas: o card mantém a proporção **4:3** com `object-fit: cover`, e o lightbox exibe a imagem completa. Recomendado usar imagens com pelo menos 1200 × 900 px.
4. Se adicionar mais de oito fotos, duplique um item do array. O grid se adapta automaticamente entre 4, 2 e 1 coluna. A foto do Split Cassete usa `fit: 'contain'` para preservar os rótulos antes/depois.

Neste momento todas as posições estão com fotos reais, então o aviso de “novas fotografias” não aparece mais; a seção mostra o estado final. Se você adicionar novas posições com `placeholder: true`, o aviso volta automaticamente.
### 3.3. Fotos de apoio (hero, apresentação e industrial)

- **Fundo do hero:** a foto enviada pelo cliente foi otimizada para `public/images/hero-background.jpg` (2400 × 1200) e `public/images/hero-background-1200.jpg` (1200 × 600), configuradas em `images.heroBackground` e `images.heroBackgroundSmall`. O original está em `public/images/galeria/originais/fundohero.png`. O hero aplica um overlay navy com gradiente à esquerda para preservar a leitura, além de um zoom lento (Ken Burns) e uma grade técnica discreta. Com `prefers-reduced-motion`, o movimento é desativado. Para trocar a foto, mantenha preferencialmente a proporção 2:1 e atualize os dois caminhos. Se `heroBackground` ficar vazio, o hero volta a usar a ilustração técnica original.

- **Título do hero:** o texto completo é digitado letra por letra, sem cursor visual no fim da frase. Depois de completo, o título permanece 1,8 s, apaga e recomeça imediatamente, sem pausa no estado vazio. O texto original, a quebra em quatro linhas, as cores e a tipografia foram preservados; um bloco de medida invisível reserva a altura final para que o texto digitado não empurre o restante do hero. O efeito está em `src/components/HeroTitleTypewriter.jsx`, e os estilos do título estão em `src/styles/hero.css`. Em telas de até 380 px, o título usa um tamanho ligeiramente menor para manter “Desempenho em” na mesma linha, sem rolagem horizontal. A digitação continua ativa com `prefers-reduced-motion`; nesse caso, apenas as animações decorativas de gradiente, linha e glow são desativadas.

- **Foto do hero (visual, opcional):** salve em `public/images/hero.jpg` e configure `images.hero`. Essa foto com recorte vertical e cartões sobrepostos só é usada quando `images.heroBackground` está vazio; com o fundo fotográfico atual, o hero usa a imagem de fundo.
- **Apresentação:** salve em `public/images/empresa.jpg` e configure `images.about`. Enquanto vazio, o site mostra o card institucional com a logo oficial, a tagline e o selo “03 segmentos de atendimento”.
- **Seção industrial:** o card usa a fotografia real fornecida pelo cliente, otimizada em `public/images/manutencao-industrial-comercial.jpg` (1600 × 900) e configurada em `images.industrial`. Como é uma foto real, `images.industrialIllustrative` está em `false` e o selo “Imagem ilustrativa” não aparece. O recorte do card é controlado por `object-fit: cover` e `object-position` em `src/styles/industrial.css`. A imagem ilustrativa CC0 anterior permanece no projeto, mas não é mais exibida.

### 3.4. Vídeos

Os quatro vídeos já estão publicados, em formato vertical (480 × 856), **sem faixa de áudio**:

| Arquivo | Título no site |
| --- | --- |
| `public/videos/video1.mp4` | Instalação de ar-condicionado Split |
| `public/videos/video2.mp4` | Manutenção em balcão refrigerado |
| `public/videos/video3.mp4` | Manutenção preventiva |
| `public/videos/video4.mp4` | Manutenção de equipamentos |

As capas reais foram extraídas dos próprios vídeos e estão em `public/images/videos/video-01.jpg` a `video-04.jpg` (720 × 1280).

Os cards são horizontais, com miniatura vertical, e ficam em 2 colunas no desktop e 1 coluna no celular. O player abre em modal retrato e usa `muted`; o áudio foi removido dos arquivos.

Para substituir um vídeo:

1. Coloque o novo MP4 em `public/videos/` (mantenha o nome ou atualize `src`).
2. Substitua a capa em `public/images/videos/video-0X.jpg`.
3. Em `src/config/site.js`, no item correspondente de `videos`, ajuste `title`, `description`, `tag`, `poster` e `src`.

Se o novo vídeo tiver áudio, ele pode ser removido com ffmpeg:

```bash
ffmpeg -i entrada.mp4 -map 0:v:0 -c:v copy -an -movflags +faststart saida.mp4
```

Para YouTube, o componente continua aceitando `type: 'youtube'` e `youtubeUrl`. O poster configurado será usado no card. O player só é carregado depois do clique, evitando o download automático dos vídeos.
### 3.5. Depoimentos

Os quatro depoimentos estão em `src/config/site.js`, na chave `testimonials`. Cada item aceita:

```js
{
  name: 'Nome do cliente',
  initials: 'NC',
  rating: 5,
  quote: 'Texto do depoimento.',
  service: 'Serviço relacionado (opcional)',
  price: 'Faixa de preço citada (opcional)',
  reply: 'Resposta da RS Refrigeração (opcional)',
}
```

O resumo da seção calcula automaticamente a média das notas e o total de depoimentos. As datas relativas enviadas originalmente (“18 horas atrás”, “4 semanas atrás” etc.) não foram exibidas para evitar informação desatualizada; o conteúdo pode ser incluído depois, se desejado. Não há logo ou nota de plataforma externa, pois a origem não foi informada.
### 3.5. WhatsApp

Tudo fica centralizado em `src/config/site.js`:

```js
whatsapp: {
  number: '5521965613684',   // somente dígitos, formato internacional
  display: '(21) 96561-3684',
},
```

As mensagens por contexto estão em `messages`. Os links são gerados com `encodeURIComponent`, usando o formato oficial `https://wa.me/<número>?text=...`.

### 3.6. Instagram

```js
instagram: {
  handle: '@rs_.refrigeracao',
  url: 'https://www.instagram.com/rs_.refrigeracao/',
},
```

O link abre em nova aba com `noopener noreferrer`.

### 3.7. Domínio, SEO e compartilhamento

Antes de publicar, troque o domínio de exemplo **`rsrefrigeracao.com.br`** pelo endereço definitivo nos seguintes arquivos:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image` e o `url` do JSON-LD.
- `public/robots.txt` — linha `Sitemap:`.
- `public/sitemap.xml` — elemento `<loc>`.

A imagem `public/og-image.jpg` pode ser substituída por uma arte oficial (1200 × 630 px).

### 3.8. Animações e interações

As animações de entrada usam o componente `src/components/Reveal.jsx`, baseado em `IntersectionObserver`. Ele aceita as variantes `up`, `left`, `right`, `zoom` e `fade`, além de `delay` e `duration`:

```jsx
<Reveal variant="right" delay={120}>
  <article className="minha-card">...</article>
</Reveal>
```

- `src/styles/base.css` define os estados, as transições e os wrappers usados para animar cards sem interferir nos efeitos de hover.
- Os cards de serviços, galeria, vídeos, diferenciais, depoimentos e áreas entram em sequência; mídias entram pelas laterais e a galeria usa zoom suave.
- Cards e imagens têm elevação/zoom no hover, botões elevam e movem a seta, e ícones fazem microanimações.
- Com `prefers-reduced-motion`, o conteúdo aparece imediatamente, sem deslocamentos e sem atraso. Se `IntersectionObserver` não estiver disponível, o componente também exibe o conteúdo imediatamente.

---

## 4. Funcionamento do formulário

- Campos obrigatórios: nome, telefone/WhatsApp, tipo de atendimento, serviço desejado e cidade/bairro.
- A descrição da necessidade é opcional.
- O telefone é formatado e validado com DDD (10 ou 11 dígitos).
- O formulário **não envia dados para servidor algum** e não usa backend.
- Ao validar, monta uma mensagem organizada com os dados e abre o WhatsApp da empresa em nova aba.
- Se o navegador bloquear a abertura automática, o usuário recebe um link manual na mensagem de confirmação.
- Erros aparecem por campo, com foco no primeiro campo inválido e resumo acessível.

---

## 5. Acessibilidade e comportamento

- Estrutura semântica com um único `h1`, seções e títulos hierarquizados.
- Menu mobile com `aria-expanded`, `aria-controls`, fechamento por `Escape` e bloqueio do conteúdo de fundo com `inert`.
- Lightbox e modal de vídeo com foco controlado, fechamento por `Escape`, navegação por setas no lightbox e retorno de foco.
- Links externos com `rel="noopener noreferrer"` e rótulos acessíveis.
- `prefers-reduced-motion` respeitado: animações e rolagem suave são reduzidas/desativadas.
- O botão flutuante do WhatsApp é ocultado na área de contato para não cobrir o formulário.
- Auditoria automatizada com axe-core (WCAG 2.1 A/AA): nenhuma violação detectada.
- Contraste revisado: botões laranja usam texto azul-marinho para manter legibilidade.
- Imagens decorativas com `alt` vazio; fotos com texto alternativo configurável.
- Fontes servidas localmente (sem chamadas ao Google Fonts em tempo de execução).

---

## 6. Testes realizados

- Animações de entrada verificadas no navegador em desktop e mobile: os 59 elementos `Reveal` são revelados ao rolar (no mobile, o único restante é `display:none`), com variantes distintas, stagger real entre cards, digitação do hero intacta, hover de cards/imagens/botões e fallback sem `IntersectionObserver`.
- `npm run lint` — sem erros.
- `npm run build` — build de produção concluído.
- Navegação e layout testados em larguras de **320, 360, 390, 430, 600, 768, 1024 e 1440 px**, sem rolagem horizontal.
- Menu mobile: abertura, sobreposição total da tela, foco, fechamento por `Escape` e por navegação.
- Galeria: 8 itens, lightbox, navegação por setas, contador e fechamento por `Escape`/backdrop.
- Vídeos: 4 espaços, modal 16:9 e estado de placeholder sem player quebrado.
- Formulário: validação dos 5 campos obrigatórios, foco no primeiro erro, montagem e abertura da URL `wa.me` com a mensagem codificada.
- 19 links de WhatsApp verificados com o número `5521965613684`; links do Instagram conferidos.
- Seção de depoimentos com quatro relatos enviados pelo cliente, respostas da empresa e média calculada a partir das notas.
- Galeria com cards 4:3 uniformes, oito fotos reais, legendas com os nomes das imagens e lightbox funcionando.
- Fundo do hero com foto otimizada, overlay navy, gradiente de proteção, zoom lento e respeito a `prefers-reduced-motion`.
- Título do hero com efeito de digitação verificado em desktop e mobile: os 49 caracteres surgem um por um, sem cursor no fim, a altura do título e a posição dos botões permanecem estáveis, o ciclo apaga e reinicia imediatamente, e não há overflow em 1440, 390 ou 320 px. A digitação também foi verificada com `prefers-reduced-motion` e continua ativa.
- Quatro vídeos locais sem faixa de áudio, cards horizontais com capas reais, player vertical no modal e reprodução verificada no navegador.
- Auditoria de acessibilidade com axe-core sem violações; apenas itens marcados como “incomplete” por estarem sobre imagens/gradientes, revisados visualmente.
- Todas as imagens carregadas; âncoras internas sem destinos quebrados.

---

## 7. Observações sobre o conteúdo

- Nenhum dado empresarial não fornecido foi inventado: não há endereço físico, CNPJ, e-mail, certificações, prêmios, promoções, quantidade de clientes ou tempo de mercado. Os quatro depoimentos exibidos foram enviados pelo cliente, com suas respectivas respostas e com o preço citado em uma das avaliações.
- Os textos institucionais seguem as informações fornecidas pelo cliente.
- A galeria tem oito fotos reais (incluindo a foto de PMOC); as capas dos vídeos são frames dos próprios vídeos. A seção industrial usa a foto real fornecida pelo cliente (manutenção em unidade externa de ar-condicionado).
- A seção de vídeos tem quatro vídeos locais sem áudio; a galeria tem oito fotos reais; e a seção de depoimentos tem quatro relatos enviados pelo cliente.
- O aviso de copyright usa o ano atual automaticamente.
