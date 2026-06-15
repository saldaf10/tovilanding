import type { Metadata, Viewport } from "next";
import { inter, blocks } from "./fonts";
import { BRAND_NAME } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: Ajusta título, descripción y OG para SEO/compartir.
  title: `${BRAND_NAME} — Editora de video`,
  description:
    "Editora de video. Cuento historias que se sienten: vlogs, reels y edición creativa para creadores y marcas.",
  openGraph: {
    title: `${BRAND_NAME} — Editora de video`,
    description: "Cuento historias que se sienten. Vlogs, reels y edición creativa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${blocks.variable}`}>
      <body className="bg-ink text-[#f5f5f7] antialiased">
        <CustomCursor />
        <GrainOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
