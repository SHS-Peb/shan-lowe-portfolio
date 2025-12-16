import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function CodeDeveloper() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="min-h-screen w-full page-bg-blue">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Top row – Circle + Text */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-12">

            {/* Circle Image Placeholder */}
            <div className="w-82 h-82 rounded-full overflow-hidden bg-[#FFC7F0] border-2 border-[#FFBEEB] shadow-md flex items-center justify-center">
              <img
                alt="Tech Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + Role */}
            <div className="space-y-2">
              <h1 className="text-5xl font-amoresa text-[#ffffff] mb-2">Shannon Lowe</h1>
              <p className="font-perandory text-[#3a3a3a] opacity-80">Junior Code Developer</p>
              <p className="font-perandory text-[#3a3a3a] opacity-80">Sydney, Australia • She/Her</p>
            </div>
          </div>
        </div>

        {/* --- Section 1: About / Overview --- */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg text-[#1e293b]"
          >
            <h2 className="text-2xl font-amoresa mb-4 text-[#558cdd]">
              Hi, I'm Shannon
            </h2>
            <p className="font-perandory font-calibri leading-relaxed"></p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#e3edff]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg text-[#1e293b]"
          >
            <h2 className="text-2xl font-amoresa mb-4 text-[#558cdd]">
              Technical Skills
            </h2>

            <ul className="list-disc pl-6 space-y-1 font-times-new-roman">
              <li>Front-End: HTML5, CSS3, JavaScript, React</li>
              <li>Back-End: Node.js, Express.js</li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Version Control: Git, GitHub</li>
              <li>Deployment: Heroku, Netlify</li>
            </ul>
          </motion.div>
        </div>

        {/* Projects */}
        <div id="projects" className="max-w-5xl w-full mb-24">
          <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">Projects</h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[1, 2].map((i) => (
              <div
                key={i}
                className="
          h-48 
          rounded-3xl
          bg-white/20
          backdrop-blur-xl
          border border-white/30 
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          flex items-center justify-center
        "
              >
                <span className="font-perandory text-[#558cdd] text-xl opacity-80">
                  Coming Soon
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spotlight */}
        <div id="spotlight" className="max-w-5xl w-full mb-24">
          <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">Side Quests</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[1, 2].map((i) => (
              <div
                key={i}
                className="
          h-48 
          rounded-3xl
          bg-white/20
          backdrop-blur-xl
          border border-white/30 
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          flex items-center justify-center
        "
              >
                <span className="font-perandory text-[#558cdd] text-xl opacity-80">
                  Coming Soon
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </section>
    </div>
  );
}
