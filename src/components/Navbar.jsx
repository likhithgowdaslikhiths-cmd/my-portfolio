import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit backdrop-blur-md bg-gray-900/40 border border-gray-700 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] px-6 py-3 transition-all duration-500">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              spy={true} // 👈 enables scroll spy
              offset={-80} // 👈 adjusts highlight position
              onSetActive={() => setActiveSection(link.to)} // 👈 triggers active state
              className={`cursor-pointer text-lg font-medium transition-all ${
                activeSection === link.to
                  ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-cyan-400 text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-gray-900/95 border border-cyan-500/30 rounded-2xl backdrop-blur-md shadow-lg px-8 py-4">
          <ul className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer text-lg transition-all ${
                    activeSection === link.to
                      ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                      : "text-gray-300 hover:text-cyan-400"
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
