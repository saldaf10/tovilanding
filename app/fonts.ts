import { Inter, Archivo_Black } from "next/font/google";
// import localFont from "next/font/local"; // <- descomenta cuando tengas el archivo de "Blocks"

/**
 * Tipografía de cuerpo: Inter (sans-serif limpia y moderna).
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Tipografía de titulares/display: "Blocks".
 *
 * ⚠️ Por defecto usamos Archivo Black como PLACEHOLDER para que el proyecto
 *    haga `next build` y despliegue en Vercel sin necesitar el archivo real.
 *
 * TODO: Sustituir por la fuente real "Blocks".
 *   1. Copia el archivo en `app/fonts/Blocks.woff2`.
 *   2. Descomenta el import de `localFont` arriba y el bloque de abajo.
 *   3. Borra (o comenta) el `Archivo_Black` placeholder y exporta `blocks`
 *      apuntando al localFont. La variable CSS (`--font-blocks`) es la misma,
 *      así que no hay que tocar nada más en el resto del código.
 */
export const blocks = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-blocks",
});

/*
export const blocks = localFont({
  src: [
    {
      path: "./fonts/Blocks.woff2", // <- archivo real de la fuente Blocks
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-blocks",
});
*/
