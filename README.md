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
├── schema.json         # JSON-LD Person schema (loaded dynamically for SEO)
├── favicon.ico         # Browser tab icon
├── favicon.svg         # SVG favicon (fallback)
├── robots.txt          # Search engine crawler directives
├── sitemap.xml         # SEO sitemap
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 🚀 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/horacy-resume.github.io.git
   cd horacy-resume.github.io
   ``` — no build tools needed!
   
   Option A: Open in browser
   ```bash
   # Just open the file directly in your browser
   open index.html
   ```
   
   Option B: Run a local server (for testing with fetch/schema.json)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
   Then visit `http://localhost:8000`

## 📦 Data-driven content

- This site loads most page content from `data.json` (skills, experience, certifications, education and translations). Edit `data.json` to update those sections instead of editing `index.html` directly.
- Translation fields: use `title_en` / `title_pl` for job titles and `summary.en` / `summary.pl` for bilingual summaries. Experience and foundation items accept `bullets.en` and `bullets.pl` arrays.
- When opening the site directly via `file://` the page falls back to an inline JSON snippet. For full editing/testing use a local static server (recommended):

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

Then open `http://localhost:8000` and the site will fetch `data.json`.

If you update `data.json` while the local server is running, refresh the page to see changes. Clear cache if necessary.

3. **Customize**:
   - Edit `index.html` for content (experience, skills, certifications, etc.)
   - Edit `style.css` for custom styling (colors, fonts, layout)
   - Update `schema.json` if contact info or job title changes (important for SEO)
   - Replace `favicon.ico` with your own branding
   - Update language strings in `script.js` if needed
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
- **JSON-LD Person schema** (stored in separate `schema.json` for maintainability)
- **Sitemap and robots.txt** for search engine crawling
- **Open Graph & Twitter meta tags** for social sharing
- **Canonical URL** to prevent duplicate content
- **Mobile-friendly** responsive design
- **Fast load times** (~50KB total size)

## 🛠️ Tech Stack

- **No build tools** — pure HTML, CSS, and JavaScript
- **Tailwind CSS** via CDN (production-ready CSS framework)
- **Material Design SVG icons** (lightweight, scalable, no external dependencies)
- **Vanilla JavaScript** for language toggle and dynamic schema injection
- **Static hosting** ready (GitHub Pages, Netlify, Vercel, etc.)schema
- Sitemap and robots.txt
- Open Graph meta tags
- Mobile-friendly
- Fast load times

## 📝 License

© 2026 Horacy Piguła. All rights reserved.
