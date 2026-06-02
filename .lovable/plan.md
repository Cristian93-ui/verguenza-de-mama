
# Plan: Sitio web "La Vergüenza de Mamá"

Sitio de pre-lanzamiento para el podcast, con identidad visual cálida-oscura (charcoal + dorado/cobre), tono irreverente mexicano, y 5 páginas navegables. Todo el contenido es estático (sin backend); los formularios son visuales.

## Logo oficial

Uso el logo que subiste (círculo con Michito, Ch-peanuts, micrófono y skyline CDMX) como activo real en todo el sitio:

- Lo subo a Lovable Assets (`lovable-assets create --file /mnt/user-uploads/...`) y referencio el JSON
- **Navbar**: logo circular pequeño (40px) a la izquierda + texto "La Vergüenza de Mamá" en Bebas Neue al lado
- **Hero (Home)**: logo grande centrado (~320px) con glow dorado sutil detrás
- **Footer**: versión pequeña + redes
- **Página El Podcast**: logo mediano dentro de la card de "datos del podcast"
- **Favicon**: también deriva del logo
- Reemplaza completamente el placeholder circular "LVM" del plan original

## Stack y ajustes técnicos

El template usa **TanStack Router** (no React Router DOM) y **Tailwind v4** con tokens en `src/styles.css` (no `tailwind.config.js`). Adapto el spec a esto sin cambiar el resultado visual:

- Rutas como archivos en `src/routes/` (`index.tsx`, `podcast.tsx`, `episodios.tsx`, `merch.tsx`, `contacto.tsx`)
- Tokens de color en `src/styles.css` usando `oklch` (equivalentes a los HEX dados)
- Fuentes Google (Bebas Neue + Montserrat) cargadas en `__root.tsx`
- **Framer Motion** → instalo `motion` (API `motion/react`)
- **Lucide React** y **shadcn/ui** ya disponibles (Dialog para Notify Me, Button, Input, Select, Textarea)

## Sistema de diseño (`src/styles.css`)

```
--background     → #1C1C1E
--surface (card) → #2B2A28
--accent         → #C17A3A
--accent-light   → #E8C882
--gold           → #D4A030
--foreground     → #F2E4C8
--border         → #3A3835
--gradient-hero  → #1C1C1E → #2B2A28 + overlay dorado sutil
--gradient-accent→ #C17A3A → #D4A030
--shadow-glow    → glow cálido para hovers
```
Tipografía: `font-display` (Bebas Neue) + `font-sans` (Montserrat). Dark por defecto.

## Estructura de archivos

```
src/
  styles.css
  assets/
    logo.png.asset.json            (pointer al logo oficial)
  routes/
    __root.tsx                     (fuentes, Navbar + Footer, <Outlet/>)
    index.tsx, podcast.tsx, episodios.tsx, merch.tsx, contacto.tsx
  components/site/
    Navbar.tsx                     (sticky, blur, hamburger, scroll-opaque)
    Footer.tsx
    Logo.tsx                       (img del logo oficial, tamaños sm/md/lg + glow)
    NotifyMeModal.tsx
    ComingSoonBadge.tsx            (pulse)
    CharacterCard.tsx              (Michito / Ch-peanuts)
    PlatformChips.tsx              (Spotify/Apple/YouTube locked)
    PawPrints.tsx                  (SVG 🐾 decorativo)
    SectionReveal.tsx              (fade-up on view, Framer Motion)
    EpisodeCardSkeleton.tsx
    MerchCardPlaceholder.tsx
```

## Páginas y secciones

**Home (`/`)** — Hero con logo oficial grande + glow dorado + tagline "Entre Acordes y Partidas" + badge "🎙️ Próximamente" pulsante + CTAs (Notify Me / Trailer) + huellas decorativas. Sección Plataformas (chips locked). Sección Personajes (cards Michito/Ch-peanuts). Sección "El Vibe". CTA pre-footer.

**El Podcast (`/podcast`)** — Hero pequeño con subrayado dorado. Historia (2 col, card con logo). Formato (3 cards: Acordes 🎵 / Partidas 🎲 / Sin Filtros 🎙️) con border-left accent. Hosts expandidos. Quote de misión.

**Episodios (`/episodios`)** — Header con badge. Coming Soon hero con micrófono SVG + countdown decorativo. 3 episode cards skeleton/locked. Plataformas.

**Merch (`/merch`)** — Header. Hero creativo con silueta de hoodie + efecto censored + título "Tu mamá va a odiar que uses esto". Chips de categorías. Grid 6 placeholders "???" con hover "Próximamente".

**Contacto (`/contacto`)** — 2 columnas: info+redes / form (Nombre, Email, Select Asunto, Textarea, "Mandar mensaje 🐾"). Mensaje de éxito animado al enviar (estado local).

## Animaciones

- `whileInView` fade+slide-up con `viewport={{ once: true }}` en secciones
- Hover cards: `scale: 1.02` + glow accent
- Badge "Próximamente": pulse infinito
- Hamburger menu: slide-in lateral

## SEO por ruta

Cada ruta define `head()` con title/description/og únicos. Idioma `es-MX`. `og:image` en cada ruta deriva del logo oficial.

## Responsive

Mobile-first. Grids 1→2→3 col. Hamburger <768px. Títulos display con `clamp()`.

## Lo que NO incluye

- Sin backend / sin envío real de emails
- Sin sistema real de episodios, sin countdown funcional
- Sin imágenes adicionales generadas (emojis 🐈‍⬛ 🐶 🐾 + el logo oficial cubren todo)

Al confirmar, implemento todo y verifico build + preview.
