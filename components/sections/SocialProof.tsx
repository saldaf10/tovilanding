"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import { COMMENTS, BRANDS, STATS } from "@/lib/content";

/**
 * PRUEBA SOCIAL
 * - Comentarios reales de la audiencia pidiendo que enseñe.
 * - Marcas que la contactaron (marquee).
 * - Métricas animadas (contadores que suben al entrar en viewport).
 */
export default function SocialProof() {
  return (
    <section className="grain relative overflow-hidden bg-magenta py-24 text-ink sm:py-32">
      {/* Métricas */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <Reveal>
          <span className="kicker">La gente lo pidió</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-3xl font-display text-giant uppercase leading-[0.88]">
            Crecí gracias a ustedes
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-ink/20 py-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div>
                <div className="font-display text-5xl leading-none sm:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="kicker mt-2 text-ink/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Comentarios de la audiencia */}
      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMENTS.map((c, i) => (
            <motion.div
              key={c.user}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-ink p-5 text-white shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-sm text-ink">
                  {c.user.replace("@", "").charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-cream">{c.user}</span>
              </div>
              <p className="mt-3 text-[15px] leading-snug text-white/85">{c.text}</p>
              <div className="mt-3 flex items-center gap-1 text-magenta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 21s-7.5-4.9-10-9.2C.3 8.6 1.6 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.4 0 4.7 3.6 3 6.8C19.5 16.1 12 21 12 21z" />
                </svg>
                <span className="text-xs text-white/50">y miles más…</span>
              </div>
            </motion.div>
          ))}

          {/* Card CTA dentro del grid */}
          <motion.a
            href="#curso"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-cursor="hover"
            className="flex flex-col justify-between rounded-2xl bg-ink p-5 text-cream transition-colors hover:bg-red hover:text-white"
          >
            <span className="kicker">¿Lo escuchaste?</span>
            <span className="mt-6 font-display text-2xl uppercase leading-none">
              El curso ya viene →
            </span>
          </motion.a>
        </div>
      </div>

      {/* Marcas que la contactaron */}
      <div className="mt-16">
        <div className="mb-5 text-center">
          <span className="kicker text-ink/60">Marcas que han confiado</span>
        </div>
        <div className="border-y border-ink/20 py-5 font-display text-3xl text-ink sm:text-4xl">
          <Marquee words={BRANDS.map((b) => b.toUpperCase())} />
        </div>
      </div>
    </section>
  );
}
