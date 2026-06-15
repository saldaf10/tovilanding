"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { PORTFOLIO, type PortfolioItem } from "@/lib/content";

const CATEGORIES = ["Todos", "Vlogs", "Reels para marcas", "Edición creativa"] as const;
type Category = (typeof CATEGORIES)[number];

/**
 * SHOWREEL / PORTAFOLIO
 * - Filtro por categorías.
 * - Grid de clips; al hover reproduce un preview en loop (si hay video).
 * - Reveal con stagger al entrar.
 */
export default function Portfolio() {
  const [active, setActive] = useState<Category>("Todos");

  const items =
    active === "Todos"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === active);

  return (
    <section id="trabajo" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        {/* Encabezado */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="kicker text-magenta">Showreel</span>
            </Reveal>
            <h2 className="mt-3 font-display text-giant uppercase leading-[0.9]">
              <SplitText text="El trabajo" />
            </h2>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="hover"
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === cat
                    ? "border-magenta bg-magenta text-white"
                    : "border-white/20 text-white/70 hover:border-cream hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    // Reproduce el preview al hacer hover (si existe video real).
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-cursor="hover"
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-ink"
    >
      {/* Poster (imagen optimizada) */}
      <Image
        src={item.poster}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Preview de video (lazy: solo carga metadata; se reproduce al hover).
          TODO: agrega item.video con la ruta real para activar el preview. */}
      {item.video && (
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}

      {/* Overlay sólido al hover */}
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />

      {/* Etiqueta categoría tipo sticker */}
      <span className="absolute left-3 top-3 z-10 bg-ink/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
        {item.category}
      </span>

      {/* Botón play que aparece al hover */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex h-16 w-16 translate-y-3 items-center justify-center rounded-full bg-magenta opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden>
            <path d="M19 11L0.25 21.825V0.175L19 11Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Título abajo */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <h3 className="translate-y-1 font-display text-2xl uppercase leading-none transition-transform duration-500 group-hover:translate-y-0">
          {item.title}
        </h3>
      </div>
    </motion.article>
  );
}
