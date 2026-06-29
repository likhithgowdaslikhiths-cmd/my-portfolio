import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Experience", "Projects", "Services", "Contact"];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0B1120] px-4 pt-16 pb-8 text-white sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top row */}
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_auto]">

          {/* Brand */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-white"
            >
              Likhith Gowda
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-1 text-sm text-violet-300"
            >
              Frontend Developer · Bangalore, India
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500"
            >
              Building production-grade React & Next.js experiences with scalable architecture, peak performance, and WCAG 2.1 accessibility.
            </motion.p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center gap-3"
            >
              {[
                { href: "https://github.com/likhithgowdaslikhiths-cmd", label: "GitHub",
                  icon: <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-1.93c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.96 10.96 0 0112 6.84c.97.004 1.95.13 2.87.38 2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55C20.21 21.43 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" />,
                  vb: "0 0 24 24" },
                { href: "https://www.linkedin.com/in/likhith-gowda-s-55a440278/", label: "LinkedIn",
                  icon: <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />,
                  vb: "0 0 24 24" },
                { href: "mailto:likhithgowdaslikhiths@gmail.com", label: "Email",
                  icon: <><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></>,
                  vb: "0 0 20 20" },
              ].map(({ href, label, icon, vb }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:border-violet-500/30 hover:text-violet-300"
                >
                  <svg className="h-3.5 w-3.5" viewBox={vb} fill="currentColor" aria-hidden="true">{icon}</svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact quick */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <div className="space-y-2.5">
              <a href="mailto:likhithgowdaslikhiths@gmail.com" className="block text-sm text-slate-400 transition-colors hover:text-white">
                likhithgowdas…@gmail.com
              </a>
              <a href="tel:+918088607922" className="block text-sm text-slate-400 transition-colors hover:text-white">
                +91 80886 07922
              </a>
              <p className="text-sm text-slate-500">Bangalore, Karnataka, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.05] pt-6">
          <p className="text-xs text-slate-600">
            © {year} Likhith Gowda S · Built with React, Tailwind CSS & Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:border-violet-500/30 hover:text-violet-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}