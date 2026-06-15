"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Props = {
  /** Palabras que aparecen una a una, estilo subtítulo CapCut */
  words: string[];
  className?: string;
};

/**
 * Texto cinético tipo subtítulo/caption sincronizado al scroll.
 * Cada palabra se ilumina (de tenue a blanco) según avanza el scroll
 * sobre el contenedor — vibe de subtítulos auto-generados (CapCut).
 */
export default function KineticCaption({ words, className = "" }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <p
      ref={ref}
      className={`flex flex-wrap gap-x-[0.3em] gap-y-2 ${className}`}
    >
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
          reduced={reduced}
        />
      ))}
    </p>
  );
}

function Word({
  word,
  index,
  total,
  progress,
  reduced,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  // Cada palabra ocupa una "ventana" del progreso total
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);

  if (reduced) {
    return <span className="opacity-100">{word}</span>;
  }

  return <motion.span style={{ opacity }}>{word}</motion.span>;
}
