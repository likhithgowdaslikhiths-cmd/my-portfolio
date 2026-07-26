import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const featured = [
  {
    title: "E-Commerce Platform",
    period: "Dec 2024 – Feb 2025",
    description: "High-performance React.js & TypeScript e-commerce frontend with scalable component architecture, centralised state management for cart/checkout, and 22% higher conversion rate through usability testing.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
    impact: ["+30% page speed", "+22% conversion", "WCAG 2.1"],
    github: "#",
    link: "#",
    accent: "violet",
  },
  {
    title: "Certification Generation System",
    period: "Sep 2024 – Oct 2024",
    description: "Dual-interface web app with role-based access (Student / Teacher) automating certificate generation end-to-end. Integrated PDF generation, download, and optimised SQL queries.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    impact: ["+70% issuance speed", "-40% errors", "-35% DB latency"],
    github: "https://github.com/likhithgowdaslikhiths-cmd/certification-generation-system",
    link: "#",
    accent: "cyan",
  },
];

const shipped = [
  // { name: "Worexa Official",       url: "https://worexa.in/",                    tech: ["React.js", "Next.js"],         accent: "violet" },
  // { name: "Maiora",                url: "https://maiora.worexa.in/",             tech: ["React.js", "Tailwind"],         accent: "fuchsia"},
  { name: "Advocate Seva",         url: "https://advocateseva.com/",             tech: ["React.js", "Vercel"],           accent: "cyan"   },
  { name: "Cloud Enclosure",       url: "https://www.cloudenclosure.com/",       tech: ["React.js", "HTML", "CSS", "JavaScript"],    accent: "emerald"},
  { name: "Balan Interior",        url: "https://balan.entellusco.com/",         tech: ["WordPress", "Elementor"],       accent: "amber"  },
  { name: "Rangayaana School",     url: "https://rtm.org.in",                    tech: ["WordPress", "SEO"],             accent: "violet" },
  { name: "My Home Architect",     url: "https://myhomearchitect.co.in/",        tech: ["WordPress", "Elementor"],       accent: "cyan"   },
  { name: "SLV Steel & Style",     url: "https://slvsteel.dotxpertise.com/",     tech: ["WordPress", "CSS"],             accent: "fuchsia"},
  { name: "Travel Vistha",         url: "https://travelvistha.com/",             tech: ["WordPress", "SEO"],             accent: "emerald"},
  { name: "Vumax Eye Hospital",    url: "https://vumaxeyehospital.com/",         tech: ["WordPress", "CSS"],             accent: "amber"  },
  { name: "Trendy Home Solutions", url: "https://trendyhomesolutionmysuru.com/", tech: ["WordPress", "JavaScript"],      accent: "violet" },
  { name: "Prayana Tours",         url: "https://prayanatoursandtravels.com/",   tech: ["WordPress", "Astra"],           accent: "cyan"   },
];

const accentMap = {
  violet:  { border: "border-violet-500/20",  bg: "bg-violet-500/10",  text: "text-violet-300",  dot: "bg-violet-400"  },
  cyan:    { border: "border-cyan-500/20",    bg: "bg-cyan-500/10",    text: "text-cyan-300",    dot: "bg-cyan-400"    },
  fuchsia: { border: "border-fuchsia-500/20", bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", dot: "bg-fuchsia-400" },
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-300", dot: "bg-emerald-400" },
  amber:   { border: "border-amber-500/20",   bg: "bg-amber-500/10",   text: "text-amber-300",   dot: "bg-amber-400"   },
};

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

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B1120] px-4 py-24 text-white sm:px-6 lg:py-32"
      aria-label="Projects"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-96 w-96 rounded-full bg-violet-700/15 blur-[140px]" />
        <div className="absolute right-0 bottom-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400/80">Case Studies</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* ── Featured — large bento cards ─────────────────── */}
        <div className="mb-4 grid gap-4 lg:grid-cols-2">
          {featured.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <BentoCard key={p.title} delay={0.06 * i} hover={false} className="p-8">
                <div aria-hidden="true" className={`absolute -top-20 -right-20 h-56 w-56 rounded-full blur-[80px] ${a.bg}`} />

                {/* Header */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-[10px] uppercase tracking-[0.28em] font-medium ${a.text}`}>Featured Project</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{p.period}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {p.github && p.github !== "#" && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="Source code"
                        className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:text-white">
                        <FaCode className="text-xs" />
                      </a>
                    )}
                    {p.link && p.link !== "#" && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                        className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:text-white">
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-slate-400">{p.description}</p>

                {/* Impact chips */}
                <div className={`mb-5 flex flex-wrap gap-2 rounded-2xl border p-3 ${a.border} ${a.bg}`}>
                  {p.impact.map((imp) => (
                    <span key={imp} className={`text-xs font-semibold ${a.text}`}>{imp}</span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-400">{t}</span>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </div>

        {/* ── Shipped websites grid ─────────────────────────── */}
        <BentoCard delay={0.2} hover={false} className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Shipped websites · 17+ delivered</p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-emerald-300 font-medium">All live</span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shipped.map((site, i) => {
              const a = accentMap[site.accent];
              return (
                <motion.a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22 + i * 0.04, duration: 0.35 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5 transition-all hover:border-white/[0.12] hover:bg-white/[0.05]"
                >
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-white">{site.name}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {site.tech.map((t) => (
                        <span key={t} className={`text-[9px] font-medium ${a.text}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <FaExternalLinkAlt className="text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors shrink-0 ml-2" />
                </motion.a>
              );
            })}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}