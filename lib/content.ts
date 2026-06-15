/**
 * =============================================================
 *  CONTENIDO DEL SITIO  (placeholder realista en español)
 * =============================================================
 *  Centralizamos aquí los textos, links y datos para que sea
 *  fácil reemplazarlos sin tocar los componentes.
 *
 *  TODO: Reemplaza TODO lo que está marcado con tu contenido real.
 * =============================================================
 */

// Nombre de marca / influencer (lo que se muestra en todo el sitio).
export const BRAND_NAME = "Tovi";
// Nombre completo real (para créditos / contexto).
export const BRAND_FULL_NAME = "Valentina Tovar";
// TODO: Reemplaza con el handle real de redes.
export const BRAND_HANDLE = "@tovi";

// TODO: Reemplaza con el correo real de contacto.
export const CONTACT_EMAIL = "hola@tovi.co";

// TODO: Reemplaza con los links reales de redes.
export const SOCIALS = {
  instagram: "https://instagram.com/", // TODO
  tiktok: "https://tiktok.com/", // TODO
  youtube: "https://youtube.com/", // TODO
};

// Palabras del marquee infinito
export const MARQUEE_WORDS = [
  "EDICIÓN",
  "VLOGS",
  "REELS",
  "COLOR",
  "STORYTELLING",
  "RITMO",
  "CINEMÁTICO",
];

// Sección "Sobre ella"
export const ABOUT = {
  kicker: "Sobre mí",
  // TODO: Ajusta la historia real.
  paragraphs: [
    "Empecé hace poco, casi por accidente: una laptop prestada, un par de clips de un viaje y muchísimas ganas de contar algo que se sintiera de verdad.",
    "Lo que era un hobby creció rápido — más rápido de lo que imaginé — gracias a la gente que se quedó, comentó y compartió. Ustedes convirtieron esto en mi carrera.",
    "Hoy edito vlogs, reels y piezas para marcas que quieren que su historia se sienta, no solo que se vea. El ritmo, el color y el detalle lo son todo.",
  ],
};

// Portafolio / Showreel
export type PortfolioItem = {
  title: string;
  category: "Vlogs" | "Reels para marcas" | "Edición creativa";
  // TODO: Reemplaza por tus videos reales (mp4/webm) o thumbnails.
  poster: string;
  video?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Un día en Tokio",
    category: "Vlogs",
    poster:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=70",
    // video: "/videos/vlog-tokio.mp4", // TODO
  },
  {
    title: "Lanzamiento skincare",
    category: "Reels para marcas",
    poster:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Ritmo de ciudad",
    category: "Edición creativa",
    poster:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Road trip por la costa",
    category: "Vlogs",
    poster:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Campaña café de especialidad",
    category: "Reels para marcas",
    poster:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Transiciones imposibles",
    category: "Edición creativa",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=70",
  },
];

// Prueba social: comentarios de la audiencia
export const COMMENTS = [
  { user: "@dani.makes", text: "Necesito que hagas un curso YA 😭 edita tan limpio" },
  { user: "@laucreativa", text: "¿Tutorial de esas transiciones porfa?" },
  { user: "@motionjuan", text: "El color grading es otro nivel, enséñanos 🙏" },
  { user: "@sofi.films", text: "Cada reel tuyo es una clase. ¿Para cuándo el curso?" },
  { user: "@thebrandguy", text: "Te escribí al DM para un proyecto, eres la mejor" },
];

// Marcas que la contactaron (placeholder)
// TODO: Reemplaza con marcas reales (o sus logos).
export const BRANDS = [
  "LUMA",
  "Cafés del Sur",
  "Norden",
  "Pixel&Co",
  "Vera Skincare",
  "Andes Outdoor",
];

// Métricas animadas (contadores)
export const STATS = [
  { value: 320, suffix: "K", label: "Seguidores" },
  { value: 48, suffix: "M", label: "Vistas totales" },
  { value: 130, suffix: "+", label: "Proyectos editados" },
  { value: 27, suffix: "", label: "Marcas aliadas" },
];

// Servicios
export const SERVICES = [
  {
    title: "Edición de Reels",
    desc: "Reels con ritmo, ganchos y texto cinético que retienen y convierten. Listos para publicar.",
    tag: "Para marcas e influencers",
    accent: "magenta" as const,
  },
  {
    title: "Vlogs & Storytelling",
    desc: "Tu material en bruto convertido en una historia que se siente. Pacing, música y color.",
    tag: "Creadores de contenido",
    accent: "gold" as const,
  },
  {
    title: "Dirección creativa",
    desc: "Concepto, guion y dirección de tus piezas. Desde la idea hasta el render final.",
    tag: "Campañas",
    accent: "cream" as const,
  },
];
