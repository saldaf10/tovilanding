"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import MagneticButton from "@/components/MagneticButton";
import CountdownTimer from "@/components/CountdownTimer";

type Status = "idle" | "loading" | "success" | "error";

/**
 * CURSO (próximamente) + WAITLIST
 * Formulario de captura de correo con estado de envío.
 *
 * TODO: Conecta `submitToWaitlist` a tu servicio real (Mailchimp, ConvertKit,
 *       Resend, Formspree, una API route propia, etc.). El endpoint se lee de
 *       la variable de entorno NEXT_PUBLIC_WAITLIST_ENDPOINT (.env.local).
 */
async function submitToWaitlist(email: string): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

  // --- PLACEHOLDER ---
  // Si no hay endpoint configurado, simulamos un envío exitoso para la demo.
  if (!endpoint || endpoint.includes("example.com")) {
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.info("[waitlist] (demo) email capturado:", email);
    return;
  }

  // --- ENVÍO REAL ---
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error("No se pudo registrar el correo");
}

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      await submitToWaitlist(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="curso" className="grain relative overflow-hidden bg-gold py-24 text-ink sm:py-32">
      {/* Timer en la izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <CountdownTimer />
      </motion.div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-10">
        <span className="kicker">El curso</span>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-giant uppercase leading-[0.88]">
          <SplitText text="Aprende a editar como yo" />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-ink/80"
        >
          Estoy preparando un curso donde te enseño mi proceso completo: ritmo,
          color, transiciones y storytelling. Sé el primero en aprender.
        </motion.p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            disabled={status === "loading" || status === "success"}
            className="flex-1 rounded-full border-2 border-ink bg-transparent px-6 py-4 text-ink placeholder:text-ink/50 focus:border-magenta focus:outline-none disabled:opacity-60"
          />
          <MagneticButton
            type="submit"
            className="rounded-full bg-ink px-8 py-4 font-semibold text-cream transition-colors hover:bg-magenta hover:text-white"
          >
            {status === "loading"
              ? "Enviando…"
              : status === "success"
              ? "¡Listo! ✓"
              : "Quiero entrar"}
          </MagneticButton>
        </form>

        {/* Mensajes de estado */}
        <div className="mt-4 h-6 text-sm font-semibold">
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-ink"
            >
              🎬 ¡Estás en la lista! Te aviso apenas abra el curso.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red"
            >
              Algo salió mal. Intenta de nuevo en un momento.
            </motion.p>
          )}
        </div>

        <p className="mt-2 text-xs text-ink/60">
          Sin spam. Solo te aviso cuando el curso esté listo.
        </p>
      </div>
    </section>
  );
}
