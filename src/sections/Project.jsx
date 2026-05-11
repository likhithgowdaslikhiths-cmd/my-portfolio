import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Certification Generation System",
    description:
      "A web app built using Java, PHP, and MySQL with dual interfaces for students and teachers. It automates certificate creation, manages student records, and generates PDFs securely.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github:
      "https://github.com/likhithgowdaslikhiths-cmd/certification-generation-system",
    link: "#",
  },
  {
    title: "E-Commerce Platform UI",
    description:
      "Responsive React + TypeScript UI built with reusable components and modern animations for a premium shopping experience.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    link: "#",
  },
  {
    title: "Rangayaana Acting School",
    description:
      "Designed a professional WordPress site with rich media galleries and polished brand storytelling using the Choreo theme.",
    tech: ["WordPress", "Elementor", "CSS", "SEO"],
    link: "https://rtm.org.in",
  },
  {
    title: "My Home Architect",
    description:
      "Crafted an elegant architecture portfolio website with smooth navigation, SEO improvements, and responsive design.",
    tech: ["WordPress", "Elementor", "JavaScript"],
    link: "https://myhomearchitect.co.in/",
  },
  {
    title: "SLV Steel & Style Crafter",
    description:
      "Built a refined product showcase for a steel door dealership with a conversion-focused inquiry system.",
    tech: ["WordPress", "Elementor", "Duroguard Theme"],
    link: "https://slvsteel.dotxpertise.com/",
  },
  {
    title: "Travel Vistha",
    description:
      "Created a travel agency website with destination guides, eye-catching imagery, and better search visibility.",
    tech: ["WordPress", "Elementor", "SEO"],
    link: "https://travelvistha.com/",
  },
  {
    title: "Vumax Eye Hospital",
    description:
      "Delivered a patient-focused healthcare website designed for accessibility, appointment booking, and clear service pathways.",
    tech: ["WordPress", "Elementor", "Healthcare Theme", "CSS"],
    link: "https://vumaxeyehospital.com/",
  },
  {
    title: "Trendy Home Solutions",
    description:
      "Developed a high-end interior design site with modern UI, responsive layouts, and polished brand presentation.",
    tech: ["WordPress", "Elementor", "JavaScript", "CSS"],
    link: "https://trendyhomesolutionmysuru.com/",
  },
  {
    title: "Prayana Tours & Travels",
    description:
      "Built a travel portal with package listings, image gallery, and booking-first user experience.",
    tech: ["WordPress", "Astra Theme", "Elementor"],
    link: "https://prayanatoursandtravels.com/",
  },
  {
    title: "Architect Sharan",
    description:
      "Created an architecture portfolio website focused on visual storytelling and project highlights.",
    tech: ["WordPress", "Elementor", "CSS"],
    link: "https://architectsharan.in/",
  },
  {
    title: "Shri Manjunatha Construction",
    description:
      "Designed a professional construction company website with services, portfolio, and client trust signals.",
    tech: ["WordPress", "Elementor", "SEO"],
    link: "https://shrimanjunathaconstruction.in/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-24 h-80 w-80 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Case Studies</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.06 }}
              className="group flex min-h-[22rem] flex-col justify-between rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Project</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-cyan-200">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-cyan-400"
                    >
                      <FaCode /> Source
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-cyan-400"
                    >
                      <FaExternalLinkAlt /> Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
