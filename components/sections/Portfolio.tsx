"use client";

import { useRef, useState, useEffect } from "react";
import { motion, type PanInfo } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { PORTFOLIO, type PortfolioItem } from "@/lib/content";

const CATEGORIES = ["Vlogs", "Reels para marcas", "Videoclips"] as const;

// Geometría del coverflow (px) — tarjetas horizontales 16:9
const CARD_W = 360;
const CARD_H = 203; // 16:9
const SPACING = 230; // separación horizontal entre tarjetas
const ANGLE = 35; // inclinación 3D de las tarjetas laterales

export default function Portfolio() {
  return (
    <section id="trabajo" className="relative bg-ink-soft py-24 sm:py-32">
      {/* Encabezado */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <Reveal>
          <span className="kicker text-magenta">Showreel</span>
        </Reveal>
        <h2 className="mt-3 font-display text-giant uppercase leading-[0.9]">
          <SplitText text="Mi trabajo" />
        </h2>
      </div>

      {/* 3 coverflows circulares */}
      <div className="mt-16 flex flex-col gap-16">
        {CATEGORIES.map((cat, i) => (
          <CoverflowCarousel key={cat} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}

function CoverflowCarousel({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  const items = PORTFOLIO.filter((p) => p.category === category);
  const n = items.length;

  // Empieza siempre en el centro.
  const [active, setActive] = useState(Math.floor(n / 2));

  // Escala responsive: la tarjeta central nunca se desborda.
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () =>
      setScale(Math.min(1, el.offsetWidth / (CARD_W + 90)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cw = CARD_W * scale;
  const ch = CARD_H * scale;
  const spacing = SPACING * scale;

  // Avanza de forma circular (wrap-around).
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  // Para teletransportar (sin animar) la tarjeta que da la vuelta.
  const prevOffsets = useRef<number[]>([]);

  // Precalcula posición de cada tarjeta (offset circular + si dio la vuelta).
  const cards = items.map((item, i) => {
    let offset = i - active;
    offset = ((offset % n) + n) % n;
    if (offset > n / 2) offset -= n;
    const prev = prevOffsets.current[i];
    const wrapped = prev !== undefined && Math.abs(offset - prev) > n / 2;
    return { item, offset, wrapped };
  });
  prevOffsets.current = cards.map((c) => c.offset);

  return (
    <div className="px-5 sm:px-10">
      {/* Texto ENCIMA del carrusel */}
      <div className="mx-auto mb-5 flex max-w-3xl items-center justify-between">
        <div>
          <p className="font-display text-2xl uppercase leading-none text-white sm:text-3xl">
            {category}
          </p>
          <p className="kicker mt-1 text-white/40">{n} videos</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            data-cursor="hover"
            aria-label="Anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            data-cursor="hover"
            aria-label="Siguiente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta"
          >
            →
          </button>
        </div>
      </div>

      {/* Escenario 3D */}
      <div
        ref={stageRef}
        className="relative"
        style={{ perspective: "1200px", height: ch + 40 }}
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map(({ item, offset, wrapped }, i) => {
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            return (
              <CoverflowCard
                key={item.poster}
                item={item}
                width={cw}
                height={ch}
                isActive={isActive}
                instant={wrapped}
                onClick={() => setActive(i)}
                style={{
                  x: offset * spacing - cw / 2,
                  y: -ch / 2,
                  rotateY: -offset * ANGLE,
                  scale: isActive ? 1 : Math.max(0.62, 1 - abs * 0.14),
                  opacity: abs > 2 ? 0 : 1,
                  zIndex: 100 - abs,
                  pointerEvents: abs > 2 ? "none" : "auto",
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function CoverflowCard({
  item,
  width,
  height,
  isActive,
  instant,
  onClick,
  style,
}: {
  item: PortfolioItem;
  width: number;
  height: number;
  isActive: boolean;
  instant: boolean;
  onClick: () => void;
  style: Record<string, number | string>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Solo el de adelante reproduce.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isActive]);

  return (
    <motion.article
      onClick={onClick}
      data-cursor="hover"
      initial={false}
      animate={style}
      transition={
        instant
          ? { duration: 0 }
          : { type: "spring", stiffness: 260, damping: 32 }
      }
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl bg-ink-warm shadow-2xl"
      style={{ width, height, transformStyle: "preserve-3d" }}
    >
      {/* Thumbnail — img directo para que el browser envíe Referer al CDN */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Video solo en la tarjeta activa */}
      {item.video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}

      {/* Oscurecer las que NO están adelante */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isActive ? "bg-ink/0" : "bg-ink/55"
        }`}
      />

      {/* Botón play en la del centro */}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta opacity-90 shadow-lg">
            <svg width="14" height="16" viewBox="0 0 20 22" fill="none" aria-hidden>
              <path d="M19 11L0.25 21.825V0.175L19 11Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </motion.article>
  );
}
