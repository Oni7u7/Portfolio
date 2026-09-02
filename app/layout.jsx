import { Space_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

// [EDITA] tu nombre y descripción (esto sale en la pestaña del navegador y en Google)
export const metadata = {
  title: "Onii — Desarrollador",
  description: "Portafolio de Onii, desarrollador fullstack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${spaceMono.variable} ${hanken.variable}`}>
      <body className="font-body leading-relaxed">{children}</body>
    </html>
  );
}
