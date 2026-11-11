import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1120px] px-5 py-[clamp(90px,14vh,150px)] sm:px-10">
      <Reveal>
        <span className="mb-4 inline-block font-display text-[0.82rem] text-amber">
          › ~/sobre-mí
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-8 text-[clamp(1.9rem,4.5vw,2.7rem)] font-bold tracking-tight">
          Sobre mí
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:items-start">
        {/* [EDITA] cambia public/me.jpg por tu foto (misma proporción cuadrada) */}
        <Reveal>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-line">
            <Image
              src="/me.jpg"
              alt="Foto de Onii"
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </Reveal>

        <div>
          {/* [EDITA] tu bio */}
          <Reveal delay={0.05}>
            <p className="mb-4 text-[1.05rem] text-muted">
              Soy desarrollador <strong className="font-semibold text-ink">Fullstack</strong>.
              Me interesa lo que pasa entre la mente y el código. Tengo un gran apego a las páginas web
              y a las apps, pero no me centro solo en eso: también busco ampliar cada vez más lo que sé.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[1.05rem] text-muted">
              Cuando no estoy programando, ando{" "}
              <strong className="font-semibold text-ink">aprendiendo algo nuevo</strong> —
              últimamente animación web, gráficos 3D y todo lo que haga que una interfaz
              se sienta viva. Este portafolio es mi primer proyecto de ese tipo.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[1.05rem] text-muted">
              Además de tener un profundo amor por los videojuegos, los juegos de mesa, los autos y las películas de terror —sin dejar de lado la música en general—, lo que más me apasiona es programar y manejar. Siento que ambas actividades se parecen mucho: si manejas bien, no hay problema, pero un error puede traer consecuencias graves, igual que en el código. Además, disfruto mucho pasar tiempo con mi familia, mis amigos y mi equipo de trabajo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
