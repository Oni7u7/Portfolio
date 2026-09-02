export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 backdrop-blur-md sm:px-10 bg-gradient-to-b from-bg to-transparent">
      {/* [EDITA] tu marca / iniciales */}
      <a href="#top" className="font-display text-[0.95rem] font-bold tracking-tight">
        Dev<span className="text-amber">_</span>Onii
      </a>
      <div className="hidden gap-7 sm:flex">
        {[
          ["sobre-mí", "#about"],
          ["skills", "#skills"],
          ["proyectos", "#work"],
          ["contacto", "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="group relative font-display text-[0.8rem] text-muted transition-colors hover:text-ink"
          >
            {label}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
}
