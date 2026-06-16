"use client";

import { useRef, useState, useEffect } from "react";
import { motion, type PanInfo } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { PORTFOLIO, type PortfolioItem } from "@/lib/content";

const SECTIONS = [
  { category: "Vlogs",             textSide: "left"  },
  { category: "Reels para marcas", textSide: "right" },
  { category: "Videoclips",        textSide: "left"  },
] as const;

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

      {/* 3 coverflows */}
      <div className="mt-16 flex flex-col gap-20">
        {SECTIONS.map((s, i) => (
          <CoverflowCarousel
            key={s.category}
            category={s.category}
            textSide={s.textSide}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

function CoverflowCarousel({
  category,
  textSide,
  index,
}: {
  category: string;
  textSide: "left" | "right";
  index: number;
}) {
  const items = PORTFOLIO.filter((p) => p.category === category);
  const [active, setActive] = useState(0);

  // Escala responsive: la tarjeta central nunca se desborda del área visible.
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.offsetWidth;
      // Queremos que entre la central + un asomo de las laterales.
      setScale(Math.min(1, w / (CARD_W + 90)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cw = CARD_W * scale;
  const ch = CARD_H * scale;
  const spacing = SPACING * scale;

  const go = (dir: number) =>
    setActive((a) => Math.min(items.length - 1, Math.max(0, a + dir)));

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  const textBlock = (
    <Reveal delay={0.05 * index}>
      <div className="w-32 shrink-0 sm:w-44">
        <p className="font-display text-2xl uppercase leading-tight text-white sm:text-3xl">
          {category}
        </p>
        <p className="kicker mt-1 text-white/40">{items.length} videos</p>
        {/* Flechas */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            data-cursor="hover"
            aria-label="Anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta disabled:opacity-25"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            disabled={active === items.length - 1}
            data-cursor="hover"
            aria-label="Siguiente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-magenta hover:text-magenta disabled:opacity-25"
          >
            →
          </button>
        </div>
      </div>
    </Reveal>
  );

  const stage = (
    <div
      ref={stageRef}
      className="relative min-w-0 flex-1"
      style={{ perspective: "1200px", height: ch + 40 }}
    >
      {/* Capa para arrastrar / swipe */}
      <motion.div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          return (
            <CoverflowCard
              key={item.poster}
              item={item}
              width={cw}
              height={ch}
              isActive={isActive}
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
  );

  return (
    <div className="flex items-center gap-4 px-5 sm:gap-8 sm:px-10">
      {textSide === "left" ? (
        <>{textBlock}{stage}</>
      ) : (
        <>{stage}{textBlock}</>
      )}
    </div>
  );
}

function CoverflowCard({
  item,
  width,
  height,
  isActive,
  onClick,
  style,
}: {
  item: PortfolioItem;
  width: number;
  height: number;
  isActive: boolean;
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
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
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

      {/* Oscurecer las tarjetas que NO están adelante */}
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
