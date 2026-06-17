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
  paragraphs: [
    "Soy Valentina Tovar, tengo 22 años y llevo editando desde 2016. Todo empezó grabando videos con mis amigas, en iMovie y desde el celular, con pura intuición.",
    "De iMovie pasé a CapCut, y hoy edito casi todo ahí mismo, en el teléfono. Lo que más me gusta es crear cosas nuevas: probar ideas, mezclar estilos y que cada proyecto se sienta distinto.",
    "Eso me ha permitido crear vlogs memorables con mis amigos, construir mi marca personal y trabajar con marcas increíbles.",
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
    title: "Vlog",
    category: "Vlogs",
    poster: "https://vz-938afc4c-68d.b-cdn.net/25c74b69-8640-4c9f-91ff-f8940d820cf8/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/25c74b69-8640-4c9f-91ff-f8940d820cf8/play_1080p.mp4",
  },
  {
    title: "Vlog",
    category: "Vlogs",
    poster: "https://vz-938afc4c-68d.b-cdn.net/f45c1817-d9d4-4123-9629-2ec2d5672c61/thumbnail.jpg",
    video: "https://vz-938afc4c-68d.b-cdn.net/f45c1817-d9d4-4123-9629-2ec2d5672c61/play_1080p.mp4",
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
// Comentarios de la audiencia (elogios + quienes piden el curso) → carrusel
export const COMMENTS = [
  { user: "Alejandra Jiménez", text: "Amo cómo editas, estoy OBSESIONADA con tus videossss 😍😍" },
  { user: "Sebastián Marín", text: "¿y por qué no creas tu propia marca? eres excelente en lo que haces 👍" },
  { user: "ManuToro", text: "Amixxx estoy segura que todas amamosss 💘💘, ¿para cuándo tienes pensado un curso de edición?? 🤷‍♀️🤔🤔" },
  { user: "Manuela Restrepo", text: "Ya contrátala, Disney 💗" },
  { user: "Soytotiii", text: "Amiga, no te conozco pero capa con esa edición 🤌 deberías hacer tutoriales y así monetizar!!!!" },
  { user: "Daniemc", text: "Muy pro esa edición, wowwwwww" },
  { user: "Mariana", text: "¿Y qué tal si nos enseñasssss? QUE TESA MK" },
  { user: "Kamila", text: "Cuando te contraten sigue haciendo videos plis" },
  { user: "⭐", text: "ami, pero enséñame a editar con ese estilo 😤" },
  { user: "Sara", text: "hola, quiero crear una marca solo para contratarte" },
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
