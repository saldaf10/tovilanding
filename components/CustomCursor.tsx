"use client";

import { useEffect, useRef, useState } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Cursor personalizado: un punto que sigue al mouse y un anillo que lo
 * persigue con un poco de delay. Crece y cambia de color al pasar sobre
 * elementos interactivos (cualquiera con [data-cursor="hover"], <a> o <button>).
 *
 * Solo se monta en dispositivos con puntero fino y si no se pide reduced-motion.
 */
export default function CustomCursor() {
  const fine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    const ring = ringRef.current!;
    const dot = dotRef.current!;

    // Posiciones objetivo y actuales (para el lerp del anillo)
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setHidden(false);
      // El punto sigue de inmediato
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const render = () => {
      // Lerp suave del anillo hacia el mouse
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    // Detecta hover sobre elementos interactivos mediante delegación
    const interactiveSelector = 'a, button, [data-cursor="hover"], input, textarea';
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) setHovering(false);
    };
    const onLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.3s" }}
    >
      {/* Anillo */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          borderColor: hovering ? "transparent" : "rgba(245,245,247,0.6)",
          backgroundColor: hovering ? "rgba(255,8,89,0.18)" : "transparent",
        }}
      />
      {/* Punto */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: hovering ? "#FF0859" : "#F5F5F7",
          transition: "background-color 0.3s",
        }}
      />
    </div>
  );
}
