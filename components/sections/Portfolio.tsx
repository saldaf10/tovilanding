"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { PORTFOLIO, type PortfolioItem } from "@/lib/content";

const CATEGORIES = ["Todos", "Vlogs", "Reels para marcas", "Videoclips"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Todos");

  const items =
    active === "Todos"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === active);

  return (
    <section id="trabajo" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
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
      </div>

      {/* Carrusel */}
      <Carousel items={items} />
    </section>
  );
}

function Carousel({ items }: { items: PortfolioItem[] }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (outerRef.current && innerRef.current) {
        setDragWidth(innerRef.current.scrollWidth - outerRef.current.offsetWidth);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [items]);

  const scroll = (dir: "left" | "right") => {
    if (!outerRef.current) return;
    const card = outerRef.current.querySelector("article");
    const step = card ? card.offsetWidth + 20 : 340;
    outerRef.current.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      {/* Navegación */}
      <div className="absolute -top-14 right-5 z-10 flex gap-2 sm:right-10">
        <button
          onClick={() => scroll("left")}
          data-cursor="hover"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          data-cursor="hover"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      {/* Track con scroll nativo + drag Framer Motion */}
      <div
        ref={outerRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide pl-5 sm:pl-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -Math.max(dragWidth, 0) }}
          dragElastic={0.05}
          dragTransition={{ bounceDamping: 30, bounceStiffness: 300 }}
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          style={{ width: "max-content" }}
        >
          {items.map((item, i) => (
            <PortfolioCard key={item.poster} item={item} index={i} />
          ))}
          {/* Spacer final para que el último card no quede pegado al borde */}
          <div className="w-5 shrink-0 sm:w-10" />
        </motion.div>
      </div>
    </div>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => videoRef.current?.play().catch(() => {});
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.06 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-cursor="hover"
      className="group relative aspect-[9/16] w-[72vw] shrink-0 cursor-pointer overflow-hidden rounded-xl bg-ink sm:w-[38vw] lg:w-[26vw]"
    >
      {/* Thumbnail */}
      <Image
        src={item.poster}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 38vw, 26vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Preview de video al hover */}
      {item.video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />

      {/* Categoría */}
      <span className="absolute left-3 top-3 z-10 bg-ink/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
        {item.category}
      </span>

      {/* Botón play */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex h-14 w-14 translate-y-3 items-center justify-center rounded-full bg-magenta opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="18" height="20" viewBox="0 0 20 22" fill="none" aria-hidden>
            <path d="M19 11L0.25 21.825V0.175L19 11Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Título */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <h3 className="translate-y-1 font-display text-2xl uppercase leading-none transition-transform duration-500 group-hover:translate-y-0">
          {item.title}
        </h3>
      </div>
    </motion.article>
  );
}
