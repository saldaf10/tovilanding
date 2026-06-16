import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo base: casi-negro cálido (NO negro puro)
        ink: {
          DEFAULT: "#0A0A0F",
          soft: "#111016",
          warm: "#15121A",
        },
        // Paleta de acentos (usar como bloques sólidos de alto contraste)
        magenta: "#FF0859", // acento principal / CTAs
        gold: "#FCC908", // acento secundario
        cream: "#FFF8AF", // texto destacado / detalles
        red: "#EC1B1B", // usos puntuales / hover / energía
      },
      fontFamily: {
        // Tipografía de titulares/display "Blocks" (ver app/fonts.ts)
        display: ["var(--font-blocks)", "var(--font-inter)", "sans-serif"],
        // Tipografía de cuerpo
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Script/firma para acentos girly (palabras sueltas)
        script: ["var(--font-script)", "cursive"],
      },
      fontSize: {
        // Escala de display gigante para titulares estilo vlog
        "mega": ["clamp(3.5rem, 14vw, 16rem)", { lineHeight: "0.85", letterSpacing: "-0.02em" }],
        "giant": ["clamp(2.5rem, 9vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "70%": { transform: "translate(8%, 8%)" },
          "90%": { transform: "translate(-3%, 12%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "grain-shift": "grain-shift 0.6s steps(2) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
