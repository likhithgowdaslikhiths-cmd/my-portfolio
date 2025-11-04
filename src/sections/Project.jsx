import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Certification Generation System",
      description:
        "A web app built using Java, PHP, and MySQL with dual interfaces for students and teachers. It automates certificate creation, manages student records, and securely generates PDFs.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      github:
        "https://github.com/likhithgowdaslikhiths-cmd/certification-generation-system",
      link: "#",
      details:
        "Includes role-based access control, data management, and PDF generation.",
    },
    {
      title: "E-Commerce Platform UI",
      description:
        "Fully responsive e-commerce front-end built with React and TypeScript. Optimized UI with reusable components and efficient state management.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      link: "#",
      details:
        "Focused on scalability, UX, and a responsive product grid layout.",
    },
    {
      title: "Rangayaana Acting School",
      description:
        "Designed a professional WordPress website for an acting school using the Choreo theme. Integrated media galleries and optimized performance.",
      tech: ["WordPress", "Elementor", "CSS", "SEO"],
      link: "https://rtm.org.in",
    },
    {
      title: "My Home Architect",
      description:
        "Developed a sleek architecture portfolio website with Elementor. Enhanced SEO, smooth navigation, and modern design.",
      tech: ["WordPress", "Elementor", "JavaScript"],
      link: "https://myhomearchitect.co.in/",
    },
    {
      title: "SLV Steel & Style Crafter",
      description:
        "Created a responsive product showcase site for a steel door dealership. Included inquiry forms and a professional gallery layout.",
      tech: ["WordPress", "Elementor", "Duroguard Theme"],
      link: "https://slvsteel.dotxpertise.com/",
    },
    {
      title: "Travel Vistha",
      description:
        "Built a travel agency website with interactive destination sections and SEO optimization for better reach.",
      tech: ["WordPress", "Elementor", "SEO"],
      link: "https://travelvistha.com/",
    },
    {
      title: "Vumax Eye Hospital",
      description:
        "Developed a healthcare website focused on patient services and appointment forms. Designed for accessibility and clean UI.",
      tech: ["WordPress", "Elementor", "Healthcare Theme", "CSS"],
      link: "https://vumaxeyehospital.com/",
    },
    {
      title: "Trendy Home Solutions",
      description:
        "A stylish website for an interior design and modular kitchen company. Responsive design and SEO-friendly layout.",
      tech: ["WordPress", "Elementor", "JavaScript", "CSS"],
      link: "https://trendyhomesolutionmysuru.com/",
    },
    {
      title: "Prayana Tours & Travels",
      description:
        "Travel portal with package listings, image gallery, and contact forms. Designed for mobile-first user experience.",
      tech: ["WordPress", "Astra Theme", "Elementor"],
      link: "https://prayanatoursandtravels.com/",
    },
    {
      title: "Architect Sharan",
      description:
        "Architecture portfolio website with project showcases and animations. Designed for visual storytelling.",
      tech: ["WordPress", "Elementor", "CSS"],
      link: "https://architectsharan.in/",
    },
    {
      title: "Shri Manjunatha Construction",
      description:
        "Professional business website for a construction company featuring services, projects, and responsive design.",
      tech: ["WordPress", "Elementor", "SEO"],
      link: "https://shrimanjunathaconstruction.in/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-cyan-500/10 blur-[200px] rounded-full top-0 left-0"
        animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col justify-between bg-gray-900/60 border border-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-lg
                       hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed text-center flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                >
                  <FaCode /> <span>Source</span>
                </a>
              )}
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                >
                  <FaExternalLinkAlt /> <span>Visit</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
