import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaWordpress,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiVite,
  SiFlutter,
  SiMysql,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg"; // replace with your image

const techStack = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">About</p>
            <h2 className="text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
              A modern designer with a developer mindset.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I’m <span className="font-semibold text-cyan-300">Likhith Gowda</span>, a Front-End Developer and Web Designer in Mysore, India. With over a year of experience at <span className="font-semibold text-cyan-300">DotXpertise</span>, I build premium websites that combine visual storytelling, performance, and strong brand identity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/80 p-6 shadow-glow">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Specialties</p>
                <p className="mt-3 text-lg font-semibold text-white">React, Tailwind, WordPress</p>
              </div>
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/80 p-6 shadow-glow">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Approach</p>
                <p className="mt-3 text-lg font-semibold text-white">Clean code, thoughtful design, scalable solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-[90px]" />
            <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-1 shadow-premium">
              <div className="rounded-[1.75rem] overflow-hidden bg-slate-900 px-6 py-6">
                <img src={profilePic} alt="Likhith Gowda" className="h-full w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-3xl border border-cyan-400/10 bg-slate-900/80 px-5 py-4 text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="text-2xl">{tech.icon}</div>
              <span className="font-medium text-slate-100">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
