/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#020617",
        ink: "#070b14",
        surface: "#0b111c",
        dusk: "#0f172a",
      },
      boxShadow: {
        premium: "0 35px 120px rgba(56,189,248,0.14)",
        glow: "0 0 45px rgba(56,189,248,0.18)",
        "violet-glow": "0 0 45px rgba(139,92,246,0.35)",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(139,92,246,0.18), transparent 28%)",
        "noise-pattern": "url('/src/assets/noise.png')",
      },
    },
  },
  plugins: [],
};