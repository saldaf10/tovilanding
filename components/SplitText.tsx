"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Props = {
  text: string;
  className?: string;
  /** Retraso entre letras */
  stagger?: number;
  /** Delay inicial de toda la animación */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
};

/**
 * Título "split text": cada letra entra desde abajo con un stagger.
 * Las palabras no se parten entre líneas (whitespace-pre por palabra).
 */
export default function SplitText({
  text,
  className = "",
  stagger = 0.03,
  delay = 0,
  as = "span",
}: Props) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const letter: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  // Con reduced-motion, render directo sin animación letra por letra.
  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
          {word.split("").map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={letter} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
          {/* Espacio entre palabras (no animado) */}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
