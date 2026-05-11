import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-cyan-400/20 bg-slate-950/50 px-6 py-3 backdrop-blur-3xl shadow-premium transition-all duration-500 md:px-10">
      <div className="flex items-center gap-4 text-sm uppercase tracking-[0.4em] text-cyan-300/80">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-lg text-cyan-200 shadow-glow">LG</span>
        <span className="font-semibold text-slate-100">Likhith</span>
      </div>

      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-90}
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer text-sm font-semibold tracking-[0.02em] transition-all ${
                activeSection === link.to
                  ? "text-cyan-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.5)]"
                  : "text-slate-300 hover:text-cyan-300"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-slate-300 text-2xl transition hover:text-cyan-300 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute inset-x-4 top-full mt-4 rounded-3xl border border-cyan-400/20 bg-slate-950/95 px-6 py-5 backdrop-blur-3xl shadow-glow md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-90}
                  onSetActive={() => setActiveSection(link.to)}
                  onClick={() => setMenuOpen(false)}
                  className={`block cursor-pointer text-base font-semibold transition-all ${
                    activeSection === link.to
                      ? "text-cyan-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
