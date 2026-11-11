"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

// [EDITA] tus proyectos. Pon la imagen en public/projects/ y referénciala aquí.
// `cats` decide en qué filtros aparece cada uno (ver FILTERS abajo).
const projects = [
  {
    idx: "01",
    cats: ["ia", "hackathon", "web"],
    title: "Calzatec_IA",
    desc: "Sistema integral de gestión para la cadena de tiendas Calzando a México. Plataforma completa con inteligencia artificial para la gestión de inventario, ventas, capacitación y análisis de datos en tiempo real.",
    tags: ["React", "Node", "API", "IBM", "Hackathon"],
    image: "/projects/CalzatecIA.png",
    href: "https://calza-tec-ia.vercel.app/",
  },
  {
    idx: "02",
    cats: ["web3", "ia", "hackathon"],
    title: "NEXUS",
    desc: "Plataforma de arte digital con 4 agentes de IA (impulsados por Claude) que permite a creadores latinoamericanos desplegar colecciones NFT en Ethereum, subastarlas y cobrar en pesos mexicanos vía SPEI, sin conocimientos técnicos. Construido en ETH Mexico 2026.",
    tags: ["Next.js", "TypeScript", "Ethereum", "Claude AI", "Hackathon"],
    image: "/projects/logo-nexus (2).png",
    href: "https://nexus-sigma-tan.vercel.app",
  },
  {
    idx: "03",
    cats: ["web3"],
    title: "KAGE",
    desc: "Sistema de pruebas de conocimiento cero (ZK) para remesas privadas sobre Stellar Soroban. Permite probar cumplimiento KYC/AML y realizar transferencias de USDC sin revelar identidad, monto exacto ni datos privados.",
    tags: ["Circom", "Rust", "Stellar", "React", "Zero-Knowledge"],
    image: "/projects/Kage_logo_tribal_lightning_blossoms_202606172003-Photoroom.png",
    href: "https://kage-ebon.vercel.app",
  },
  {
    idx: "04",
    cats: ["web3", "hackathon"],
    title: "FanSlayer",
    desc: "Videojuego 8 bits con integración Web3: conecta tu wallet y juega directo en el navegador sobre la red Monad.",
    tags: ["React", "Vite", "Web3", "Monad", "Wallet", "8 bits", "Videojuego", "Hackathon"],
    image: "/projects/fanslayer.jpg",
    href: "https://fan-slayer.vercel.app/",
  },
  {
    idx: "05",
    cats: ["web", "ia", "web3"],
    title: "oniiRaiz",
    desc: "Plataforma real de eventos/experiencias (alaraiz.mx) con autenticación por rol, reservas con cupo y lista de espera automática, reseñas verificadas ancladas en blockchain (Ethereum Sepolia) y dos asistentes de IA con Claude, todo sobre Supabase con Row Level Security.",
    tags: ["React", "TypeScript", "Supabase", "Claude AI", "Ethereum"],
    image: "/projects/oniiraiz.jpg",
    href: "https://raiz-web-app.vercel.app/",
  },
  {
    idx: "06",
    cats: ["ia"],
    title: "NUTRIDECO",
    desc: "Semáforo nutricional personalizado: le toma una foto a la etiqueta de un producto y, usando un modelo de visión local (Gemma vía Ollama), decide si es apto según la condición de salud y las alergias de la persona a la que cuidas. 100% offline y privado.",
    tags: ["Python", "FastAPI", "Ollama", "Vanilla JS", "Offline"],
    image: "/projects/deco.jpeg",
    href: "https://github.com/Oni7u7/NUTRIDECO",
  },
  {
    idx: "07",
    cats: ["web", "ia"],
    title: "Expense Tracker",
    desc: "Aplicación móvil desarrollada con React Native y Expo para el seguimiento y control de gastos personales, con límites, categorías, recompensas y análisis detallados.",
    tags: ["React Native", "Expo", "Supabase", "App Mobile"],
    image: "/projects/exptrack.jpg",
    href: "https://github.com/Oni7u7/ExpTrack",
  },
  {
    idx: "08",
    cats: ["web3", "hackathon"],
    title: "Kivo",
    desc: "Rieles de confianza para el comercio mexicano: custodia programática (escrow) sobre Stellar que solo libera el dinero cuando se cumplen las condiciones del trato. Incluye rendimiento con bonos tokenizados, depósitos vía SPEI y un concierge de IA. Construido en Stellar Hackathon 2026.",
    tags: ["Next.js", "Stellar", "Soroban", "Rust", "Hackathon"],
    image: "/projects/kivo.png",
    href: "https://kivo-theta.vercel.app",
  },
  {
    idx: "09",
    cats: ["web3", "web"],
    title: "QRuta",
    desc: "Expediente de mantenimiento verificable para unidades de transporte: el taller registra cada servicio, su hash SHA-256 se ancla en Stellar y la unidad muestra un QR rotativo para que cualquier pasajero lo verifique antes de subir. Incluye una API pública de verificación.",
    tags: ["Next.js", "TypeScript", "Stellar", "Supabase", "API"],
    image: "/projects/qruta.jpg",
    href: "https://qruta.vercel.app",
  },
  {
    idx: "10",
    cats: ["web3"],
    title: "Zento",
    desc: "Trivia financiera competitiva con CETES como colateral: cada jugador deposita MXN, el pool genera rendimiento mientras juegan y el ganador se lleva el yield de todos; nadie pierde su depósito. Integra wallets y la API de Etherfuse.",
    tags: ["JavaScript", "Vite", "Etherfuse", "CETES", "Web3"],
    image: "/projects/zento.jpg",
    href: "https://zento-omega.vercel.app",
  },
  {
    idx: "11",
    cats: ["web3"],
    title: "Oniix Swap",
    desc: "MVP de swaps de tokens sobre 5 redes EVM (Ethereum, Base, Optimism, Polygon y Arbitrum) usando la Trading API de Uniswap. La API key vive solo en el servidor, los endpoints validan cada input y la wallet del usuario firma todo; incluye gráfico de precios y tests.",
    tags: ["Next.js", "TypeScript", "wagmi", "viem", "Uniswap"],
    image: "/projects/oniix-swap.jpg",
    href: "https://github.com/Oni7u7/Oniix-swap",
  },
  {
    idx: "12",
    cats: ["web"],
    title: "Onii'sgram",
    desc: "Red social minimalista fullstack: registro e inicio de sesión con JWT, publicaciones con imágenes, comentarios, likes y perfiles editables con foto.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    image: "/projects/oniisgram.jpg",
    href: "https://github.com/Oni7u7/Oni7u7-Onii-sgram",
  },
  {
    idx: "13",
    cats: ["ia", "web", "equipo"],
    title: "KioPay",
    desc: "Inclusión financiera para puestos de mercado y tianguis: cobros CoDi con QR, tickets leídos con GPT-4o Vision para calcular la ganancia real, nómina, cruce de deudas entre comerciantes (grafos) y un crédito adaptativo con calificación explicable. PWA con asistente por voz. Proyecto en equipo.",
    tags: ["React", "PWA", "OpenAI", "CoDi", "Fintech", "Equipo"],
    image: "/projects/kiopay.jpg",
    href: "https://kiopay.vercel.app",
  },
  {
    idx: "14",
    cats: ["web3", "hackathon", "equipo"],
    title: "SEPuente",
    desc: "Anchor SEP-24 open source y no custodial que convierte transferencias SPEI en pesos digitales (TMXN) en cualquier wallet de Stellar, y de regreso. Pasa 75 de 76 pruebas oficiales de anchors (SEP-1, 10, 24 y 38). GOYA HACK · CriptoUNAM 2026, en equipo.",
    tags: ["Next.js", "TypeScript", "Stellar", "SEP-24", "Hackathon", "Equipo"],
    image: "/projects/sepuente.jpg",
    href: "https://sepuente.vercel.app",
  },
  {
    idx: "15",
    cats: ["web3", "hackathon", "equipo"],
    title: "Squash",
    desc: "\"git squash\", pero para dinero: un motor de neteo multilateral que reduce N deudas al mínimo de transferencias y las liquida de forma atómica en Hedera; nadie paga hasta que todos firman. Se cobra por uso vía x402 y la demo divide la cuenta en la mesa con un QR. Proyecto en equipo.",
    tags: ["Next.js", "TypeScript", "Hedera", "x402", "Hackathon", "Equipo"],
    image: "/projects/squash.jpg",
    href: "https://squash-pay.vercel.app",
  },
  {
    idx: "16",
    cats: ["ia", "hackathon"],
    title: "Agente VNC (Frontier)",
    desc: "Agente de IA para un reto de hackathon: opera por VNC un sistema de gestión heredado sin API, como lo haría un empleado nuevo. Lee la pantalla, decide clics y formularios, atiende modales, detecta ciclos y solo da una tarea por terminada con evidencia en pantalla. Incluye simulador y suite de tests.",
    tags: ["Python", "VNC", "LLM", "Agentes", "pytest", "Hackathon"],
    image: "/projects/frontier.jpg",
    href: "https://github.com/Oni7u7/FrontierReto2-Onii",
  },
  {
    idx: "17",
    cats: ["web3"],
    title: "WorkChainMX",
    desc: "Plataforma de microcréditos descentralizados: solicitud de crédito, panel de administración e historial, con contratos inteligentes en Solidity para préstamos con penalización por atraso, desplegados en la red de pruebas Moonbase (Polkadot).",
    tags: ["React", "Solidity", "Polkadot", "Hardhat", "Tailwind"],
    image: "/projects/workchainmx.jpg",
    href: "https://github.com/Oni7u7/WorkChainMX",
  },
  {
    idx: "18",
    cats: ["web"],
    title: "NextAuth + Prisma",
    desc: "Base de autenticación fullstack: registro e inicio de sesión con NextAuth, contraseñas cifradas, usuarios en MySQL con Prisma y migraciones, y un dashboard protegido.",
    tags: ["Next.js", "NextAuth", "Prisma", "MySQL"],
    image: "/projects/proyecto-auth.jpg",
    href: "https://github.com/Oni7u7/proyecto",
  },
  {
    idx: "19",
    cats: ["web"],
    title: "Infografía: Computación Móvil",
    desc: "Infografía interactiva en forma de carrusel sobre computación móvil: características, sistemas operativos móviles y plataformas de desarrollo, con navegación por flechas e indicadores.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/infografia.jpg",
    href: "https://github.com/Oni7u7/InfografiaAMBD",
  },
  {
    idx: "20",
    cats: ["web"],
    title: "Periódico Digital",
    desc: "Periódico web con la fecha del día y noticias que se abren en un modal. Usa marquesinas animadas en títulos, imágenes y textos como ejercicio de animación.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/periodico.jpg",
    href: "https://periodico-flame.vercel.app",
  },
];

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "ia", label: "IA" },
  { id: "web3", label: "Web3" },
  { id: "web", label: "Web y apps" },
  { id: "hackathon", label: "Hackathon" },
  { id: "equipo", label: "En equipo" },
];

