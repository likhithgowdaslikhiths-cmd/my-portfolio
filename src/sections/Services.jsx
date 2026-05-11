import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Web Development",
    description: "High-performance React and WordPress experiences with pixel-perfect UI and seamless interactions.",
  },
  {
    icon: <FaPalette className="text-3xl" />,
    title: "UI / UX Design",
    description: "Premium visual systems, brand-forward layouts, and modern design refinements for every screen.",
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: "Performance Optimization",
    description: "Fast-loading web experiences with responsive architecture, SEO best practices, and polished delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Services</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
            What I deliver.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300 shadow-glow">
                {service.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
