/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#100e0b",       // tinta oscura cálida
        surface: "#1a160f",
        line: "#2c2620",
        ink: "#ece5d6",      // blanco cálido
        muted: "#928a7b",
        amber: "#e6b25e",    // ámbar fósforo
      },
      fontFamily: {
        display: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
