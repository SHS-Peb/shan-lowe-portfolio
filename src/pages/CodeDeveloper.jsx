import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import codeProfile from "../assets/imgs/codeProfile.jpg";
import portfolio from "../assets/imgs/projects/portfolio.PNG"
import firefly from "../assets/imgs/projects/firefly.jpg"
import gratify from "../assets/imgs/projects/gratify.png"
import fitness from "../assets/imgs/projects/fitness.png"
import navigate from "../assets/imgs/projects/navigate.png"


const projects = [
  {
    title: "Firefly Mentoring",
    image: firefly,
    description:
      "A mentoring website built with a soft glow aesthetic, featuring service packages, booking flow, and responsive design.",
    tech: ["React", "Vite", "Tailwind", "JavaScript"],
    link: "https://fireflymentoring.com",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "My personal developer portfolio showcasing projects, skills, and creative design choices.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/SHS-Peb/shan-lowe-portfolio",
  },
  {
    title: "Fit Connect Pro",
    image: fitness,
    description:
      "A fitness-focused web application designed to help users connect, track goals, and stay motivated through shared progress and community features.",
    tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/SHS-Peb/Fit-Connect-Pro",
  },
  {
    title: "Gratify Me",
    image: gratify,
    description:
      "A gratitude and self-reflection app that encourages positive habits through daily entries and simple, calming interactions.",
    tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
    link: "https://github.com/SHS-Peb/gratify-me",
  },
  {
    title: "NavigateUrWeek",
    image: navigate,
    description:
      "A weekly planning and organisation app that helps users structure tasks, priorities, and routines for a balanced and productive week.",
    tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
    link: "https://github.com/SHS-Peb/NavigateUrWeek",
  },
];

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
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#cfead8] border-2 border-[#4a6d52] shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center">
              <img
                src={codeProfile}
                alt="Profile pic"
                className="w-full h-full object-cover"
              />
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
              <p className="font-times-new-roman leading-relaxed">
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
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-64 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-[#558cdd]/90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white"
                  >
                    <h3 className="text-xl font-amoresa mb-2">
                      {project.title}
                    </h3>

                    <p className="font-times-new-roman text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-white/20 border border-white/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="self-start rounded-full bg-white text-[#558cdd] px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </motion.div>
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
