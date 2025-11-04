import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = {
    email: "likhithgowdaslikhiths@gmail.com",
    phone: "+91 80886 07922",
    location: "Mysore, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/likhith-gowda-s-55a440278/",
    github: "https://github.com/likhithgowdaslikhiths-cmd",
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-cyan-500/10 blur-[200px] rounded-full bottom-0 right-0"
        animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      {/* Tagline */}
      <p className="text-center text-gray-400 mb-12 italic">
        Let’s collaborate to turn ideas into elegant, high-performing web experiences.
      </p>

      {/* Contact Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-10 shadow-lg
                   hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-500"
      >
        <div className="space-y-8 text-center">
          {/* Email */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-cyan-400 transition text-lg"
          >
            <FaEnvelope className="text-cyan-400 text-xl" />
            {contactInfo.email}
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${contactInfo.phone}`}
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-cyan-400 transition text-lg"
          >
            <FaPhoneAlt className="text-cyan-400 text-xl" />
            {contactInfo.phone}
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center justify-center gap-3 text-gray-300 text-lg"
          >
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            {contactInfo.location}
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-6">
            <motion.a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="flex items-center gap-2 text-gray-300 hover:text-[#0A66C2] transition text-lg"
            >
              <FaLinkedin className="text-[#0A66C2] text-2xl" />
              LinkedIn
            </motion.a>

            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition text-lg"
            >
              <FaGithub className="text-cyan-400 text-2xl" />
              GitHub
            </motion.a>
          </div>

          {/* Status Badge */}
          <div className="mt-8">
            <span className="inline-block px-5 py-2 text-sm bg-green-500/20 text-green-400 border border-green-400/40 rounded-full">
              💼 Open to new opportunities
            </span>
          </div>

          {/* CTA Button */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-full hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all"
          >
            Let’s Connect ✉️
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-20 text-sm">
        © {new Date().getFullYear()} Likhith Gowda. Crafted with ❤️ using React & TailwindCSS.
      </p>
    </section>
  );
}
