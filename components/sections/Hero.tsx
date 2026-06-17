"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import { BRAND_NAME, MARQUEE_WORDS } from "@/lib/content";

/**
 * HERO
 * - Video showreel de fondo a sangre completa (loop, muted, autoplay).
 * - Overlay oscuro + grano para legibilidad y look de vlog.
 * - Nombre gigante animado letra por letra (fuente Blocks/display).
 * - Dos CTAs.
 * - Marquee infinito al pie.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden"
    >
      {/* Fondo: atardecer (cálido / girly) */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sunset.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* Overlay para legibilidad + tinte magenta sutil (mantiene identidad).
            Suave arriba para dejar ver el atardecer; degradado más fuerte abajo
            donde van el nombre y los CTAs. */}
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-magenta/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </div>

      {/* Sticker / timestamp decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ delay: 1, duration: 0.6, ease: "backOut" }}
        className="absolute right-5 top-28 z-10 hidden rotate-[-8deg] bg-gold px-3 py-1 font-display text-sm uppercase text-ink sm:block"
      >
        ● REC 00:24:11
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-28 sm:px-10">
        {/* Nombre gigante en fuente display, split text */}
        <h1 className="font-display uppercase leading-[0.82]">
          <SplitText
            text={BRAND_NAME}
            as="span"
            className="block text-mega"
            delay={0.5}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          Cuento historias que se{" "}
          <span className="font-script text-4xl leading-none text-cream sm:text-5xl">
            sienten
          </span>
          . Vlogs, reels y edición creativa con ritmo, color y alma.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#trabajo"
            className="rounded-full bg-magenta px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-red"
          >
            Ver mi trabajo
          </MagneticButton>
          <MagneticButton
            href="#curso"
            className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold text-white transition-colors hover:border-cream hover:text-cream"
          >
            Únete a la lista del curso
          </MagneticButton>
        </motion.div>
      </div>

      {/* Marquee inferior */}
      <div className="relative z-10 border-y border-white/10 bg-ink/60 py-4 text-2xl backdrop-blur-sm sm:text-3xl">
        <Marquee words={MARQUEE_WORDS} />
      </div>
    </section>
  );
}
