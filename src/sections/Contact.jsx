import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    email: "likhithgowdaslikhiths@gmail.com",
    phone: "+91 80886 07922",
    location: "Bangalore, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/likhith-gowda-s-55a440278/",
    github: "https://github.com/likhithgowdaslikhiths-cmd",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 text-white lg:py-32">
      {/* Enhanced background effects */}
      <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-[180px]" />
      <div className="absolute left-0 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/15 to-pink-500/15 blur-[160px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <FaEnvelope className="text-cyan-300" />
            <span className="text-sm font-medium text-cyan-300">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Let's Create
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Ready to bring your vision to life? Whether it's a cutting-edge web application,
            a stunning brand identity, or innovative digital solutions, I'm here to collaborate
            and deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-slate-950/90 to-slate-900/80 p-8 shadow-premium backdrop-blur-xl lg:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-white">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-cyan-400/20 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-cyan-400/20 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-cyan-400/20 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-premium disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FaCheck className="text-green-300" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 space-y-8 lg:order-2"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>

              <div className="grid gap-4">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 transition-colors group-hover:bg-cyan-500/30">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Email</p>
                    <p className="text-white transition-colors group-hover:text-cyan-300">
                      {contactInfo.email}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 transition-colors group-hover:bg-cyan-500/30">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Phone</p>
                    <p className="text-white transition-colors group-hover:text-cyan-300">
                      {contactInfo.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 transition-colors group-hover:bg-cyan-500/30">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Location</p>
                    <p className="text-white">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Connect Online</h3>

              <div className="grid gap-4">
                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 transition-colors group-hover:bg-blue-500/30">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">LinkedIn</p>
                    <p className="text-white transition-colors group-hover:text-blue-300">
                      Professional Network
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-slate-950/80 to-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-600/20 text-slate-300 transition-colors group-hover:bg-slate-600/30">
                    <FaGithub className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">GitHub</p>
                    <p className="text-white transition-colors group-hover:text-slate-300">
                      Code & Projects
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Likhith Gowda. Crafted with ❤️ using React & TailwindCSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
