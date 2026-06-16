"use client";

import {
  BRAND_NAME,
  BRAND_FULL_NAME,
  BRAND_HANDLE,
  SOCIALS,
} from "@/lib/content";

const SOCIAL_LINKS = [
  { label: "Instagram", href: SOCIALS.instagram },
  { label: "TikTok", href: SOCIALS.tiktok },
  { label: "YouTube", href: SOCIALS.youtube },
];

/**
 * FOOTER
 * - Gran CTA final en fuente display.
 * - Redes, correo de contacto y créditos.
 */
export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        {/* Fila inferior */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 py-10 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div>
            <p className="font-display text-2xl uppercase">
              {BRAND_NAME}
              <span className="text-magenta">.</span>
            </p>
            <p className="kicker mt-1 text-white/50">
              {BRAND_FULL_NAME} · {BRAND_HANDLE}
            </p>
          </div>

          {/* Redes */}
          <ul className="flex flex-wrap gap-6">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group relative text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-cream"
                >
                  {s.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cream transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-2 pb-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {BRAND_NAME}. Todos los derechos reservados.
          </span>
          <span>Hecho con ritmo, color y café ☕</span>
        </div>
      </div>
    </footer>
  );
}
