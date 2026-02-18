# Horacy Piguła — IT Portfolio

A clean, accessible, and performant portfolio website built with **vanilla HTML, CSS, and JavaScript**.

## 🎯 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS CDN
- **Bilingual Support**: English/Polish language toggle with localStorage persistence
- **Accessibility** (WCAG 2.1 AA compliant):
  - Skip-to-content link
  - Semantic HTML (`<address>`, `<time>`, etc.)
  - ARIA labels and roles
  - Screen-reader friendly SVG icons
- **SEO Optimized**:
  - Meta tags (description, theme-color, canonical, Open Graph)
  - JSON-LD structured data (Person schema)
  - Sitemap.xml for crawlers
  - robots.txt
- **Performance**:
  - Inline SVG icons (no ~100KB Font Awesome library)
  - CDN-based Tailwind (zero build step)
  - Optimized resource loading with preconnect
  - Lightweight and fast

## 📁 Structure

```
.
├── index.html          # Main portfolio page
├── style.css           # Custom styles
├── script.js           # Language toggle & initialization
├── favicon.ico         # Browser tab icon (add your own)
├── favicon.svg         # SVG favicon
├── robots.txt          # Search engine crawler directives
├── sitemap.xml         # SEO sitemap
└── .gitignore          # Git configuration
```

## 🚀 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/horacy-resume.github.io.git
   cd horacy-resume.github.io
   ```

2. **Open locally**:
   - Open `index.html` in any modern browser
   - Or run a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (http-server)
     npx http-server
     ```
   - Visit `http://localhost:8000`

3. **Customize**:
   - Edit `index.html` for content
   - Edit `style.css` for custom styling
   - Replace `favicon.ico` with your own (ensure it's 32×32 or 64×64 PNG/ICO)
   - Update contact info in the `<address>` section

## 🌍 Deployment

Push to GitHub Pages or any static host:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Screen-reader tested
- Keyboard-navigable
- High contrast colors
- Semantic HTML

## 📊 SEO

- JSON-LD Person schema
- Sitemap and robots.txt
- Open Graph meta tags
- Mobile-friendly
- Fast load times

## 📝 License

© 2026 Horacy Piguła. All rights reserved.
