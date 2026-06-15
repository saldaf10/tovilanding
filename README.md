# 🎬 Landing — Editora de video

Landing page de una sola página para la marca personal de una editora de video.
Estética de **vlog moderno**: video a sangre completa, tipografía display gigante,
texto cinético tipo subtítulo (CapCut), grano de film, color blocking de alto
contraste y animaciones fluidas.

## 🧰 Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (tokens de color y tipografía)
- **Framer Motion** — animaciones de entrada y micro-interacciones
- **Lenis** — smooth scrolling global
- **GSAP + ScrollTrigger** — animaciones ligadas al scroll (parallax, reveals)
- Diseño **mobile-first**, totalmente responsive, con soporte de `prefers-reduced-motion`

## 🚀 Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Variables de entorno (formulario del curso)
cp .env.local.example .env.local
# edita .env.local y pon tu endpoint real

# 3. Desarrollo
npm run dev        # http://localhost:3000

# 4. Build de producción
npm run build
npm run start
```

> Sin `.env.local`, el formulario funciona en **modo demo** (simula el envío y
> registra el correo en consola). No bloquea el build ni el deploy.

## ✏️ Dónde reemplazar el contenido

Casi todo el texto/datos viven en **`lib/content.ts`** (un solo archivo).
Busca los comentarios `TODO:` en el proyecto para encontrar cada punto:

| Qué | Dónde |
| --- | --- |
| Nombre, handle, correo, links de redes | `lib/content.ts` (`BRAND_NAME`, `SOCIALS`, `CONTACT_EMAIL`…) |
| Historia "Sobre mí", servicios, comentarios, marcas, métricas | `lib/content.ts` |
| **Video showreel del Hero** | `components/sections/Hero.tsx` → `<video>` (sube tu mp4/webm a `public/videos/`) |
| Foto de la sección "Sobre ella" | `components/sections/About.tsx` → `<Image src=…>` (`public/about.jpg`) |
| Videos/clips del portafolio | `lib/content.ts` (`PORTFOLIO[].poster` y `.video`) |
| **Fuente "Blocks"** (titulares) | ver abajo 👇 |
| Endpoint del formulario | `.env.local` → `NEXT_PUBLIC_WAITLIST_ENDPOINT` y/o `components/sections/Waitlist.tsx` |
| SEO / título / OG | `app/layout.tsx` |

### 🔤 Fuente "Blocks"

Por defecto el proyecto usa **Archivo Black** como placeholder para que haga
build sin el archivo real. Para activar la fuente "Blocks":

1. Copia el archivo en `app/fonts/Blocks.woff2`.
2. Abre `app/fonts.ts` y sigue el comentario `TODO`: descomenta el bloque
   `localFont` y reemplaza el placeholder. La variable CSS (`--font-blocks`)
   no cambia, así que no hay que tocar nada más.

### 🎥 Video del showreel (Hero)

En `components/sections/Hero.tsx`, dentro del `<video>`, descomenta los
`<source>` y apunta a tus archivos en `public/videos/`. Usa el atributo
`poster` para la imagen mientras carga. Recomendado: `.webm` + `.mp4` de
respaldo, comprimidos y mudos (autoplay requiere `muted`).

## 🎨 Identidad visual

- Fondo base casi-negro cálido: `#0A0A0F`
- Acentos (bloques sólidos, sin degradados):
  - `#FF0859` magenta — acento principal / CTAs
  - `#FCC908` dorado — acentos secundarios
  - `#FFF8AF` crema — texto destacado
  - `#EC1B1B` rojo — energía / hover
- Definidos como tokens en `tailwind.config.ts` y variables en `app/globals.css`.

## ▲ Despliegue en Vercel

1. Sube el repo a **GitHub**.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
3. Vercel detecta Next.js automáticamente — **no necesitas configuración extra**.
4. En **Settings → Environment Variables** agrega:
   - `NEXT_PUBLIC_WAITLIST_ENDPOINT` = tu endpoint del formulario.
5. **Deploy**. Cada `git push` a la rama principal redepliega solo.

## 📁 Estructura

```
app/
  fonts.ts          # next/font (Inter + Blocks placeholder)
  globals.css       # tokens, grano, utilidades, reduced-motion
  layout.tsx        # cursor, grano, smooth scroll globales
  page.tsx          # ensambla las secciones
components/
  CustomCursor.tsx  Marquee.tsx     Reveal.tsx
  GrainOverlay.tsx  MagneticButton  SplitText.tsx
  CountUp.tsx       KineticCaption  SmoothScroll.tsx
  sections/         # Navbar, Hero, About, Portfolio,
                    # SocialProof, Services, Waitlist, Footer
lib/
  content.ts        # 👈 TODO tu contenido editable
  hooks.ts          # reduced-motion, fine-pointer
```

---

Hecho para que solo tengas que cambiar texto, fotos y videos. 🎬
