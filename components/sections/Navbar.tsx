"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { BRAND_NAME } from "@/lib/content";

const LINKS = [
  { label: "Sobre mí", href: "#sobre" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Curso", href: "#curso" },
];

/**
 * Navbar flotante minimalista. Se compacta levemente al hacer scroll.
 * Incluye menú móvil tipo overlay.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-5 py-3 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "bg-ink/80 shadow-lg shadow-black/30" : "bg-white/[0.03]"
          }`}
        >
          {/* Logo / nombre */}
          <a
            href="#top"
            className="font-display text-lg uppercase tracking-tight"
            data-cursor="hover"
          >
            {BRAND_NAME.split(" ")[0]}
            <span className="text-magenta">.</span>
          </a>

          {/* Links desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="kicker text-white/70 transition-colors hover:text-cream"
                  data-cursor="hover"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <MagneticButton
              href="#curso"
              className="rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red"
            >
              Trabajemos juntos
            </MagneticButton>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Abrir menú"
            data-cursor="hover"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Overlay móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-md md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-4xl uppercase"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#curso"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-magenta px-7 py-3 font-semibold text-white"
            >
              Trabajemos juntos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
