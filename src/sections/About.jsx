import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
  FaWordpress, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiVite,
  SiMysql, SiGraphql, SiVercel,
  SiBootstrap, SiSass, SiJest,
  SiWebpack, SiPostman,
} from "react-icons/si";

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 50;
    const inc = to / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Bento card ────────────────────────────────────────────────────────────────
const BentoCard = ({ children, className = "", delay = 0, hover = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    className={`relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#111827] ${className}`}
  >
    {children}
  </motion.div>
);

// ── Tech chip ─────────────────────────────────────────────────────────────────
function TechChip({ icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.06 }}
      transition={{ duration: 0.15 }}
      className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2 transition-colors hover:border-violet-500/25 hover:bg-white/[0.06]"
    >
      <span className="text-base leading-none">{icon}</span>
      <span className="text-xs font-medium text-slate-300 whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

// ── Experience timeline item ──────────────────────────────────────────────────
function TimelineItem({ role, company, period, location, points, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55 }}
      className="relative pl-6"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/[0.05] to-transparent" />
      {/* Dot */}
      <div className={`absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full border-2 ${accent} bg-[#111827]`} />

      <div className="mb-1 flex flex-wrap items-center gap-2">
        <p className="font-display text-base font-bold text-white">{role}</p>
        <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-400">{period}</span>
      </div>
      <p className="text-sm font-medium text-violet-300 mb-3">{company} · {location}</p>
      <ul className="space-y-1.5">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400/60" />
            {pt}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const techGroups = [
  {
    label: "Core", accent: "text-violet-300", border: "border-violet-500/20", bg: "bg-violet-500/10",
    techs: [
      { icon: <FaHtml5 className="text-orange-400" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    ],
  },
  {
    label: "Frameworks", accent: "text-cyan-300", border: "border-cyan-500/20", bg: "bg-cyan-500/10",
    techs: [
      { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
      { icon: <span className="text-white text-xs font-bold">N</span>, name: "Next.js" },
      { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
      { icon: <span className="text-blue-300 text-xs font-bold">Zus</span>, name: "Zustand" },
    ],
  },
  {
    label: "Styling", accent: "text-fuchsia-300", border: "border-fuchsia-500/20", bg: "bg-fuchsia-500/10",
    techs: [
      { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
      { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
      { icon: <SiSass className="text-pink-400" />, name: "SCSS" },
    ],
  },
  {
    label: "APIs & Data", accent: "text-emerald-300", border: "border-emerald-500/20", bg: "bg-emerald-500/10",
    techs: [
      { icon: <SiGraphql className="text-pink-500" />, name: "GraphQL" },
      { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
    ],
  },
  {
    label: "Tooling", accent: "text-amber-300", border: "border-amber-500/20", bg: "bg-amber-500/10",
    techs: [
      { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
      { icon: <SiVercel className="text-white" />, name: "Vercel" },
      { icon: <SiVite className="text-violet-400" />, name: "Vite" },
      { icon: <SiWebpack className="text-blue-400" />, name: "Webpack" },
    ],
  },
  {
    label: "Testing & Design", accent: "text-rose-300", border: "border-rose-500/20", bg: "bg-rose-500/10",
    techs: [
      { icon: <SiJest className="text-red-400" />, name: "Jest" },
      { icon: <span className="text-emerald-400 text-xs font-bold">cy</span>, name: "Cypress" },
      { icon: <FaFigma className="text-purple-400" />, name: "Figma" },
      { icon: <FaWordpress className="text-blue-300" />, name: "WordPress" },
    ],
  },
];

const metrics = [
  { to: 17,  suffix: "+", label: "Projects delivered",      accent: "text-violet-300" },
  { to: 15,  suffix: "+", label: "Websites shipped",        accent: "text-cyan-300"   },
  { to: 100, suffix: "%", label: "Client satisfaction",     accent: "text-emerald-400"},
  { to: 30,  suffix: "%", label: "Dev effort saved via lib",accent: "text-fuchsia-300"},
];

const experiences = [
  {
    role: "Senior Frontend Developer & IT Support",
    company: "DotXpertise",
    location: "Mysore",
    period: "Nov 2025 – Present",
    accent: "border-violet-400",
    points: [
      "Architect React.js & Next.js component-based apps used in production dashboards and client portals.",
      "Built reusable UI component library cut development effort by 30% across parallel projects.",
      "Led performance optimisation (lazy loading, code splitting, image compression) Lighthouse +25%.",
      "Independently designed, built & deployed 3 production websites end-to-end with 100% client satisfaction.",
    ],
  },
  {
    role: "Web Designer / Developer",
    company: "DotXpertise",
    location: "Mysore",
    period: "Oct 2024 – Nov 2025",
    accent: "border-cyan-400",
    points: [
      "Delivered 15+ responsive, SEO-optimised websites drove 30% avg increase in organic client traffic.",
      "Improved UI/UX consistency lifted satisfaction scores by 25% and cut bounce rates by 18%.",
      "Streamlined design-to-dev handoffs with Figma cut iteration cycles by 30%.",
    ],
  },
];

// ── Main component ────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1120] px-4 py-24 text-white sm:px-6 lg:py-32"
      aria-label="About"
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-700/15 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-4">

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400/80">About Me</p>
        </motion.div>

        {/* ══ BENTO GRID ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">

          {/* [A] BIO — col 8 */}
          <BentoCard delay={0.05} hover={false} className="lg:col-span-8 p-8 md:p-10">
            <div aria-hidden="true" className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-600/10 blur-[70px]" />
            <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
              Building interfaces that{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                perform & impress.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-slate-400 md:text-lg">
              I'm{" "}
              <span className="font-semibold text-white">Likhith Gowda</span>, a
              Frontend Developer based in{" "}
              <span className="font-semibold text-violet-300">Bangalore, India</span>{" "}
              with 2+ years building production-grade web apps. At{" "}
              <span className="font-semibold text-white">Dotxpertise</span>{" "}
              I architect scalable React/Next.js systems, own end-to-end deployments,
              and consistently ship measurable performance wins comfortable taking
              a feature from blank canvas to zero-downtime release.
            </p>
            {/* Trait pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "WCAG 2.1 Accessible",    cls: "border-violet-500/20 bg-violet-500/10 text-violet-300"  },
                { label: "Agile & Cross-functional",cls: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"        },
                { label: "Performance-first",       cls: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"},
                { label: "Design-to-code Expert",   cls: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300"},
              ].map(({ label, cls }) => (
                <span key={label} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${cls}`}>{label}</span>
              ))}
            </div>
          </BentoCard>

          {/* [B] QUICK FACTS — col 4 */}
          <BentoCard delay={0.12} className="lg:col-span-4 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Quick facts</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Role",          value: "Senior Frontend Dev",      sub: "Dotxpertise"        },
                { label: "Stack",         value: "React · Next.js · TS",     sub: "2+ yrs production"          },
                { label: "Education",     value: "BCA",                      sub: "SBRR Mahajana, 2020–2023"   },
                { label: "Cert",          value: "Full Stack Java",           sub: "Besant Technologies"        },
                { label: "Location",      value: "Bangalore, India",          sub: "+91-8088607922"             },
              ].map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3.5 py-2.5"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 shrink-0 pt-0.5">{label}</p>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-white">{value}</p>
                    <p className="text-[10px] text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* [C] METRICS — col 12 full width */}
          <BentoCard delay={0.18} hover={false} className="lg:col-span-12 p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6">Impact by numbers</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map(({ to, suffix, label, accent }) => (
                <div key={label} className="group flex flex-col gap-2 rounded-2xl border border-white/[0.05] bg-white/[0.025] p-5 transition-colors hover:border-violet-500/20 hover:bg-white/[0.04]">
                  <span className={`font-display text-4xl font-bold ${accent}`}>
                    <Counter to={to} suffix={suffix} />
                  </span>
                  <span className="text-xs leading-tight text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* [D] EXPERIENCE TIMELINE — col 7 */}
          <BentoCard delay={0.22} hover={false} className="lg:col-span-7 p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-8">Work experience</p>
            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.company} {...exp} delay={0.25 + i * 0.1} />
              ))}
            </div>
          </BentoCard>

          {/* [E] ACHIEVEMENTS — col 5 */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {[
              { icon: "⚡", title: "Lighthouse +25%", sub: "Lazy loading, code splitting & image compression across production dashboards.", accent: "border-violet-500/20 bg-violet-500/[0.07]", val: "text-violet-300" },
              { icon: "🧩", title: "30% less dev effort", sub: "Reusable UI component library built at Worexa — used across all parallel projects.", accent: "border-cyan-500/20 bg-cyan-500/[0.07]", val: "text-cyan-300" },
              { icon: "📉", title: "35% faster load", sub: "Asset optimisation, efficient CSS architecture & lazy loading across all 3 production sites.", accent: "border-emerald-500/20 bg-emerald-500/[0.07]", val: "text-emerald-300" },
              { icon: "🌐", title: "+30% organic traffic", sub: "SEO-optimised websites at DotXpertise drove measurable client traffic growth.", accent: "border-fuchsia-500/20 bg-fuchsia-500/[0.07]", val: "text-fuchsia-300" },
            ].map(({ icon, title, sub, accent, val }, i) => (
              <BentoCard key={title} delay={0.28 + i * 0.07} className={`p-5 border ${accent}`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
                  <div>
                    <p className={`font-display text-sm font-bold ${val}`}>{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{sub}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* [F] TECH STACK — col 12 full width */}
          <BentoCard delay={0.35} hover={false} className="lg:col-span-12 p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6">Technical stack</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {techGroups.map(({ label, accent, border, bg, techs }, gi) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.38 + gi * 0.06, duration: 0.45 }}
                  className="space-y-3"
                >
                  <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] ${accent} ${border} ${bg}`}>
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((t) => (
                      <TechChip key={t.name} icon={t.icon} name={t.name} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}