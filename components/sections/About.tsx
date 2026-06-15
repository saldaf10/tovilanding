"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import KineticCaption from "@/components/KineticCaption";
import { ABOUT } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * SOBRE ELLA
 * - Foto con efecto parallax sutil ligado al scroll (GSAP ScrollTrigger).
 * - Caption cinético (estilo subtítulo) que se ilumina al hacer scroll.
 * - Texto narrativo que revela al entrar.
 */
export default function About() {
  const reduced = usePrefersReducedMotion();
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !imgRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Parallax: la imagen se mueve un poco más lento que el scroll.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="sobre" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-2">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="kicker text-magenta">{ABOUT.kicker}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-giant uppercase leading-[0.9]">
              De un <span className="text-stroke-magenta">hobby</span> a una
              carrera
            </h2>
          </Reveal>

          {/* Caption cinético sincronizado al scroll (vibe CapCut) */}
          <div className="mt-8 text-2xl font-medium leading-snug sm:text-3xl">
            <KineticCaption
              words={[
                "Esto",
                "empezó",
                "pequeño,",
                "pero",
                "ustedes",
                "lo",
                "hicieron",
                "enorme.",
              ]}
            />
          </div>

          <div className="mt-8 space-y-5 text-white/70">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="max-w-md text-base leading-relaxed sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Foto con parallax */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div
              ref={imgWrapRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {/* Bloque de color detrás como acento editorial */}
              <div className="absolute -right-3 -top-3 z-0 h-full w-full rounded-2xl bg-gold" />
              <div ref={imgRef} className="absolute inset-0 z-10 scale-110">
                <Image
                  // TODO: Reemplaza con la foto real de la editora (/public/about.jpg).
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=70"
                  alt="Retrato de la editora trabajando"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/15" />
              </div>
              {/* Etiqueta tipo sticker */}
              <div className="absolute bottom-4 left-4 z-20 rotate-[-3deg] bg-ink px-3 py-1 font-display text-sm uppercase text-cream">
                Detrás de cámaras
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
