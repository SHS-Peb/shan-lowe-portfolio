import warriorOne from "../assets/imgs/warriorOne.jfif";
import warriorTwo from "../assets/imgs/warriorTwo.jfif";
import warriorThree from "../assets/imgs/warriorThree.jfif";
import shecodeOne from "../assets/imgs/advocacy/shecode_one.jpg";
import shecodeTwo from "../assets/imgs/advocacy/shecode_two.jpg";
import shecodeThree from "../assets/imgs/advocacy/shecode_three.PNG";
import shecodeFour from "../assets/imgs/advocacy/shecode_four.jpg";
// import wesleyOne from "../assets/imgs/advocacy/wesley.jpg";
// import clg from "../assets/imgs/advocacy/clg.jpg";
import warriorFour from "../assets/imgs/advocacy/warrior.jpg";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Advocacy() {
  const { hash } = useLocation();
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  // Glass + shadow styling
  const glassCard =
    "bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]";
  const cardBig = `${glassCard} rounded-[32px] p-10`;
  const cardTight = `${glassCard} rounded-[32px] p-8`;

  const bodyText =
    "text-sm text-[#5C3558] leading-relaxed font-times-new-roman";

  const bubble =
    "bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.10)]";

  const clickableImg =
    "w-full h-full object-cover cursor-pointer transition-transform hover:scale-[1.03]";

  return (
    <div className="w-full bg-[#FFD6F3]">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="w-full space-y-16">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center mb-12"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#FFC7F0] border-2 border-[#FFBEEB] shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center">
              <img
                src={warriorThree}
                alt="Profile pic"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setActiveImage(warriorThree)}
              />
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-5xl font-amoresa text-[#ff84d9] mb-2">
                Shannon Lowe
              </h1>
              <p className="font-perandory text-[#3a3a3a] opacity-80">
                Advocate & Mentor
              </p>
              <p className="font-perandory text-[#3a3a3a] opacity-80">
                Sydney, Australia • She/Her
              </p>
            </div>
          </motion.div>

          {/* SECOND ROW (keep this as-is) */}
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className={cardBig}>
                <h2 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  Advocacy Overview
                </h2>
                <p className={bodyText}>
                  When I was a child, I often daydreamed about the kind of adult I
                  wished existed. Someone grounded, safe, understanding, and
                  protective. Over the years, through challenges, growth, and a lot
                  of introspection, I realised I had become that adult for myself.
                  <br />
                  <br />
                  That realisation shaped my purpose: to share the perspective I’ve
                  gained from my own path and to help others feel seen and
                  supported. I don’t believe people need to be “saved.” They need a
                  space where they can be fully themselves, surrounded by
                  understanding, compassion, and community no matter their age or
                  stage of life.
                  <br />
                  <br />
                  My advocacy is built on creating that space and helping others
                  build it for themselves.
                </p>
              </div>
            </motion.div>

            <div className="flex-1 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={cardTight}
              >
                <h3 className="text-xl font-amoresa mb-3 text-[#ff84d9]">
                  Current Focus
                </h3>
                <p className={bodyText}>
                  I recently graduated from the Warrior Woman Foundation program,
                  where I was honoured to be invited back as a Kindred Warrior to
                  support next year’s mentees. I also continue my involvement with
                  Wesley Aunts & Uncles, maintaining my connection through a new
                  bond after the graduation of my previous one.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={cardTight}
              >
                <h3 className="text-xl font-amoresa mb-3 text-[#ff84d9]">
                  Panels & Speaking
                </h3>
                <p className={bodyText}>
                  I am available for panels, workshops, and speaking engagements.
                  My talks draw from my lived experience and centre around:
                  Personal growth & navigating life’s complexities, goal setting &
                  self-belief, tech pathways & supporting women in STEM, advocacy,
                  safety, and community.
                </p>
              </motion.div>
            </div>
          </div>

          {/* WARRIOR WOMAN (text then images underneath) */}
          <div className="space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={cardBig}>
                <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  Warrior Woman Foundation
                </h3>
                <p className={bodyText}>
                  Over six months, I completed the Young Warrior Woman Program, an
                  initiative designed to support young women through one-on-one
                  mentoring, peer community, and personal development. During my
                  time as a mentee, I built confidence, strengthened my voice, and
                  found a supportive network of women who walked beside me as I
                  worked toward my goals. A highlight of the program was being
                  invited to speak at my graduation, standing alongside Jacinta
                  Tynan and sharing the growth I experienced throughout the
                  journey. Later that year, I was also invited to speak at the
                  Empower Her event, where I reflected publicly on how the program
                  shaped my confidence and helped me move toward my dreams. I am
                  honoured to continue my involvement with the Foundation as a
                  Kindred Warrior, supporting the next cohort of mentees and giving
                  back to a community that has given so much to me.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`${cardBig} p-6`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={warriorOne}
                      alt="Warrior Woman group"
                      className={clickableImg}
                      onClick={() => setActiveImage(warriorOne)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={warriorThree}
                      alt="Speaking"
                      className={clickableImg}
                      onClick={() => setActiveImage(warriorThree)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={warriorTwo}
                      alt="Flyer"
                      className={clickableImg}
                      onClick={() => setActiveImage(warriorTwo)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={warriorFour}
                      alt="Warrior Woman"
                      className={clickableImg}
                      onClick={() => setActiveImage(warriorFour)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SHE CODES (text then images underneath) */}
          <div className="space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={cardBig}>
                <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  She Codes Australia
                </h3>
                <p className={bodyText}>
                  I was selected to participate in the She Codes Plus Sydney
                  program, a six-month intensive designed to help women build strong
                  foundations in software development and gain real-world project
                  experience. Being accepted into this program marked a major
                  milestone in my journey into tech, after spending a year
                  independently strengthening my coding skills and developing
                  confidence in my abilities.
                  <br />
                  <br />
                  Throughout the program, I deepened my knowledge across the full
                  stack, built practical projects, and worked alongside a cohort of
                  talented women all striving to grow in the industry. The hands-on
                  learning environment, combined with mentorship and industry
                  exposure, helped me refine my technical foundations and expand my
                  understanding of what a career in tech can look like.
                  <br />
                  <br />
                  I’m grateful to Kate Kirwin, the founder of She Codes Australia,
                  for creating a pathway that truly empowers women entering the tech
                  workforce. The program was made possible through the support of
                  Commonwealth Bank, Telstra, and Canva, whose partnership opens
                  doors for women who may not otherwise have access to this level of
                  training.
                  <br />
                  <br />
                  Being part of She Codes Plus is not only a learning
                  experience, it is a transformative step that strengthens my
                  skills, broadens my network, and affirms my commitment to
                  pursuing a long-term future in technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`${cardBig} p-6`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={shecodeOne}
                      alt="She Codes 1"
                      className={clickableImg}
                      onClick={() => setActiveImage(shecodeOne)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={shecodeThree}
                      alt="She Codes 2"
                      className={clickableImg}
                      onClick={() => setActiveImage(shecodeThree)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={shecodeTwo}
                      alt="She Codes 3"
                      className={clickableImg}
                      onClick={() => setActiveImage(shecodeTwo)}
                    />
                  </div>
                  <div className={`${bubble} aspect-square`}>
                    <img
                      src={shecodeFour}
                      alt="She Codes 4"
                      className={clickableImg}
                      onClick={() => setActiveImage(shecodeFour)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* WESLEY (text then one featured image underneath) */}
          <div className="space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={cardBig}>
                <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  Wesley Aunts & Uncles
                </h3>
                <p className={bodyText}>
                  I volunteer as an Aunt with the Wesley Aunts & Uncles Program, a
                  community initiative that pairs children with supportive adult
                  mentors who can offer stability, encouragement, and positive
                  experiences outside their immediate environment.
                  <br />
                  <br />
                  I spend quality time with the child I’m matched with, offering
                  consistency, emotional support, and opportunities to explore new
                  activities. Whether we’re engaging in creative projects, spending
                  time outdoors, or simply talking through their week, my focus is
                  on building trust and helping them feel seen, valued, and
                  supported.
                  <br />
                  <br />
                  The program plays a vital role in strengthening resilience and
                  wellbeing for children who may benefit from having an additional
                  caring adult in their lives. Being part of this work has deepened
                  my understanding of community responsibility and the impact that
                  small, consistent moments of connection can have on a young
                  person’s confidence and sense of belonging.
                  <br />
                  <br />
                  My involvement with Wesley Aunts & Uncles has been one of the most
                  grounding and meaningful parts of my advocacy journey, and I am
                  grateful for the opportunity to contribute to a child’s growth in
                  a positive and supportive way.
                </p>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`${cardBig} p-6`}>
                <div className={`${bubble} aspect-[16/9]`}>
                  <img
                    src={wesleyOne}
                    alt="Wesley"
                    className={clickableImg}
                    onClick={() => setActiveImage(wesleyOne)}
                  />
                </div>
              </div>
            </motion.div> */}
          </div>


          {/* CODE LIKE A GIRL */}
          <div className="space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={cardBig}>
                <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  Code Like A Girl
                </h3>
                <p className={bodyText}>
                  I have been actively involved with Code Like a Girl,
                  participating in a range of their community events and completing
                  their Career Mentoring Program in 2025. Through these experiences,
                  I connected with women across the tech industry, gained valuable
                  career guidance, and strengthened my confidence.
                </p>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`${cardBig} p-6`}>
                <div className={`${bubble} aspect-[4/3] flex items-center justify-center bg-white/30`}>
                  <img
                    src={clg}
                    alt="Code Like A Girl"
                    className="max-h-full max-w-full object-contain cursor-pointer transition-transform hover:scale-[1.03]"
                    onClick={() => setActiveImage(clg)}
                  />
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* LIGHTBOX MODAL */}
          {activeImage && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
              onClick={() => setActiveImage(null)}
            >
              <div
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImage}
                  alt="Enlarged view"
                  className="w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                />

                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute -top-4 -right-4 bg-white text-[#ff84d9] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
