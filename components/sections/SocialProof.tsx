"use client";

import Reveal from "@/components/Reveal";
import CommentsCarousel from "@/components/CommentsCarousel";
import { COMMENTS } from "@/lib/content";

/**
 * COMUNIDAD / PRUEBA SOCIAL
 * Enfocada 100% en lo que dice la gente: carrusel de comentarios reales.
 * (Sin métricas ni marcas — el foco son las voces de la audiencia.)
 */
export default function SocialProof() {
  return (
    <section className="grain relative overflow-hidden bg-magenta py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-10">
        <Reveal>
          <span className="kicker">Directo de los comentarios</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-giant uppercase leading-[0.88]">
            Lo que dicen{" "}
            <span className="font-script text-[1.15em] normal-case text-ink">
              ustedes
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80">
            Cada video que subo, ustedes responden. Estos son algunos de los
            mensajes que me dejan 💌
          </p>
        </Reveal>
      </div>

      {/* Comentarios — carrusel lateral infinito */}
      <div className="mt-14">
        <CommentsCarousel comments={COMMENTS} />
      </div>
    </section>
  );
}
