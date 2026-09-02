"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <header
      id="top"
      className="mx-auto flex min-h-screen max-w-[1120px] flex-col justify-center px-5 sm:px-10"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="mb-5 font-display text-[0.85rem] text-muted">
          <span className="text-amber">~</span> % whoami
        </motion.div>

        {/* [EDITA] tu nombre */}
        <motion.h1
          variants={item}
          className="mb-5 font-display text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.98] tracking-tight"
        >
          Onii
        </motion.h1>

        {/* [EDITA] tu rol */}
        <motion.div
          variants={item}
          className="mb-5 text-[clamp(1.1rem,2.4vw,1.5rem)] font-medium text-ink"
        >
          Desarrollador de <span className="text-amber">Software Fullstack</span>
          <span className="cursor" />
        </motion.div>

        {/* [EDITA] una línea que te describa */}
        <motion.p variants={item} className="mb-10 max-w-[520px] text-[1.05rem] text-muted">
          Construyo interfaces y sistemas cuidando los detalles: código limpio,
          buen rendimiento y experiencias que se sienten bien de usar.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-sm border border-amber bg-amber px-6 py-3 font-display text-[0.85rem] font-bold text-bg transition-all duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-amber"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-line px-6 py-3 font-display text-[0.85rem] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
          >
            Contacto
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}
