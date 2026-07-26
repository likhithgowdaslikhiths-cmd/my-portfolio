import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// ── Animated number ───────────────────────────────────────────────────────────
function AnimNum({ value, label, accent }) {
  return (
    <div className="flex flex-col gap-1">
      <span className={`font-display text-3xl font-black tracking-tight ${accent}`}>{value}</span>
      <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500 leading-tight">{label}</span>
    </div>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────
function SectionEyebrow({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
      <p className="text-xs uppercase tracking-[0.35em] text-violet-400/80">{text}</p>
    </motion.div>
  );
}

// ── Tech tag ──────────────────────────────────────────────────────────────────
const Tag = ({ label }) => (
  <span className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-400">
    {label}
  </span>
);

// ── Live project pill ─────────────────────────────────────────────────────────
const LiveLink = ({ name, url, accent }) => (
  <a
    href={url} target="_blank" rel="noopener noreferrer"
    className={`group flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition-all ${accent}`}
  >
    {name}
    <FaExternalLinkAlt className="text-[9px] opacity-40 group-hover:opacity-80 transition-opacity" />
  </a>
);

export default function Experience() {
  const worexa = [
    { v: "+25%", l: "Lighthouse score",    c: "text-violet-300" },
    { v: "30%",  l: "Dev effort saved",    c: "text-cyan-300"   },
    { v: "35%",  l: "Load time cut",       c: "text-fuchsia-300"},
    { v: "100%", l: "Client satisfaction", c: "text-emerald-400"},
  ];

  const dotx = [
    { v: "15+",  l: "Sites delivered",   c: "text-cyan-300"   },
    { v: "+30%", l: "Organic traffic",   c: "text-violet-300" },
    { v: "+25%", l: "Satisfaction lift", c: "text-fuchsia-300"},
    { v: "-18%", l: "Bounce rate",       c: "text-emerald-400"},
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080c14] px-4 py-24 text-white sm:px-8 lg:py-32"
      aria-label="Experience"
    >
      {/* Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-900/25 blur-[160px]" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-900/15 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        <SectionEyebrow text="Professional Journey" />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mb-16 font-display text-5xl font-black tracking-[-0.04em] md:text-6xl lg:text-7xl"
        >
          Where I've{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            worked.
          </span>
        </motion.h2>

        {/* ══ WOREXA — CURRENT ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0f1623] p-8 md:p-10"
        >
          {/* Accent bar */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-[2rem] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500/0" />

          {/* Inner glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[80px] transition-opacity duration-500 group-hover:opacity-150" />

          {/* Top row */}
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4 pl-2">
            <div>
              {/* Company + active badge */}
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-black text-white md:text-3xl">
                  Dotxpertise
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Current
                </span>
              </div>
              <p className="text-base font-semibold text-violet-300">
                Senior Frontend Developer & IT Support
              </p>
              <p className="mt-1 text-sm text-slate-500">Mysore · Nov 2025 – Present</p>
            </div>
            <span className="rounded-2xl border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-xs font-medium text-violet-300">
              React.js · Next.js · TypeScript
            </span>
          </div>

          {/* Metrics row */}
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5 sm:grid-cols-4 pl-2">
            {worexa.map(({ v, l, c }) => (
              <AnimNum key={l} value={v} label={l} accent={c} />
            ))}
          </div>

          {/* Two-col: bullets + sidebar */}
          <div className="grid gap-8 pl-2 lg:grid-cols-[1fr_220px]">
            <ul className="space-y-3">
              {[
                "Architect and build responsive, component-based web apps with React.js and Next.js for production dashboards and client portals.",
                "Built reusable UI component library — cut development effort by 30% across parallel projects.",
                "Integrated RESTful APIs and third-party services for real-time data synchronisation across the UI.",
                "Led performance optimisation (lazy loading, code splitting, image compression) — Lighthouse scores up 25%+.",
                "Own end-to-end deployments via Git/GitHub & Vercel with zero-downtime releases; enforce WCAG 2.1 & OWASP standards.",
                "Independently designed, built & deployed 3 production websites — 100% client satisfaction.",
                "Reduced load times by 35% through asset optimisation and efficient CSS architecture.",
              ].map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  {pt}
                </motion.li>
              ))}
            </ul>

            {/* Right sidebar */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-600">Tech stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["HTML5","CSS3","JavaScript","React.js","Next.js","TypeScript","REST API","Git","Vercel","WCAG 2.1","Agile"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Live projects */}
          <div className="mt-8 border-t border-white/[0.05] pt-6 pl-2">
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-slate-600">Live projects shipped</p>
            <div className="flex flex-wrap gap-2">
              <LiveLink name="Worexa Official" url="https://worexa.in/"        accent="border-violet-500/20 bg-violet-500/5 text-violet-300 hover:border-violet-400/40 hover:bg-violet-500/10" />
              <LiveLink name="Maiora"          url="https://maiora.worexa.in/" accent="border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-300 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10" />
              <LiveLink name="Advocate Seva"   url="https://advocateseva.com/" accent="border-cyan-500/20 bg-cyan-500/5 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10" />
            </div>
          </div>
        </motion.div>

        {/* ══ DOTXPERTISE ═════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0f1623] p-8 md:p-10"
        >
          {/* Accent bar */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-[2rem] bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500/0" />

          <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-600/10 blur-[70px]" />

          {/* Top row */}
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4 pl-2">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-black text-white md:text-3xl">DotXpertise</span>
                <span className="rounded-full border border-slate-600/40 bg-slate-700/20 px-3 py-1 text-[10px] font-medium text-slate-400">
                  Previous
                </span>
              </div>
              <p className="text-base font-semibold text-cyan-300">Web Designer / Developer</p>
              <p className="mt-1 text-sm text-slate-500">Mysore · Oct 2024 – Nov 2025</p>
            </div>
            <span className="rounded-2xl border border-cyan-500/20 bg-cyan-500/8 px-4 py-2 text-xs font-medium text-cyan-300">
              WordPress · Figma · SEO
            </span>
          </div>

          {/* Metrics row */}
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5 sm:grid-cols-4 pl-2">
            {dotx.map(({ v, l, c }) => (
              <AnimNum key={l} value={v} label={l} accent={c} />
            ))}
          </div>

          <div className="grid gap-8 pl-2 lg:grid-cols-[1fr_220px]">
            <ul className="space-y-3">
              {[
                "Delivered 15+ responsive, SEO-optimised websites — drove 30% average increase in organic client traffic.",
                "Improved UI/UX consistency, lifting user satisfaction scores by 25% and cutting bounce rates by 18%.",
                "Streamlined design-to-dev handoffs using Figma, cutting iteration cycles by 30%; integrated backend APIs for cross-device consistency.",
                "Ensured WCAG 2.1-compliant designs; managed error-free deployments via Git and Vercel.",
              ].map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45 }}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                  {pt}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-600">Tech stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["WordPress","HTML5","CSS3","JavaScript","jQuery","Figma","Git","Vercel","SEO","Google Analytics"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══ EDUCATION + CERT — side by side ════════════════ */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0f1623] p-7"
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-[2rem] bg-gradient-to-b from-emerald-500 to-emerald-500/0" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-emerald-600/10 blur-[60px]" />

            <div className="pl-2">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-base">🎓</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-400">Education</span>
              </div>
              <h3 className="font-display text-xl font-black text-white">Bachelor of Computer Applications</h3>
              <p className="mt-1.5 text-sm font-semibold text-emerald-300">SBRR Mahajana First Grade College</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-slate-500">Mysore, Karnataka</span>
                <span className="h-px w-4 bg-slate-700" />
                <span className="text-xs text-slate-500">2020 – 2023</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Focused on web technologies, programming & software development. Built full-stack prototypes using React, WordPress, and MySQL.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Web Technologies", "Programming", "React", "MySQL", "Software Dev"].map((s) => (
                  <span key={s} className="rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-1 text-[10px] font-medium text-emerald-300/80">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0f1623] p-7"
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-[2rem] bg-gradient-to-b from-amber-500 to-amber-500/0" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-amber-600/10 blur-[60px]" />

            <div className="pl-2">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-base">🏆</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-amber-400">Certification</span>
              </div>
              <h3 className="font-display text-xl font-black text-white">Full Stack Java Developer</h3>
              <p className="mt-1.5 text-sm font-semibold text-amber-300">Besant Technologies</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Hands-on training in React.js, TypeScript, RESTful APIs, Redux, Zustand, Recoil, React Query, and Context API for production-grade state management.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["React.js", "TypeScript", "REST APIs", "Redux", "Zustand", "Recoil", "React Query", "Context API"].map((s) => (
                  <span key={s} className="rounded-lg border border-amber-500/15 bg-amber-500/5 px-2.5 py-1 text-[10px] font-medium text-amber-300/80">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}