"use client";

import { Fragment } from "react";

type Comment = { user: string; text: string };

/**
 * CARRUSEL DE COMENTARIOS
 * Scroll lateral infinito (CSS puro, mismo truco que <Marquee/>): duplicamos
 * el grupo de tarjetas y trasladamos -50%. Se pausa al pasar el mouse.
 * `motion-reduce` desactiva la animación para quien prefiere menos movimiento.
 */
export default function CommentsCarousel({ comments }: { comments: Comment[] }) {
  const group = (
    <div className="flex shrink-0 gap-5 pr-5">
      {comments.map((c, i) => (
        <Fragment key={`${c.user}-${i}`}>
          <article className="flex w-[320px] shrink-0 flex-col rounded-3xl bg-ink p-6 text-white shadow-xl sm:w-[360px]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-display text-base text-ink">
                {c.user.replace("@", "").charAt(0).toUpperCase()}
              </div>
              <span className="text-base font-semibold text-cream">{c.user}</span>
            </div>
            <p className="mt-4 text-lg font-medium leading-snug text-white">{c.text}</p>
            <div className="mt-auto flex items-center gap-1 pt-4 text-magenta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 21s-7.5-4.9-10-9.2C.3 8.6 1.6 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.4 0 4.7 3.6 3 6.8C19.5 16.1 12 21 12 21z" />
              </svg>
              <span className="text-xs text-white/50">y miles más…</span>
            </div>
          </article>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-hidden">
      {/* Difuminado en los bordes para que las tarjetas entren/salgan suaves */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-magenta to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-magenta to-transparent" />

      {/* Scroll continuo (no se pausa al pasar el cursor) */}
      <div className="flex animate-marquee-cards motion-reduce:animate-none">
        {group}
        {group}
      </div>
    </div>
  );
}
