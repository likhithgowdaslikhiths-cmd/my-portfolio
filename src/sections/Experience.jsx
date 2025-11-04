import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow animation */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] bg-cyan-500/10 blur-[250px] rounded-full top-0 right-0"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
      >
        Experience & Education
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline */}
        <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>

        <div className="space-y-16">
          {/* Job Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-16"
          >
            <div className="absolute -left-[10px] flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 rounded-full shadow-lg shadow-cyan-500/30">
              <FaBriefcase size={20} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                Web Designer / Developer — DotXpertise
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Mysore, India | Oct 2024 – Present
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                <li>Designed and developed responsive, visually engaging websites using WordPress, HTML, CSS, and JavaScript.</li>
                <li>Boosted website traffic by 30% through UX optimization and SEO best practices.</li>
                <li>Customized layouts with Elementor and WPBakery, using Figma and Canva for modern visuals.</li>
                <li>Applied UI/UX and SEO principles to enhance engagement and performance.</li>
                <li>Developed Flutter-based login modules integrated with backend systems for seamless web–mobile flow.</li>
              </ul>
            </div>
          </motion.div>

          {/* Education - Degree */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pl-16"
          >
            <div className="absolute -left-[10px] flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 rounded-full shadow-lg shadow-blue-500/30">
              <FaGraduationCap size={20} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                SBRR Mahajana First Grade College — Mysore (2020 – 2023)
              </p>
              <p className="text-gray-300 leading-relaxed">
                Focused on web technologies, programming, and software development.
                Built academic-level applications and UI prototypes using React, WordPress, and MySQL.
              </p>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative pl-16"
          >
            <div className="absolute -left-[10px] flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 text-gray-900 rounded-full shadow-lg shadow-cyan-400/30">
              <FaCertificate size={20} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                Certifications & Awards
              </h3>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-2">
                <li>Full Stack Java Developer — Besant Technologies</li>
                <li>Hands-on training in React.js, TypeScript, and RESTful APIs.</li>
                <li>Proficient in Redux, Zustand, and Context API for state management.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
