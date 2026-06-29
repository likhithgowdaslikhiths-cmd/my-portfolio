import { motion } from "framer-motion";

const services = [
  {
    icon: "⚛️",
    title: "React & Next.js Development",
    description: "Production-grade component-based web apps with scalable architecture, state management (Redux, Zustand, Recoil), and GraphQL/REST API integration.",
    tags: ["React.js", "Next.js", "TypeScript", "Redux"],
    accent: "violet",
    metric: "3 apps shipped end-to-end",
  },
  {
    icon: "🎨",
    title: "UI / UX Design & Implementation",
    description: "Pixel-perfect, responsive layouts matched to brand guidelines. Design-to-code handoffs via Figma. Glassmorphism, animations, and premium component libraries.",
    tags: ["Figma", "Tailwind CSS", "Framer Motion", "SCSS"],
    accent: "fuchsia",
    metric: "25% UX satisfaction lift",
  },
  {
    icon: "⚡",
    title: "Performance Optimisation",
    description: "Lazy loading, code splitting, image compression, bundle optimisation, and Lighthouse audits to ensure fast, high-scoring web experiences.",
    tags: ["Lighthouse", "Vite", "Webpack", "Web Vitals"],
    accent: "cyan",
    metric: "+25% Lighthouse score",
  },
  {
    icon: "♿",
    title: "Accessibility & Standards",
    description: "WCAG 2.1-compliant UI with ARIA attributes, keyboard navigation, screen-reader testing, and cross-browser compatibility across all builds.",
    tags: ["WCAG 2.1", "ARIA", "Keyboard Nav", "Testing"],
    accent: "emerald",
    metric: "100% accessibility pass rate",
  },
  {
    icon: "🚀",
    title: "Deployment & DevOps",
    description: "Zero-downtime releases via Git, GitHub Actions, and Vercel. CI/CD pipelines, OWASP security practices, domain config, and post-launch monitoring.",
    tags: ["Vercel", "GitHub Actions", "CI/CD", "Git"],
    accent: "amber",
    metric: "Zero-downtime deploys",
  },
  {
    icon: "🌐",
    title: "WordPress & SEO",
    description: "SEO-optimised WordPress sites with Elementor, technical SEO, Google Analytics, and content strategy — proven to drive organic traffic growth.",
    tags: ["WordPress", "Elementor", "SEO", "Analytics"],
    accent: "rose",
    metric: "+30% organic traffic",
  },
];

const accentMap = {
  violet:  { border: "border-violet-500/20", bg: "bg-violet-500/10", text: "text-violet-300", glow: "bg-violet-600/10" },
  fuchsia: { border: "border-fuchsia-500/20",bg: "bg-fuchsia-500/10",text: "text-fuchsia-300",glow: "bg-fuchsia-600/10"},
  cyan:    { border: "border-cyan-500/20",   bg: "bg-cyan-500/10",   text: "text-cyan-300",   glow: "bg-cyan-600/10"  },
  emerald: { border: "border-emerald-500/20",bg: "bg-emerald-500/10",text: "text-emerald-300",glow: "bg-emerald-600/10"},
  amber:   { border: "border-amber-500/20",  bg: "bg-amber-500/10",  text: "text-amber-300",  glow: "bg-amber-600/10" },
  rose:    { border: "border-rose-500/20",   bg: "bg-rose-500/10",   text: "text-rose-300",   glow: "bg-rose-600/10"  },
};

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#111827] ${className}`}
  >
    {children}
  </motion.div>
);

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1120] px-4 py-24 text-white sm:px-6 lg:py-32"
      aria-label="Services"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-violet-700/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400/80">What I Deliver</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl"
        >
          Services &{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <BentoCard key={s.title} delay={0.06 * i} className="p-6 md:p-7">
                <div aria-hidden="true" className={`absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px] ${a.glow}`} />

                {/* Icon + metric */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${a.bg}`}>
                    {s.icon}
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${a.border} ${a.bg} ${a.text}`}>
                    {s.metric}
                  </span>
                </div>

                <h3 className="mb-2.5 font-display text-base font-bold text-white">{s.title}</h3>
                <p className="mb-5 text-xs leading-relaxed text-slate-400">{s.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}