import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import SocialProof from "@/components/sections/SocialProof";
import Waitlist from "@/components/sections/Waitlist";
import Footer from "@/components/sections/Footer";

/**
 * Landing de una sola página (scroll vertical).
 * Cada sección es un componente independiente y reutilizable.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <SocialProof />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
