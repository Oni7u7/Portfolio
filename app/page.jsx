import Background3D from "@/components/Background3D";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Background3D />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
        <footer className="border-t border-line py-10 text-center font-display text-[0.75rem] text-muted">
          © 2026 Onii — hecho con Next.js y three.js
        </footer>
      </div>
    </>
  );
}
