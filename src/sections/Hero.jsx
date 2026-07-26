import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";

// ── Staggered word reveal (safer than char-by-char) ───────────────────────────
function RevealText({ children, delay = 0, className = "" }) {
  return (
    <motion.span
      className={`block ${className}`}
      initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

// ── Floating stat chip ────────────────────────────────────────────────────────
function StatChip({ value, label, accent, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 rounded-2xl border border-white/10 bg-[#0a0e1a]/90 px-4 py-3 shadow-2xl backdrop-blur-md ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: delay }}
      >
        <p className={`font-display text-2xl font-bold ${accent}`}>{value}</p>
        <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
      </motion.div>
    </motion.div>
  );
}

// ── Drifting background spotlight ────────────────────────────────────────────
function Spotlight() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      animate={{
        background: [
          "radial-gradient(ellipse 55% 45% at 25% 25%, rgba(139,92,246,0.22) 0%, transparent 65%)",
          "radial-gradient(ellipse 55% 45% at 75% 55%, rgba(217,70,239,0.16) 0%, transparent 65%)",
          "radial-gradient(ellipse 55% 45% at 35% 75%, rgba(139,92,246,0.18) 0%, transparent 65%)",
          "radial-gradient(ellipse 55% 45% at 65% 25%, rgba(6,182,212,0.12) 0%, transparent 65%)",
          "radial-gradient(ellipse 55% 45% at 25% 25%, rgba(139,92,246,0.22) 0%, transparent 65%)",
        ],
      }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const techPills = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux",
  "GraphQL", "Framer Motion", "Figma", "Vercel", "REST APIs",
  "Jest", "Vite", "Zustand", "WCAG 2.1", "Webpack", "SCSS",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#080c14] text-white"
      aria-label="Hero"
    >
      {/* ── Cinematic letterbox open ──────────────────── */}
      <motion.div aria-hidden="true"
        initial={{ scaleY: 1 }} animate={{ scaleY: 0 }}
        transition={{ duration: 0.85, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-x-0 top-0 z-[80] h-[18vh] bg-[#080c14]"
      />
      <motion.div aria-hidden="true"
        initial={{ scaleY: 1 }} animate={{ scaleY: 0 }}
        transition={{ duration: 0.85, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "bottom" }}
        className="absolute inset-x-0 bottom-0 z-[80] h-[18vh] bg-[#080c14]"
      />

      {/* ── Backgrounds ──────────────────────────────── */}
      <Spotlight />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* Deep glows */}
        <div className="absolute right-[5%] top-[5%] h-[650px] w-[650px] rounded-full bg-violet-900/30 blur-[150px]" />
        <div className="absolute left-[5%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-cyan-900/20 blur-[130px]" />
        {/* Fine grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }}
        />
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,1) 2px,rgba(255,255,255,1) 4px)",
          }}
        />
      </div>

      {/* Floating orbs */}
      {[
        { cls: "h-2.5 w-2.5 bg-violet-400/80", style: { top: "28%", left: "6%" }, dur: 5.5 },
        { cls: "h-2 w-2 bg-cyan-400/70",        style: { top: "62%", left: "10%"}, dur: 7.1 },
        { cls: "h-3 w-3 bg-fuchsia-400/60",     style: { top: "20%", right: "42%"},dur: 6.3 },
        { cls: "h-2 w-2 bg-violet-300/60",      style: { bottom:"28%",right:"8%"}, dur: 4.9 },
      ].map((o, i) => (
        <motion.div key={i} aria-hidden="true"
          style={o.style}
          className={`pointer-events-none absolute z-10 rounded-full ${o.cls}`}
          animate={{ y: [-12, 12, -12], x: [-6, 6, -6], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Main layout ───────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-between pt-10"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-300">
              Available for work
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            {["About", "Projects", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:text-slate-300">
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── SPLIT LAYOUT ─────────────────────────────── */}
        <div className="flex flex-1 flex-col items-center gap-12 py-16 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

          {/* LEFT — copy */}
          <div className="flex w-full flex-col gap-6 lg:flex-1">

            {/* Role eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="block h-px w-10 bg-gradient-to-r from-violet-400 to-fuchsia-400"
              />
              <span className="font-accent text-sm font-medium tracking-[0.2em] text-violet-300/80">
                Frontend Developer
              </span>
            </motion.div>

            {/* NAME — the hero centrepiece */}
            <div>
              <RevealText delay={0.85} className="font-display text-5xl font-bold leading-tight tracking-[-0.02em] text-slate-300/80 md:text-6xl">
                Hi, I'm
              </RevealText>
              <RevealText
                delay={1.0}
                className="font-display text-[clamp(4.5rem,11vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.04em]"
              >
                <span style={{
                  backgroundImage: "linear-gradient(135deg, #c4b5fd 0%, #e879f9 40%, #a78bfa 65%, #67e8f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Likhith.
                </span>
              </RevealText>
            </div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-5 bg-white/20" />
              <div className="font-accent text-xl font-medium text-slate-400 md:text-2xl">
                {mounted && (
                  <Typewriter
                    options={{
                      strings: ["React.js Engineer", "Next.js Specialist", "TypeScript Developer", "UI Performance Expert"],
                      autoStart: true, loop: true, delay: 55, deleteSpeed: 28,
                    }}
                  />
                )}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div className="overflow-hidden">
              <motion.p
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-md font-body text-base leading-relaxed text-slate-400 md:text-lg"
              >
                2+ years shipping{" "}
                <span className="font-semibold text-white">production-grade</span>{" "}
                React & Next.js apps scalable architecture, peak Lighthouse scores,
                WCAG 2.1 accessible, zero-downtime deploys.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #7c3aed 100%)",
                  backgroundSize: "200%",
                  boxShadow: "0 0 32px rgba(139,92,246,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                {/* Shimmer */}
                <motion.span aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "250%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                See My Work
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
              </motion.a>

              <motion.a
                href="/Likhith_Gowda_frontend_developer.pdf"
                download
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-violet-400/40 hover:bg-white/[0.09] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.95, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {[
                { label: "GitHub",   href: "https://github.com/likhithgowdaslikhiths-cmd",
                  d: "M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.96 10.96 0 0112 6.84c.97.004 1.95.13 2.87.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55C20.21 21.43 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z",
                  vb: "0 0 24 24" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/likhith-gowda-s-55a440278/",
                  d: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z",
                  vb: "0 0 24 24" },
                { label: "Email",   href: "mailto:likhithgowdaslikhiths@gmail.com",
                  d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
                  vb: "0 0 20 20" },
              ].map(({ label, href, d, vb }) => (
                <motion.a key={label} href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  whileHover={{ y: -3, scale: 1.15 }} whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-slate-500 transition-colors hover:border-violet-500/30 hover:text-violet-300"
                >
                  <svg className="h-4 w-4" viewBox={vb} fill="currentColor" aria-hidden="true">
                    <path d={d} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — profile image */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(16px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.85, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[360px] flex-shrink-0 lg:max-w-[400px] xl:max-w-[440px]"
          >
            {/* Rotating conic ring */}
            <motion.div aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-18px] rounded-[3rem]"
              style={{
                background: "conic-gradient(from 0deg, transparent 55%, rgba(139,92,246,0.8) 72%, rgba(217,70,239,0.8) 84%, rgba(6,182,212,0.5) 92%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />
            {/* Counter-ring */}
            <motion.div aria-hidden="true"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] rounded-[3.5rem]"
              style={{
                background: "conic-gradient(from 180deg, transparent 72%, rgba(6,182,212,0.35) 87%, transparent 100%)",
              }}
            />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.1] shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
              <img
              src={profilePic}
                alt="Likhith Gowda — Frontend Developer"
                className="h-[420px] w-full object-cover object-top lg:h-[480px]"
              />
              {/* Vignette */}
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(8,12,20,0.65) 100%)" }}
              />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080c14] via-[#080c14]/30 to-transparent" />
            </div>

            {/* Stat chips — positioned inside the relative container so they don't get clipped */}
            <StatChip value="2+"  label="Years exp."   accent="text-violet-300"  className="-left-16 top-[8%]"   delay={1.5} />
            <StatChip value="17+" label="Projects"     accent="text-cyan-300"    className="-right-16 top-[40%]" delay={1.65}/>
            <StatChip value="100%" label="Satisfaction" accent="text-emerald-400" className="-left-16 bottom-[16%]" delay={1.8}/>

            {/* Company badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/[0.1] bg-[#080c14]/92 px-5 py-3 shadow-2xl backdrop-blur-md"
            >
              <p className="text-center text-sm font-semibold text-white">Dotxpertise</p>
              <p className="text-center text-[10px] text-slate-400 mt-0.5">Mysore · Nov 2025 – Present</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Tech marquee ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="relative mb-4 overflow-hidden border-t border-white/[0.05] py-5"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080c14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080c14] to-transparent" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8"
            style={{ width: "max-content" }}
          >
            {[...techPills, ...techPills].map((t, i) => (
              <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-[11px] font-medium text-slate-600">
                <span className="h-1 w-1 rounded-full bg-violet-500/60" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/[0.12] pt-1.5"
        >
          <motion.div
            animate={{ height: ["5px", "12px", "5px"], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 rounded-full bg-violet-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}    