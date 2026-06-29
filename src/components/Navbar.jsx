import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home",       to: "hero"       },
  { name: "About",      to: "about"      },
  { name: "Experience", to: "experience" },
  { name: "Projects",   to: "projects"   },
  { name: "Services",   to: "services"   },
  { name: "Contact",    to: "contact"    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("hero");
  const [scrolled, setScrolled]       = useState(false);

  // Add shadow + blur intensity after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-4 top-4 z-50 mx-auto max-w-6xl rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 md:px-8 ${
          scrolled
            ? "border-white/[0.1] bg-[#0B1120]/90 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "border-white/[0.06] bg-[#0B1120]/60"
        }`}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="hero" smooth duration={600} className="flex cursor-pointer items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20">
              <span className="font-display text-sm font-bold text-violet-200">LG</span>
              {/* Active dot */}
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-[#0B1120] bg-emerald-400" />
            </div>
            <span className="hidden font-display text-sm font-semibold tracking-[0.12em] text-white/80 sm:block">
              LIKHITH
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    spy
                    offset={-90}
                    onSetActive={() => setActive(link.to)}
                    className="relative cursor-pointer"
                  >
                    <span
                      className={`block rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl border border-violet-500/25 bg-violet-500/15"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/Likhith_Gowda_frontend_developer.pdf"
              download
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-200 transition-colors hover:bg-violet-500/20 hover:text-white sm:block"
            >
              Download CV
            </motion.a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-colors hover:text-white md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[4.5rem] z-40 mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => {
                const isActive = activeSection === link.to;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      spy
                      offset={-90}
                      onSetActive={() => setActive(link.to)}
                      onClick={() => setMenuOpen(false)}
                      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "border border-violet-500/20 bg-violet-500/10 text-white"
                          : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile CV download */}
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <a
                href="/Likhith_Gowda_frontend_developer.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 text-sm font-semibold text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}