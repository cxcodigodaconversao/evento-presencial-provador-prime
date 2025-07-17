# Provador Prime - Landing Page

Uma landing page moderna e interativa para a formação presencial "Provador Prime", com efeitos visuais avançados, animações fluidas e design responsivo.

## 🚀 Features

- **Design Glassmorphism**: Interface moderna com efeitos de vidro e transparência
- **Cursor Mágico**: Cursor personalizado que reage ao movimento do mouse
- **Partículas Interativas**: Sistema de partículas animadas que respondem ao scroll
- **Cards 3D**: Cards flutuantes com efeitos de perspectiva e hover magnético
- **Animações Líquidas**: Gradientes animados e efeitos de movimento fluido
- **FAQ Interativo**: Sistema de perguntas frequentes com animações suaves
- **Responsivo**: Totalmente adaptado para desktop, tablet e mobile

## 📁 Estrutura dos Arquivos

```
provador-prime/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos CSS com animações avançadas
├── script.js           # JavaScript para interatividade
└── README.md           # Documentação do projeto
```

## 🛠️ Como fazer deploy

### 1. GitHub

1. Crie um novo repositório no GitHub
2. Faça upload dos 4 arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`

### 2. Netlify

#### Opção A: Deploy direto do GitHub
1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em "New site from Git"
3. Conecte sua conta do GitHub
4. Selecione o repositório criado
5. Configure:
   - **Build command**: deixe vazio
   - **Publish directory**: deixe vazio (será a raiz)
6. Clique em "Deploy site"

#### Opção B: Deploy por upload
1. Acesse [netlify.com](https://netlify.com) e faça login
2. Arraste os 4 arquivos diretamente na área de deploy
3. Aguarde o upload e processamento

### 3. Outras opções de deploy

- **Vercel**: Conecte o repositório GitHub diretamente
- **GitHub Pages**: Ative nas configurações do repositório
- **Surge.sh**: `npm install -g surge` e rode `surge` na pasta

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: 
  - Glassmorphism
  - CSS Grid e Flexbox
  - Animações keyframes
  - Gradientes avançados
  - Backdrop-filter
- **JavaScript Vanilla**:
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
  - RequestAnimationFrame
- **Google Fonts**: Playfair Display e Inter

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## ⚡ Performance

- CSS e JS otimizados
- Animações usando transform e opacity
- Intersection Observer para lazy loading
- Fontes carregadas de forma assíncrona

## 🎯 Customização

### Cores
As cores principais estão definidas nas variáveis CSS no `:root`:
```css
:root {
    --primary-dark: #0a0612;
    --secondary-dark: #1a0b2e;
    --gold: #c8a882;
    --gold-light: #d4b896;
    --gold-bright: #e6d4b7;
}
```

### Conteúdo
- Textos: edite diretamente no `index.html`
- Estilos: modifique as classes no `style.css`
- Funcionalidades: ajuste no `script.js`

## 📞 Suporte

Para dúvidas sobre implementação ou customização, verifique:
1. Console do navegador para erros JavaScript
2. Validação HTML/CSS online
3. Compatibilidade do navegador

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para o Provador Prime**
