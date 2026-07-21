# Meridian Coffee Supply — Homepage

An online store homepage built with React + Vite, for a (fictional) pour-over
coffee equipment brand called **Meridian Coffee Supply**.

## Component structure

```
src/
├── App.jsx
├── main.jsx
├── index.css              # design tokens, resets, shared utility classes
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── Categories.jsx / .css
    ├── FeaturedProducts.jsx / .css
    ├── Testimonials.jsx / .css
    ├── Newsletter.jsx / .css
    └── Footer.jsx / .css
```

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Notes

- Fonts (Fraunces / Inter / IBM Plex Mono) load from Google Fonts via a CSS
  `@import` in `src/index.css` — no extra setup needed.
- No external UI libraries — plain CSS per component, using CSS custom
  properties (design tokens) defined in `src/index.css`.
- Fully responsive down to mobile, with a working mobile nav menu.
- Respects `prefers-reduced-motion` for the animated hero illustration.
