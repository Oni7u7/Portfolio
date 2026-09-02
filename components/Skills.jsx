import Reveal from "./Reveal";

// [EDITA] tus tecnologías
const groups = [
  { title: "Lenguajes", items: ["JavaScript / TypeScript", "Python", "Solidity", "Java"] },
  { title: "Frameworks", items: ["React", "Next.js", "Node.js", "Flask"] },
  { title: "Herramientas", items: ["Git & GitHub", "Vercel", "Visual Studio Code", "CI/CD"] },
  { title: "Base de datos", items: ["Oracle", "MongoDB", "MySQL", "Supabase(Postgress)"]},
  { title: "AI", items: ["GPT", "CLaude", "Gemini(Gemma)", "Ollama"]},
  { title: "S.O", items: ["Windows", "Linux", "MacOS"]},

];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1120px] px-5 py-[clamp(90px,14vh,150px)] sm:px-10">
      <Reveal>
        <span className="mb-4 inline-block font-display text-[0.82rem] text-amber">
          › ~/skills
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-8 text-[clamp(1.9rem,4.5vw,2.7rem)] font-bold tracking-tight">
          Herramientas
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="rounded-sm border border-line bg-gradient-to-b from-surface to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber">
              <h3 className="mb-4 font-display text-[0.9rem] font-bold text-amber">
                {g.title}
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it} className="py-1 text-[0.98rem] text-muted">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
