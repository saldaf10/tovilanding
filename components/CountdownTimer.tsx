"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-16T23:59:59");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function CountdownTimer() {
  // Empezamos en cero para que el render del servidor y el primer render del
  // cliente coincidan; el tiempo real se calcula ya montado en el cliente.
  const [t, setT] = useState(ZERO);

  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-fit rounded-2xl bg-red px-4 py-4 text-white shadow-xl sm:px-5">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
        Precio de lanzamiento
      </p>
      <div className="flex items-end justify-center gap-1 font-display leading-none">
        <div className="text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl">{pad(t.days)}</span>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70">días</p>
        </div>
        <span className="mb-2 text-3xl opacity-50 sm:mb-3 sm:text-4xl">:</span>
        <div className="text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl">{pad(t.hours)}</span>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70">hrs</p>
        </div>
        <span className="mb-2 text-3xl opacity-50 sm:mb-3 sm:text-4xl">:</span>
        <div className="text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl">{pad(t.minutes)}</span>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70">min</p>
        </div>
        <span className="mb-2 text-3xl opacity-50 sm:mb-3 sm:text-4xl">:</span>
        <div className="text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl">{pad(t.seconds)}</span>
          <p className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70">seg</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-bold leading-tight">
        ¡Ahórrate <span className="text-gold">$100.000</span> uniéndote a la waitlist!
      </p>
    </div>
  );
}
