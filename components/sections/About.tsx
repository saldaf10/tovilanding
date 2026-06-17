"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <section id="sobre" className="grain relative overflow-hidden bg-ink pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-2">
        {/* Texto */}
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal>
            <span className="kicker text-magenta">{ABOUT.kicker}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-giant uppercase leading-[0.9]">
              De un <span className="text-stroke-magenta">hobby</span> a una
              carrera
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-3 font-script text-3xl text-magenta sm:text-4xl">
              detrás de cada clip, soy yo
            </p>
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
        <div className="relative z-0 order-1 lg:order-2">
          <Reveal>
            <div
              ref={imgWrapRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {/* Bloque de color detrás como acento editorial */}
              <div className="absolute -right-3 -top-3 z-0 h-full w-full rounded-2xl bg-gold" />
              <div ref={imgRef} className="absolute inset-0 z-10 scale-110">
                <Image
                  src="/her-camera.jpg"
                  alt="Valentina con su cámara"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/10" />
              </div>
              {/* Etiqueta tipo sticker */}
              <div className="absolute bottom-4 left-4 z-20 rotate-[-3deg] bg-ink px-3 py-1 font-display text-sm uppercase text-cream">
                Detrás de cámaras
              </div>
            </div>
          </Reveal>

          {/* Polaroid secundaria (vibe scrapbook girly) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute -bottom-8 -left-4 z-30 hidden w-36 rotate-6 rounded-sm bg-cream p-2 pb-6 shadow-2xl sm:block lg:-left-10 lg:w-44"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/her-golden.jpg"
              alt="Valentina al atardecer"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <span className="absolute bottom-1 left-0 right-0 text-center font-script text-xl text-ink">
              mi mundo ✨
            </span>
          </motion.div>
        </div>
      </div>

      {/* Moodboard girly: tira de fotos tipo scrapbook */}
      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-10">
        <p className="mb-6 font-script text-3xl text-cream sm:text-4xl">un poco de mi mundo</p>
        <div className="grid grid-cols-5 items-start gap-2 sm:gap-4">
          {[
            { src: "/her-mirror.jpg", rot: "-rotate-3" },
            { src: "/mood-neon.jpg", rot: "rotate-2" },
            { src: "/her-party.jpg", rot: "-rotate-2" },
            { src: "/sunset.jpg", rot: "rotate-3" },
            { src: "/her-6805.png", rot: "rotate-1" },
          ].map((m, i) => (
            <motion.div
              key={m.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`${m.rot} rounded-sm bg-cream p-1.5 pb-4 shadow-xl sm:p-2 sm:pb-5`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.src}
                alt=""
                aria-hidden
                loading="lazy"
                className="aspect-[3/4] w-full rounded-sm object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
