import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck } from "react-icons/fa";

const contactInfo = {
  email: "likhithgowdaslikhiths@gmail.com",
  phone: "+91 80886 07922",
  location: "Bangalore, Karnataka, India",
  linkedin: "https://www.linkedin.com/in/likhith-gowda-s-55a440278/",
  github: "https://github.com/likhithgowdaslikhiths-cmd",
};

const BentoCard = ({ children, className = "", delay = 0, hover = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    className={`relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#111827] ${className}`}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3500);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1120] px-4 py-24 text-white sm:px-6 lg:py-32"
      aria-label="Contact"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-700/15 blur-[140px]" />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent" />
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400/80">Get In Touch</p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] md:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              amazing.
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
            Have a project in mind or want to explore working together? I'm open to freelance, full-time, and contract opportunities.
          </p>
        </motion.div>

        {/* ── Bento grid ──────────────────────────────────── */}
        <div className="grid gap-4 lg:grid-cols-12">

          {/* [A] Contact form — col 7 */}
          <BentoCard delay={0.1} hover={false} className="lg:col-span-7 p-7 md:p-8">
            <div aria-hidden="true" className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-violet-600/10 blur-[70px]" />
            <p className="mb-6 font-display text-lg font-bold text-white">Send a message</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
                    <input
                      id={id} name={id} type={type} value={form[id]}
                      onChange={handleChange} required placeholder={placeholder}
                      className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-violet-500/20"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                <textarea
                  id="message" name="message" value={form.message}
                  onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-violet-500/20"
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.35)] transition-shadow hover:shadow-[0_0_45px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <><div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />Sending...</>
                ) : submitted ? (
                  <><FaCheck className="text-emerald-300" />Message sent!</>
                ) : (
                  <><FaPaperPlane />Send Message</>
                )}
              </motion.button>
            </form>
          </BentoCard>

          {/* [B] Right column — col 5 */}
          <div className="flex flex-col gap-4 lg:col-span-5">

            {/* Availability card */}
            <BentoCard delay={0.15} className="p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-300">Available for opportunities</span>
              </div>
              <p className="font-display text-lg font-bold text-white mb-1">Open to work</p>
              <p className="text-xs text-slate-400 leading-relaxed">Freelance projects, full-time roles & contract work — React, Next.js, TypeScript specialist based in Bangalore.</p>
            </BentoCard>

            {/* Contact details */}
            <BentoCard delay={0.2} hover={false} className="p-6">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">Direct contact</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <FaEnvelope />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, accent: "text-violet-300" },
                  { icon: <FaPhoneAlt />, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}`, accent: "text-cyan-300" },
                  { icon: <FaMapMarkerAlt />, label: "Location", value: contactInfo.location, href: null, accent: "text-fuchsia-300" },
                ].map(({ icon, label, value, href, accent }) => {
                  const Tag = href ? "a" : "div";
                  return (
                    <Tag
                      key={label}
                      {...(href ? { href, target: "_self" } : {})}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]"
                    >
                      <div className={`text-sm ${accent}`}>{icon}</div>
                      <div>
                        <p className="text-[10px] text-slate-500">{label}</p>
                        <p className="text-xs font-medium text-white break-all">{value}</p>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </BentoCard>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaLinkedin className="text-lg" />, label: "LinkedIn", sub: "Professional profile", href: contactInfo.linkedin, accent: "text-blue-300 border-blue-500/20 bg-blue-500/10" },
                { icon: <FaGithub className="text-lg" />, label: "GitHub", sub: "Code & projects", href: contactInfo.github, accent: "text-slate-300 border-white/[0.08] bg-white/[0.04]" },
              ].map(({ icon, label, sub, href, accent }) => (
                <BentoCard key={label} delay={0.28} className={`p-4 border ${accent.split(" ").slice(1).join(" ")}`}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2">
                    <div className={accent.split(" ")[0]}>{icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-[10px] text-slate-500">{sub}</p>
                    </div>
                  </a>
                </BentoCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}