const INITIAL = 6;
const ease = [0.16, 1, 0.3, 1];

function ProjectCard({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title} (se abre en una pestaña nueva)`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-bg/60 transition-all duration-300 hover:-translate-y-1 hover:border-amber focus-visible:border-amber focus-visible:outline-none"
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
  );
}

export default function Work() {
  const [filter, setFilter] = useState("todos");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    filter === "todos" ? projects : projects.filter((p) => p.cats.includes(filter));
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);
  const hidden = filtered.length - visible.length;

  const count = (id) =>
    id === "todos" ? projects.length : projects.filter((p) => p.cats.includes(id)).length;

  const pick = (id) => {
    setFilter(id);
    setExpanded(false);
  };

  const collapse = () => {
    setExpanded(false);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" className="mx-auto max-w-[1120px] px-5 py-[clamp(90px,14vh,150px)] sm:px-10">
      <Reveal>
        <span className="mb-4 inline-block font-display text-[0.82rem] text-amber">
          › ~/proyectos
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-8 text-[clamp(1.9rem,4.5vw,2.7rem)] font-bold tracking-tight">
          Proyectos seleccionados
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div role="group" aria-label="Filtrar proyectos" className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => pick(f.id)}
                aria-pressed={active}
                className={`rounded-sm border px-3.5 py-2 font-display text-[0.78rem] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                  active
                    ? "border-amber bg-amber text-bg"
                    : "border-line text-muted hover:border-amber hover:text-amber"
                }`}
              >
                {f.label}
                <span className={`ml-2 ${active ? "text-bg/70" : "text-muted/70"}`}>
                  {count(f.id)}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <p className="sr-only" aria-live="polite">
        {`Mostrando ${visible.length} de ${filtered.length} proyectos`}
      </p>

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p, i) => (
            <motion.div
              key={p.idx}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease, delay: Math.min(i % INITIAL, 5) * 0.04 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length > INITIAL && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => (expanded ? collapse() : setExpanded(true))}
            aria-expanded={expanded}
            className="rounded-sm border border-line px-6 py-3 font-display text-[0.85rem] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-amber hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            {expanded ? "Ver menos ↑" : `Ver más (${hidden}) ↓`}
          </button>
        </div>
      )}
    </section>
  );
}
