# Safira Praia Hotel — Site Oficial

Site institucional do **Safira Praia Hotel**, desenvolvido em React + TypeScript com Vite. Apresenta a estrutura do hotel, serviços, acomodações, ofertas e contato.

---

## Índice

- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Rotas e Páginas](#rotas-e-páginas)
- [Guia de Imagens](#guia-de-imagens)
- [Cores e Fontes](#cores-e-fontes)

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.3 | Interface de usuário |
| TypeScript | 5.4 | Tipagem estática |
| Vite | 5.3 | Build e dev server |
| React Router DOM | 6.23 | Navegação entre páginas |
| Lucide React | 0.400 | Ícones (MapPin, Phone, Mail…) |

---

## Estrutura do Projeto

```
hotelsafira/
├── public/
│   └── favicon.ico              # Ícone da aba do navegador (gem safira)
├── src/
│   ├── main.tsx                 # Ponto de entrada — monta o React
│   ├── App.tsx                  # Roteador principal (BrowserRouter + rotas)
│   ├── index.css                # Todos os estilos (design tokens, componentes)
│   │
│   ├── components/
│   │   ├── Header.tsx           # Navbar: logo, links de navegação, menu mobile
│   │   ├── Hero.tsx             # Seção hero com vídeo de fundo
│   │   ├── About.tsx            # Sobre o hotel com duas fotos sobrepostas
│   │   ├── Accommodations.tsx   # Cards das suítes com animação de entrada
│   │   ├── ServicesTeaser.tsx   # Prévia dos 3 principais serviços (home)
│   │   ├── Offers.tsx           # Cards de ofertas com fundo em imagem
│   │   ├── ExclusiveOffer.tsx   # Banner de oferta exclusiva reutilizável
│   │   ├── Reviews.tsx          # Carrossel infinito de avaliações TripAdvisor
│   │   ├── Footer.tsx           # Rodapé com navegação, contato e redes sociais
│   │   └── WhatsAppButton.tsx   # Botão flutuante de WhatsApp
│   │
│   └── pages/
│       ├── HomePage.tsx         # Página inicial — agrega todos os componentes
│       ├── ServicesPage.tsx     # Página de serviços — 7 serviços expandidos
│       └── ContactPage.tsx      # Página de contato — formulário + mapa
│
├── index.html                   # HTML base com meta tags e fontes Google
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração TypeScript
└── package.json                 # Dependências e scripts
```

---

## Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (incluído com o Node.js)

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/hotelsafira.git
cd hotelsafira
```

**2. Instale as dependências**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O site abrirá em `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza a build de produção localmente |

---

## Rotas e Páginas

| Rota | Página | Componentes |
|---|---|---|
| `/` | Home | Hero, About, Accommodations, ServicesTeaser, Offers, ExclusiveOffer, Reviews |
| `/servicos` | Serviços | Hero da Página, 7 Serviços, ExclusiveOffer, Reviews |
| `/contato` | Contato | Hero da Página, Formulário, Mapa, ExclusiveOffer |

---

## Guia de Imagens

Todas as imagens do site são URLs externas do [Unsplash](https://unsplash.com). Para trocar uma imagem, substitua a URL pelo endereço da nova imagem. Recomenda-se usar sempre `?w=<largura>&q=80` no final da URL para controlar o tamanho do arquivo.

> **Formato Unsplash:** `https://images.unsplash.com/photo-XXXXXXXXXXXXXXXXXXX?w=1200&q=80`
> Para encontrar novas fotos, acesse unsplash.com, escolha a imagem e copie o ID da URL.

---

### Logo do Hotel

**Arquivo:** `src/components/Header.tsx` e `src/components/Footer.tsx`

```tsx
// Header.tsx (linha 27) e Footer.tsx (linha 10)
src="https://safirapraiahotel.com/wp-content/uploads/2024/05/SAFIRA-LOGO-BRANCA-HORIZONTAL.png"
```

Para trocar, substitua a URL nos dois arquivos pela URL da nova logo.

---

### Favicon (ícone da aba do navegador)

**Arquivo:** `public/favicon.ico`

Substitua o arquivo `public/favicon.ico` pelo novo ícone. Formatos suportados: `.ico`, `.png`, `.svg`.
Se usar `.png` ou `.svg`, atualize também o `index.html`:

```html
<!-- index.html, linha 5 -->
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

### Hero da Home (`Hero.tsx`)

**Arquivo:** `src/components/Hero.tsx`

O hero usa um **vídeo de fundo**. A imagem é usada como poster (exibida enquanto o vídeo carrega).

```tsx
// Linha 18 — imagem de fallback do vídeo
poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
```

Para trocar o vídeo ou a imagem de fallback, edite as props `src` e `poster` do elemento `<video>`.

---

### Sobre o Hotel (`About.tsx`)

**Arquivo:** `src/components/About.tsx`

Duas fotos aparecem sobrepostas na seção "Sobre":

```tsx
// Foto principal (grande, à esquerda)
src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80"

// Foto sobreposta (menor, canto inferior direito)
src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80"
```

---

### Acomodações (`Accommodations.tsx`)

**Arquivo:** `src/components/Accommodations.tsx`

```tsx
const rooms = [
  {
    title: 'Suíte Luxo',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
    // ...
  },
  {
    title: 'Suíte Master',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80',
    // ...
  },
]
```

Para adicionar uma nova acomodação, adicione um novo objeto ao array `rooms` seguindo o mesmo formato.

---

### Serviços na Home (`ServicesTeaser.tsx`)

**Arquivo:** `src/components/ServicesTeaser.tsx`

Exibe 3 serviços em destaque na página inicial:

```tsx
const services = [
  {
    title: 'Praia de Taperapuã',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
  },
  {
    title: 'Piscina Adulto e Infantil',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
  },
  {
    title: 'Estação Fit',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
  },
]
```

---

### Ofertas (`Offers.tsx`)

**Arquivo:** `src/components/Offers.tsx`

Dois cards de oferta com imagem de fundo:

```tsx
const offers = [
  {
    title: ['BAIXA', 'TEMPORADA'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    title: ['RÉVEILLON', 'SAFIRA'],
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200&q=80',
  },
]
```

---

### Oferta Exclusiva (`ExclusiveOffer.tsx`)

**Arquivo:** `src/components/ExclusiveOffer.tsx`

Banner de largura total com imagem de fundo. Reutilizado na Home, Serviços e Contato.

```tsx
// Linha 5 — imagem de fundo do banner
src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
```

---

### Serviços (Página Completa) (`ServicesPage.tsx`)

**Arquivo:** `src/pages/ServicesPage.tsx`

7 serviços exibidos em linhas alternadas com imagem e texto:

```tsx
const services = [
  {
    title: 'Praia de Taperapuã',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    title: 'Piscina Adulto e Infantil',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
  },
  {
    title: 'Estação Fit',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
  },
  {
    title: 'Salão de Jogos',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    title: 'Bar de Piscina',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
  },
  {
    title: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80',
  },
  {
    title: 'Estacionamento Gratuito',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=80',
  },
]
```

Para adicionar ou remover serviços, adicione ou remova objetos do array `services`. Os serviços alternam automaticamente entre imagem à esquerda e à direita.

---

### Hero das Páginas Internas (`index.css`)

As páginas de Serviços e Contato têm heroes com imagem de fundo definidos no CSS:

**Arquivo:** `src/index.css`

```css
/* Hero da página de Serviços (linha ~1154) */
.page-hero::before {
  background: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80') center/cover no-repeat;
}

/* Hero da página de Contato (linha ~1162) */
.page-hero--contact::before {
  background: url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80') center/cover no-repeat;
}
```

---

## Cores e Fontes

### Paleta de Cores

Todas as cores são definidas como variáveis CSS em `src/index.css` e podem ser alteradas em um único lugar:

```css
:root {
  --color-primary:      #1B3A6B;  /* Azul marinho — cor principal da marca */
  --color-primary-dark: #0D2040;  /* Azul escuro — gradientes e fundos */
  --color-accent:       #C9A84C;  /* Dourado — botões de destaque e CTAs */
  --color-accent-hover: #B8922C;  /* Dourado escuro — hover dos botões */
  --color-white:        #FFFFFF;
  --color-off-white:    #F8F5F0;  /* Creme — fundos de seção alternados */
  --color-text:         #2C2C2C;  /* Texto principal */
  --color-text-light:   #666666;  /* Texto secundário */
}
```

### Fontes

Carregadas via Google Fonts em `index.html`:

| Variável CSS | Fonte | Uso |
|---|---|---|
| `--font-heading` | Playfair Display | Títulos das seções |
| `--font-body` | Lato | Textos, botões, navegação |
| — | Dancing Script | Subtítulos em estilo manuscrito |

Para trocar as fontes, substitua os nomes em `index.html` (no link do Google Fonts) e atualize as variáveis `--font-heading` e `--font-body` em `src/index.css`.

---

## Informações de Contato

Para atualizar telefone, e-mail, endereço ou links de redes sociais, edite os seguintes arquivos:

| Informação | Arquivo |
|---|---|
| Telefone / WhatsApp | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx`, `src/components/Header.tsx` |
| E-mail | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| Endereço | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| Instagram | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| Facebook | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| TripAdvisor | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |
| Link WhatsApp (botão flutuante) | `src/components/WhatsAppButton.tsx` |
| Mapa (iframe) | `src/pages/ContactPage.tsx` |
