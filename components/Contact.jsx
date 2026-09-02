import Reveal from "./Reveal";

// [EDITA] tus redes
const socials = [
  { label: "GitHub ↗", href: "https://github.com/Oni7u7" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/diego-sevilla-d%C3%ADaz-016b49359/" },
  { label: "X / Twitter ↗", href: "https://x.com/S_Onii1" },
  { label: "Instagram ↗", href: "https://www.instagram.com/s_onii01" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-5 py-[clamp(90px,14vh,150px)] sm:px-10">
      <Reveal>
        <span className="mb-4 inline-block font-display text-[0.82rem] text-amber">
          › ~/contacto
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        {/* [EDITA] tu correo */}
        <p className="mb-8 text-[clamp(2rem,6vw,3.6rem)] font-bold leading-tight tracking-tight">
          ¿Trabajamos juntos?
          <br />
          Escríbeme a{" "}
          <a
            href="mailto:s.diego.d06@gmail.com"
            className="border-b-2 border-transparent text-amber transition-colors duration-300 hover:border-amber"
          >
            s.diego.d06@gmail.com
          </a>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-7">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-display text-[0.9rem] text-muted transition-colors duration-200 hover:text-amber"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
