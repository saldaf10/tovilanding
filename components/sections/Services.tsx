"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { SERVICES } from "@/lib/content";

/**
 * SERVICIOS
 * Cards en bloques de color sólido de alto contraste, con hover animado.
 */

// Mapa de acento -> clases (color block + texto legible encima)
const ACCENT: Record<
  "magenta" | "gold" | "cream",
  { bg: string; text: string; tag: string }
> = {
  magenta: { bg: "bg-magenta", text: "text-white", tag: "text-white/80" },
  gold: { bg: "bg-gold", text: "text-ink", tag: "text-ink/70" },
  cream: { bg: "bg-cream", text: "text-ink", tag: "text-ink/70" },
};

export default function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="kicker text-magenta">Servicios</span>
          </Reveal>
          <h2 className="mt-3 font-display text-giant uppercase leading-[0.9]">
            <SplitText text="Cómo te ayudo" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-white/70">
              Para marcas e influencers que quieren contenido que se sienta
              premium y conecte de verdad.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const a = ACCENT[s.accent];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                data-cursor="hover"
                className={`group relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl p-7 ${a.bg} ${a.text}`}
              >
                {/* Número grande de fondo */}
                <span className="pointer-events-none absolute -bottom-6 -right-2 font-display text-[9rem] leading-none opacity-10">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <span className={`kicker ${a.tag}`}>{s.tag}</span>
                  <h3 className="mt-4 font-display text-3xl uppercase leading-none sm:text-4xl">
                    {s.title}
                  </h3>
                </div>

                <p className={`relative z-10 mt-6 text-[15px] leading-relaxed ${a.text} opacity-90`}>
                  {s.desc}
                </p>

                {/* Flecha que se desliza al hover */}
                <div className="relative z-10 mt-6 flex items-center gap-2 font-semibold">
                  <span>Cotizar</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
