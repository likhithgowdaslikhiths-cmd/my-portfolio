import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden 
                 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white"
    >
      {/* --- Dynamic Animated Background Glow --- */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.15),_transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* --- Floating Glow Orbs --- */}
      <motion.div
        className="absolute w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full top-20 left-10"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-600/10 blur-[150px] rounded-full bottom-20 right-10"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- Main Title --- */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                   bg-clip-text text-transparent animate-textShimmer drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
      >
        Hi, I’m Likhith Gowda 👋
      </motion.h1>

      {/* --- Typewriter Role Text --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-2xl md:text-3xl text-gray-300 z-10 font-light"
      >
        <Typewriter
          options={{
            strings: [
              "Front-End Developer 💻",
              "React & Tailwind Enthusiast ⚡",
              "Creative Web Designer 🎨",
              "Building Experiences that Inspire 🚀",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 40,
          }}
        />
      </motion.div>

      {/* --- Subtext or Tagline --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-gray-400 max-w-2xl text-lg"
      >
        I craft modern, responsive, and user-friendly digital experiences
        that blend clean design with powerful functionality.
      </motion.p>

      {/* --- CTA Buttons --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-8 flex flex-wrap gap-4 justify-center z-10"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg 
                     hover:bg-cyan-400 transition duration-300"
        >
          View My Work
        </a>
        <a
          href="/Likhith_Gowda_Web_Designer_Resume.pdf"
          download
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full 
                     hover:bg-cyan-400 hover:text-black transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
