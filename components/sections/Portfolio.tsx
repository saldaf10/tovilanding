"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { PORTFOLIO, type PortfolioItem } from "@/lib/content";

const SECTIONS = [
  { category: "Vlogs",             textSide: "left"  },
  { category: "Reels para marcas", textSide: "right" },
  { category: "Videoclips",        textSide: "left"  },
] as const;

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

      {/* 3 carruseles */}
      <div className="mt-16 flex flex-col gap-14">
        {SECTIONS.map((s, i) => (
          <CategoryCarousel
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

function CategoryCarousel({
  category,
  textSide,
  index,
}: {
  category: string;
  textSide: "left" | "right";
  index: number;
}) {
  const items = PORTFOLIO.filter((p) => p.category === category);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (outerRef.current && innerRef.current) {
        setDragWidth(
          Math.max(0, innerRef.current.scrollWidth - outerRef.current.offsetWidth)
        );
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [items.length]);

  const textBlock = (
    <Reveal delay={0.05 * index}>
      <div className="w-28 shrink-0 sm:w-36">
        <p className="font-display text-xl uppercase leading-tight text-white sm:text-2xl">
          {category}
        </p>
        <p className="kicker mt-1 text-white/40">{items.length} videos</p>
      </div>
    </Reveal>
  );

  const track = (
    <div ref={outerRef} className="min-w-0 flex-1 overflow-hidden">
      <motion.div
        ref={innerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -dragWidth }}
        dragElastic={0.04}
        dragTransition={{ bounceDamping: 30, bounceStiffness: 300 }}
        className="flex cursor-grab gap-3 active:cursor-grabbing"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <VideoCard key={item.poster} item={item} index={i} />
        ))}
        <div className="w-5 shrink-0" />
      </motion.div>
    </div>
  );

  return (
    <div className="flex items-center gap-5 px-5 sm:px-10">
      {textSide === "left" ? (
        <>{textBlock}{track}</>
      ) : (
        <>{track}{textBlock}</>
      )}
    </div>
  );
}

function VideoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 5) * 0.05 }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      data-cursor="hover"
      className="group relative aspect-[9/16] w-36 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-ink-warm sm:w-44"
    >
      {/* Thumbnail — img directo para que el browser envíe Referer al CDN */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.poster}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Video al hacer hover */}
      {item.video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta shadow-lg">
          <svg width="12" height="14" viewBox="0 0 20 22" fill="none" aria-hidden>
            <path d="M19 11L0.25 21.825V0.175L19 11Z" fill="white" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
