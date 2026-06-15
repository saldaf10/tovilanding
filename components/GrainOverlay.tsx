"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Capa de grano/film global, fija sobre todo el sitio.
 * Da el look de vlog. Se anima sutilmente salvo reduced-motion.
 */
export default function GrainOverlay() {
  const reduced = usePrefersReducedMotion();
  return (
    <div
      aria-hidden
      className={`grain-global ${reduced ? "" : "animate-grain-shift"}`}
    />
  );
}
