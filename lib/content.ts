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
  instagram: "https://instagram.com/valentinat_5",
  tiktok: "https://tiktok.com/@valentinaaaaaaat",
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
  category: "Vlogs" | "Reels para marcas" | "Videoclips";
  poster: string;
  video?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Campaña de marca",
    category: "Reels para marcas",
    poster: "https://vz-938afc4c-68d.b-cdn.net/837ba117-bcc9-4fe4-9561-235ef2c24c89/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/837ba117-bcc9-4fe4-9561-235ef2c24c89/play_1080p.mp4",
  },
  {
    title: "Vlog",
    category: "Vlogs",
    poster: "https://vz-938afc4c-68d.b-cdn.net/fa539a67-9d18-4483-8d8e-b0a40e556a56/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/fa539a67-9d18-4483-8d8e-b0a40e556a56/play_1080p.mp4",
  },
  {
    title: "Vlog",
    category: "Vlogs",
    poster: "https://vz-938afc4c-68d.b-cdn.net/dc9f95c1-b3d7-4e43-9b7c-4e88e4841bac/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/dc9f95c1-b3d7-4e43-9b7c-4e88e4841bac/play_1080p.mp4",
  },
  {
    title: "Vlog",
    category: "Vlogs",
    poster: "https://vz-938afc4c-68d.b-cdn.net/dd89d36c-c7fb-4867-8554-6eaa295e9905/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/dd89d36c-c7fb-4867-8554-6eaa295e9905/play_1080p.mp4",
  },
  {
    title: "Videoclip",
    category: "Videoclips",
    poster: "https://vz-938afc4c-68d.b-cdn.net/46fb4f15-5d97-4fb4-8492-59e57e6c0cce/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/46fb4f15-5d97-4fb4-8492-59e57e6c0cce/play_1080p.mp4",
  },
  {
    title: "Videoclip",
    category: "Videoclips",
    poster: "https://vz-938afc4c-68d.b-cdn.net/2e1ce4fb-d273-4e72-bdb6-2bf6d1dfa5c0/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/2e1ce4fb-d273-4e72-bdb6-2bf6d1dfa5c0/play_1080p.mp4",
  },
  {
    title: "Videoclip",
    category: "Videoclips",
    poster: "https://vz-938afc4c-68d.b-cdn.net/8b319080-360f-44bd-bb10-a5ae99b179b7/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/8b319080-360f-44bd-bb10-a5ae99b179b7/play_1080p.mp4",
  },
  {
    title: "Videoclip",
    category: "Videoclips",
    poster: "https://vz-938afc4c-68d.b-cdn.net/146832b3-fa34-4b3e-870b-9250474e44e6/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/146832b3-fa34-4b3e-870b-9250474e44e6/play_1080p.mp4",
  },
  {
    title: "Reels para marcas",
    category: "Reels para marcas",
    poster: "https://vz-938afc4c-68d.b-cdn.net/951b10e1-7c92-4709-9525-6283e52232f8/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/951b10e1-7c92-4709-9525-6283e52232f8/play_1080p.mp4",
  },
  {
    title: "Reels para marcas",
    category: "Reels para marcas",
    poster: "https://vz-938afc4c-68d.b-cdn.net/ab3dd686-b494-43ff-924b-4ceb6f9b6743/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/ab3dd686-b494-43ff-924b-4ceb6f9b6743/play_1080p.mp4",
  },
  {
    title: "Reels para marcas",
    category: "Reels para marcas",
    poster: "https://vz-938afc4c-68d.b-cdn.net/d3ca4757-3ecc-404c-bf01-153d572c4765/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/d3ca4757-3ecc-404c-bf01-153d572c4765/play_1080p.mp4",
  },
  {
    title: "Videoclip",
    category: "Videoclips",
    poster: "https://vz-938afc4c-68d.b-cdn.net/8c3b3ea8-ab04-4c25-b6ae-e257fbd634e6/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/8c3b3ea8-ab04-4c25-b6ae-e257fbd634e6/play_1080p.mp4",
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
  "Cursia",
  "Valto",
  "Pintuco",
  "Blue Smash",
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
    title: "Curso de edición",
    desc: "Aprende a editar como yo: ritmo, color, transiciones y storytelling visual desde cero.",
    tag: "Para creadores",
    accent: "cream" as const,
  },
];
