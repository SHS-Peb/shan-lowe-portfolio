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

  const glassCard =
    "bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]";

  return (
    <div className="min-h-screen w-full page-bg-blue">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="w-full space-y-16">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center mb-12"
          >
            {/* Circle */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#FFC7F0] border-2 border-[#FFBEEB] shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center">
              
            </div>

            {/* Name + Role */}
            <div className="space-y-2 text-center">
              <h1 className="text-5xl font-amoresa text-[#558cdd] mb-2">
                Shannon Lowe
              </h1>
              <p className="font-perandory text-[#3a3a3a] opacity-80">
                Junior Code Developer
              </p>
              <p className="font-perandory text-[#3a3a3a] opacity-80">
                Sydney, Australia • She/Her
              </p>
            </div>
          </motion.div>

          {/* ABOUT / SKILLS */}
          <div className="grid md:grid-cols-2 gap-10 w-full mb-24">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`${glassCard} rounded-3xl p-8 text-[#1e293b]`}
            >
              <h2 className="text-2xl font-amoresa mb-4 text-[#558cdd]">
                Hi, I'm Shannon
              </h2>
              <p className="font-perandory leading-relaxed">
                {/*intro text */}
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`${glassCard} rounded-3xl p-8 text-[#1e293b]`}
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

          {/* PROJECTS */}
          <div id="projects" className="w-full mb-24">
            <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">
              Projects
            </h2>

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
                  className={`${glassCard} h-48 rounded-3xl flex items-center justify-center`}
                >
                  <span className="font-perandory text-[#558cdd] text-xl opacity-80">
                    Coming Soon
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* SIDE QUESTS */}
          <div id="spotlight" className="w-full mb-24">
            <h2 className="text-3xl font-amoresa text-[#558cdd] mb-4">
              Side Quests
            </h2>

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
                  className={`${glassCard} h-48 rounded-3xl flex items-center justify-center`}
                >
                  <span className="font-perandory text-[#558cdd] text-xl opacity-80">
                    Coming Soon
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
