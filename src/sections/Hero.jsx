import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-28 text-white lg:pt-32">
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200/90 backdrop-blur-xl">
            Futuristic • Premium • Interactive
          </span>

          <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text md:text-6xl lg:text-7xl">
            Hi, I’m <span className="block">Likhith Gowda.</span>
          </h1>

          <div className="space-y-4 text-slate-300">
            <p className="text-xl leading-relaxed md:text-2xl">
              I design and build premium digital experiences that merge modern UI, sleek performance, and unmistakable brand presence.
            </p>
            <p className="text-base text-slate-400 md:text-lg">
              My work is crafted for startups, agencies, and ambitious brands who want a bold, futuristic web presence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-glow transition-transform duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="/Likhith_Gowda_Web_Designer_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 px-8 py-3 text-base font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-500/10 hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-950/70 p-6 shadow-premium backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Design led development</p>
              <h2 className="text-3xl font-semibold text-white">Experience crafted for modern brands.</h2>
            </div>
            <div className="rounded-3xl bg-slate-900/90 px-4 py-3 text-right shadow-glow">
              <p className="text-sm text-slate-400">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-cyan-300">Web Design & Front-End</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Role</p>
              <p className="mt-3 text-xl font-semibold text-white">Front-End Developer</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
              <p className="mt-3 text-xl font-semibold text-white">Mysore, India</p>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-b from-slate-950/70 to-slate-900/60 p-6 shadow-[0_35px_120px_rgba(56,189,248,0.08)]">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Projects</p>
                <p className="text-2xl font-semibold text-white">17+</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experience</p>
                <p className="text-2xl font-semibold text-white">1+ Years</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Focus</p>
                <p className="text-2xl font-semibold text-white">Premium UX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
