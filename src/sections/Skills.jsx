import { useMemo } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 84 },
      { name: "HTML & CSS", level: 96 },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "Figma", level: 82 },
      { name: "WordPress", level: 88 },
      { name: "Git", level: 86 },
      { name: "Elementor", level: 90 },
    ],
  },
];

export default function Skills() {
  const groups = useMemo(() => skillGroups, []);

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 text-white lg:py-28">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Core Skills</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
            Technical mastery with design sensibility.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6 rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-premium"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{skill.name}</span>
                      <span className="font-semibold text-white">{skill.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-900">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
