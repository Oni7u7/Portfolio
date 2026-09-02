"use client";

import { motion } from "framer-motion";

// Envuelve cualquier contenido para que aparezca al entrar en pantalla.
// Uso: <Reveal><h2>Hola</h2></Reveal>  ó  <Reveal delay={0.1}>...</Reveal>
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
