import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-16 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.35em] text-cyan-300/80"
          >
            Professional Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl"
          >
            Experience & Impact
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-10 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-70" />

          <div className="space-y-14 pl-16">
            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-glow">
                <FaBriefcase size={22} />
              </div>
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">Senior role</p>
                <h3 className="text-2xl font-semibold text-white">SR Frontend Developer & IT Support — Worexa Technologies</h3>
                <p className="mt-2 text-sm text-slate-400">Bangalore | Jan 12, 2026 – Present</p>
                <ul className="mt-6 space-y-3 text-slate-300 leading-relaxed">
                  <li>Develop modern responsive web applications using React.js and Next.js.</li>
                  <li>Build scalable frontend architectures and reusable UI components.</li>
                  <li>Manage deployment, optimization, debugging, and production support.</li>
                  <li>Provide IT support and resolve technical issues across teams.</li>
                  <li>Collaborate to improve application performance and UI/UX quality.</li>
                </ul>
                <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-slate-900/80 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Projects</p>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    <li>Worexa Official Website — <a href="https://worexa.in/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">worexa.in</a></li>
                    <li>Maiora — <a href="https://maiora.worexa.in/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">maiora.worexa.in</a></li>
                    <li>Advocate Seva — <a href="https://advocateseva.com/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">advocateseva.com</a></li>
                  </ul>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 text-slate-950 shadow-glow">
                <FaBriefcase size={22} />
              </div>
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">Web Developer</p>
                <h3 className="text-2xl font-semibold text-white">Web Developer — Entellusco</h3>
                <p className="mt-2 text-sm text-slate-400">Bangalore | Nov 2025 – Jan 10, 2026</p>
                <ul className="mt-6 space-y-3 text-slate-300 leading-relaxed">
                  <li>Developed and deployed responsive websites from scratch to production.</li>
                  <li>Handled frontend development, UI implementation, deployment, optimization, and client requirements.</li>
                  <li>Built complete live production websites independently under tight timelines.</li>
                </ul>
                <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-slate-900/80 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Projects</p>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    <li>Cloude Enclosure — <a href="https://www.cloudenclosure.com/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">cloudenclosure.com</a></li>
                    <li>Balan Interior — <a href="https://balan.entellusco.com/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">balan.entellusco.com</a></li>
                    <li>SV Tour Bus Landing Page — <a href="https://www.svtoursbus.com/" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">svtoursbus.com</a></li>
                  </ul>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 shadow-glow">
                <FaGraduationCap size={22} />
              </div>
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">Academic</p>
                <h3 className="text-2xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
                <p className="mt-2 text-sm text-slate-400">SBRR Mahajana First Grade College — Mysore (2020 – 2023)</p>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Focused on web technologies, programming, and software development. Built applications and UI prototypes using React, WordPress, and MySQL.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 shadow-glow">
                <FaCertificate size={22} />
              </div>
              <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">Certifications</p>
                <ul className="space-y-3 text-slate-300 leading-relaxed">
                  <li>Full Stack Java Developer — Besant Technologies</li>
                  <li>Hands-on training in React.js, TypeScript, and RESTful APIs.</li>
                  <li>Proficient in Redux, Zustand, and Context API for state management.</li>
                </ul>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
