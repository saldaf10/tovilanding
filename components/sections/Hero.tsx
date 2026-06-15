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
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          // TODO: Reemplaza con tu showreel real (mp4/webm). Súbelo a /public/videos/.
          // poster sirve mientras carga el video (lazy-ish, no bloquea el render).
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=60"
        >
          {/* TODO: <source src="/videos/showreel.webm" type="video/webm" /> */}
          {/* TODO: <source src="/videos/showreel.mp4" type="video/mp4" /> */}
        </video>
        {/* Overlay oscuro en bloque sólido (sin degradado) */}
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
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
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="kicker mb-4 inline-block w-fit bg-magenta px-3 py-1 text-white"
        >
          Editora de video · Freelance
        </motion.span>

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
          <span className="text-cream">sienten</span>. Vlogs, reels y edición
          creativa con ritmo, color y alma.
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
