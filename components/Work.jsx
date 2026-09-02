import Image from "next/image";
import Reveal from "./Reveal";

// [EDITA] tus proyectos. Pon la imagen en public/projects/ y referénciala aquí.
const projects = [
  {
    idx: "01",
    title: "Calzatec_IA",
    desc: "Sistema integral de gestión para la cadena de tiendas Calzando a México. Plataforma completa con inteligencia artificial para la gestión de inventario, ventas, capacitación y análisis de datos en tiempo real.",
    tags: ["React", "Node", "API", "IBM", "Hackathon"],
    image: "/projects/CalzatecIA.png",
    href: "https://calza-tec-ia.vercel.app/",
  },
  {
    idx: "02",
    title: "NEXUS",
    desc: "Plataforma de arte digital con 4 agentes de IA (impulsados por Claude) que permite a creadores latinoamericanos desplegar colecciones NFT en Ethereum, subastarlas y cobrar en pesos mexicanos vía SPEI, sin conocimientos técnicos. Construido en ETH Mexico 2026.",
    tags: ["Next.js", "TypeScript", "Ethereum", "Claude AI", "Hackathon"],
    image: "/projects/logo-nexus (2).png",
    href: "https://nexus-sigma-tan.vercel.app",
  },
  {
    idx: "03",
    title: "KAGE",
    desc: "Sistema de pruebas de conocimiento cero (ZK) para remesas privadas sobre Stellar Soroban. Permite probar cumplimiento KYC/AML y realizar transferencias de USDC sin revelar identidad, monto exacto ni datos privados.",
    tags: ["Circom", "Rust", "Stellar", "React", "Zero-Knowledge"],
    image: "/projects/Kage_logo_tribal_lightning_blossoms_202606172003-Photoroom.png",
    href: "https://kage-ebon.vercel.app",
  },
  {
    idx: "04",
    title: "FanSlayer",
    desc: "Videojuego 8 bits con integración Web3: conecta tu wallet y juega directo en el navegador sobre la red Monad.",
    tags: ["React", "Vite", "Web3", "Monad", "Wallet", "8 bits", "Videojuego", "Hackathon"],
    image: "/projects/proyecto-3.jpg",
    href: "https://fan-slayer.vercel.app/",
  },
  {
    idx: "05",
    title: "oniiRaiz",
    desc: "Plataforma real de eventos/experiencias (alaraiz.mx) con autenticación por rol, reservas con cupo y lista de espera automática, reseñas verificadas ancladas en blockchain (Ethereum Sepolia) y dos asistentes de IA con Claude, todo sobre Supabase con Row Level Security.",
    tags: ["React", "TypeScript", "Supabase", "Claude AI", "Ethereum"],
    image: "/projects/oniiraiz.jpg",
    href: "https://raiz-web-app.vercel.app/",
  },
  {
    idx: "06",
    title: "NUTRIDECO",
    desc: "Semáforo nutricional personalizado: le toma una foto a la etiqueta de un producto y, usando un modelo de visión local (Gemma vía Ollama), decide si es apto según la condición de salud y las alergias de la persona a la que cuidas. 100% offline y privado.",
    tags: ["Python", "FastAPI", "Ollama", "Vanilla JS", "Offline"],
    image: "/projects/deco.jpeg",
    href: "https://github.com/Oni7u7/NUTRIDECO",
  },
  {
    idx: "07",
    title: "Expense Tracker",
    desc: "Aplicación móvil desarrollada con React Native y Expo para el seguimiento y control de gastos personales, con límites, categorías, recompensas y análisis detallados.",
    tags: ["React Native", "Expo", "Supabase", "App Mobile"],
    image: "/projects/proyecto-2.jpg",
    href: "https://github.com/Oni7u7/ExpTrack",
  },
  {
    idx: "08",
    // [EDITA] no encontré una descripción para este repo en GitHub — cuéntame de qué trata y la ajusto
    title: "Kivo",
    desc: "Proyecto en desarrollo. Agrega aquí una descripción de qué hace Kivo y qué problema resuelve.",
    tags: ["Next.js"],
    image: "/projects/kivo.png",
    href: "https://kivo-theta.vercel.app",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1120px] px-5 py-[clamp(90px,14vh,150px)] sm:px-10">
      <Reveal>
        <span className="mb-4 inline-block font-display text-[0.82rem] text-amber">
          › ~/proyectos
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-10 text-[clamp(1.9rem,4.5vw,2.7rem)] font-bold tracking-tight">
          Proyectos seleccionados
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.idx} delay={i * 0.08}>
            <a
              href={p.href}
              className="group flex h-full flex-col overflow-hidden rounded-sm border border-line transition-all duration-300 hover:-translate-y-1 hover:border-amber"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-display text-[0.85rem] text-amber">{p.idx}</span>
                  <h3 className="text-[1.25rem] font-bold tracking-tight">{p.title}</h3>
                </div>
                <p className="mb-4 flex-1 text-[0.95rem] text-muted">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-line px-2 py-0.5 font-display text-[0.7rem] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
