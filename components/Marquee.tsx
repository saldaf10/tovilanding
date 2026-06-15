"use client";

import { Fragment } from "react";

type Props = {
  words: string[];
  /** Color del separador "·" */
  className?: string;
};

/**
 * Marquee horizontal infinito con CSS puro (animación `marquee`).
 * Duplicamos el contenido para un loop perfecto al 50% de traslación.
 */
export default function Marquee({ words, className = "" }: Props) {
  const group = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="font-display uppercase">{w}</span>
          <span className="text-magenta">·</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      {/* motion-reduce desactiva la animación automáticamente */}
      <div className="flex animate-marquee motion-reduce:animate-none">
        {group}
        {group}
      </div>
    </div>
  );
}
