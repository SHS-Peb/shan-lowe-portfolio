import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingBubbles from "../components/FloatingBubbles";

export default function CodeDeveloper() {
  const { hash } = useLocation();

  // Scroll smoothly to an anchor if one exists
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-20 px-6 bg-gradient-to-b from-[#d5eaff]/60 to-[#f9f9ff]/40 backdrop-blur-sm">
      {/* Blue floating bubbles background */}
      <FloatingBubbles
        count={100}
        baseColor="rgba(173, 216, 230, 0.45)" // soft blue
        gradientFrom="#d5eaff"
        gradientTo="#f9f9ff"
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-amoresa text-[#558cdd] mb-2">
          Code Developer
        </h1>
        <p className="font-perandory text-[#3a3a3a] opacity-80">
          Exploring projects, spotlights, and everything in between.
        </p>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-amoresa text-[#558cdd] mb-2">
          Code Developer
        </h1>
        <p className="font-perandory text-[#3a3a3a] opacity-80">
          Exploring projects, spotlights, and everything in between.
        </p>
      </div>

      {/* --- Section 1: About / Overview --- */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full mb-24">
        {/* Left Section — Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg text-[#1e293b]"
        >
          <h2 className="text-2xl font-amoresa mb-4 text-[#558cdd]">
            Hi, I'm Shannon
          </h2>
          <p className="font-perandory leading-relaxed">
          </p>

          <h3 className="text-xl font-amoresa mt-6 text-[#558cdd]">
          </h3>
          <p className="font-perandory leading-relaxed mt-2">
          </p>
        </motion.div>

        {/* Right Section — Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg text-[#1e293b]"
        >
          <h2 className="text-2xl font-amoresa mb-4 text-[#558cdd]">
            Technical Skills
          </h2>
          <ul className="list-disc pl-6 space-y-1 font-perandory">
            <li>Front-End: HTML5, CSS3, JavaScript, React</li>
            <li>Back-End: Node.js, Express.js</li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Version Control: Git, GitHub</li>
            <li>Deployment: Heroku, Netlify</li>
          </ul>

          <h3 className="text-xl font-amoresa mt-6 text-[#558cdd]">
          </h3>
          <p className="font-perandory leading-relaxed mt-2">
          </p>
        </motion.div>
      </div>

      {/* --- Section 2: Projects --- */}
      <div id="projects" className="max-w-5xl w-full mb-24">
        <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">Projects</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg"
        >
          <p className="font-perandory leading-relaxed">
          
          </p>
        </motion.div>
      </div>

      {/* --- Section 3: Spotlight --- */}
      <div id="spotlight" className="max-w-5xl w-full mb-24">
        <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">Spotlight</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg"
        >
          <p className="font-perandory leading-relaxed">
          </p>
        </motion.div>
      </div>
    </section>
  );
}
