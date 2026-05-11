import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Client Partner",
    feedback: "Likhith transformed our concept into a sleek digital product with exceptional attention to detail and intuitive UX.",
  },
  {
    name: "Design Lead",
    feedback: "Responsive, polished, and very professional. The final website felt premium and aligned with our brand instantly.",
  },
  {
    name: "Project Manager",
    feedback: "Delivered fast, communicated clearly, and optimized every page for a seamless experience across desktop and mobile.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Testimonials</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
            Trusted by modern projects.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 * index }}
              className="rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium"
            >
              <div className="flex items-center gap-3 text-cyan-300">
                <FaQuoteLeft className="text-xl" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-300 text-sm" />
                  ))}
                </div>
              </div>
              <p className="mt-6 text-slate-300 leading-relaxed">{item.feedback}</p>
              <p className="mt-6 font-semibold text-white">{item.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
