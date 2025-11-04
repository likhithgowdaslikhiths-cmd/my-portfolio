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
  SiMysql ,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg"; // replace with your image

export default function About() {
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
    { icon: <SiMysql/>, name:"Mysql"},
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 py-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full -top-32 -left-32"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center 
                   bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
                     p-[3px] shadow-[0_0_30px_rgba(56,189,248,0.4)]"
        >
          <img
            src={profilePic}
            alt="Likhith Gowda"
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I’m <span className="text-cyan-400 font-semibold">Likhith Gowda</span>, a 
            <span className="text-cyan-400"> Front-End Developer</span> and 
            <span className="text-cyan-400"> Web Designer</span> from Mysore, India.
            With over a year of experience at{" "}
            <span className="text-cyan-400 font-medium">DotXpertise</span>, 
            I specialize in building responsive, high-performance websites 
            using <span className="text-cyan-400">React</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-400">WordPress</span>.
          </p>

          <p className="text-gray-400 text-base">
            My passion lies in creating interactive and visually engaging user
            interfaces that merge creativity with clean, maintainable code.
            I enjoy exploring modern libraries like{" "}
            <span className="text-cyan-400">Redux</span>,{" "}
            <span className="text-cyan-400">TypeScript</span>,{" "}
            <span className="text-cyan-400">Framer Motion</span>, and{" "}
            <span className="text-cyan-400">Flutter</span> to craft elegant, scalable web experiences.
          </p>

          <p className="mt-4 text-gray-400 text-base">
            My focus is on building visually delightful and user-friendly designs
            that perform seamlessly across devices.
          </p>
        </motion.div>
      </div>

      {/* Tech Stack with Hover Tooltips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-16 flex flex-wrap justify-center gap-8 text-5xl text-cyan-400"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            {tech.icon}
            <span
              className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 
                         text-sm bg-gray-800 text-gray-200 px-3 py-1 rounded-md 
                         opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap"
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
