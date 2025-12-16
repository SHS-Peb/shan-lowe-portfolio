import warriorOne from "../assets/imgs/warriorOne.jfif";
import warriorTwo from "../assets/imgs/warriorTwo.jfif";
import warriorThree from "../assets/imgs/warriorThree.jfif";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Advocacy() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const card =
    "bg-[#e3edff]/60 backdrop-blur-md bg-white/20 rounded-3xl p-8 shadow-lg text-[#1e293b]";
  const cardTight =
    "bg-[#e3edff]/60 backdrop-blur-md bg-white/20 rounded-3xl p-6 shadow-lg text-[#1e293b]";
  const bodyText = "text-sm text-[#1e293b]/90 leading-relaxed font-times-new-roman";
  const pill = "inline-flex px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm";

  return (
    <div className="min-h-screen w-full page-bg-pink">
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
      <div className="w-full space-y-16">

        {/* HERO */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center mb-12">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#FFC7F0] border-2 border-[#FFBEEB] shadow-md flex items-center justify-center">
            <img
              src={warriorThree}
              alt="Shannon speaking on stage"
              className="w-full h-full object-cover"
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
        </div>


          {/* SECOND ROW */}
          <div className="flex flex-col lg:flex-row gap-10 w-full">

            {/* Large left card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className={card}>
                <h2 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                  Advocacy Overview
                </h2>
                <p className={bodyText}>
                  When I was a child, I often daydreamed about the kind of adult I
                  wished existed — someone grounded, safe, understanding, and protective.
                  Over the years, through challenges, growth, and a lot of introspection,
                  I realised I had become that adult for myself.
                  <br /><br />
                  That realisation shaped my purpose: to share the perspective I’ve gained
                  from my own path and to help others feel seen and supported. I don’t believe
                  people need to be “saved.” They need a space where they can be fully themselves,
                  surrounded by understanding, compassion, and community no matter their age or stage of life.
                  <br /><br />
                  My advocacy is built on creating that space and helping others build it for themselves.
                </p>
              </div>
            </motion.div>

            {/* Right column: two cards */}
            <div className="flex-1 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={cardTight}
              >
                <h3 className="text-xl font-amoresa mb-3 text-[#ff84d9]">Current Focus</h3>
                <p className={bodyText}>
                  I recently graduated from the Warrior Woman Foundation program, where I was
                  honoured to be invited back as a Kindred Warrior to support next year’s mentees.
                  I also continue my involvement with Wesley Aunts & Uncles, maintaining my connection
                  through a new bond after the graduation of my previous one.
                  <br /><br />
                  Beyond these programs, I’m always exploring new avenues to give back — whether through
                  mentoring, community work, storytelling, or connection-based initiatives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={cardTight}
              >
                <h3 className="text-xl font-amoresa mb-3 text-[#ff84d9]">Panels & Speaking</h3>
                <p className={bodyText}>
                  I am available for panels, workshops, and speaking engagements.
                  My talks draw from my lived experience and centre around:
                  Personal growth & navigating life’s complexities, goal setting & self-belief,
                  tech pathways & supporting women in STEM, advocacy, safety, and community.
                  <br /><br />
                  If you have questions or would like to inquire about booking, please feel free to contact me —
                  I’d love to collaborate.
                </p>
              </motion.div>
            </div>
          </div>

          {/* SECTION BLOCK TEMPLATE */}
          {/* Warrior Woman */}
          <div className="space-y-8 w-full">
            <div className={pill}>
              <span className="text-sm font-semibold text-[#ff84d9]">Warrior Woman</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className={card}>
                  <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                    Warrior Woman Foundation
                  </h3>
                  <p className={bodyText}>
                    Over six months, I completed the Young Warrior Woman Program,
                    an initiative designed to support young women through one-on-one mentoring,
                    peer community, and personal development. During my time as a mentee, I built confidence,
                    strengthened my voice, and found a supportive network of women who walked beside me as I worked toward my goals.
                    A highlight of the program was being invited to speak at my graduation, standing alongside Jacinta Tynan and sharing the growth I experienced throughout the journey.
                    Later that year, I was also invited to speak at the Empower Her event,
                    where I reflected publicly on how the program shaped my confidence and helped me move toward my dreams.
                    I am honoured to continue my involvement with the Foundation as a Kindred Warrior, supporting the next cohort of mentees and giving back to a community that has given so much to me.</p>
                </div>
              </motion.div>

              {/* bubble grid */}
              <div className="w-full lg:w-60 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorOne} alt="Warrior Woman group photo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorThree} alt="Shannon speaking" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorTwo} alt="Warrior Woman flyer" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-[11px] text-[#ff84d9] font-perandory">
                    More soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wesley Aunts & Uncles */}
          <div className="space-y-8 w-full">
            <div className={pill}>
              <span className="text-sm font-semibold text-[#ff84d9]">Wesley Aunts & Uncles</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className={card}>
                  <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                    Wesley Aunts & Uncles
                  </h3>
                  <p className={bodyText}>
                    I volunteer as an Aunt with the Wesley Aunts & Uncles Program, a community initiative that pairs children with supportive adult mentors who can offer stability, encouragement, and positive experiences outside their immediate environment.

                    I spend quality time with the child I’m matched with, offering consistency, emotional support, and opportunities to explore new activities. Whether we’re engaging in creative projects, spending time outdoors, or simply talking through their week, my focus is on building trust and helping them feel seen, valued, and supported.

                    The program plays a vital role in strengthening resilience and wellbeing for children who may benefit from having an additional caring adult in their lives. Being part of this work has deepened my understanding of community responsibility and the impact that small, consistent moments of connection can have on a young person’s confidence and sense of belonging.

                    My involvement with Wesley Aunts & Uncles has been one of the most grounding and meaningful parts of my advocacy journey, and I am grateful for the opportunity to contribute to a child’s growth in a positive and supportive way.
                  </p>
                </div>
              </motion.div>

              {/* bubble grid layout */}
              <div className="w-full lg:w-60 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorOne} alt="Wesley image 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorThree} alt="Wesley image 2" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorTwo} alt="Wesley image 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-[11px] text-[#ff84d9] font-perandory">
                    More soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Her Tech Circle */}
          {/* She Codes */}
          <div className="space-y-8 w-full">
            <div className={pill}>
              <span className="text-sm font-semibold text-[#ff84d9]">She Codes Australia</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className={card}>
                  <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                    She Codes Australia
                  </h3>
                  <p className={bodyText}>
                    I was selected to participate in the She Codes Plus Sydney program, a six-month intensive designed to help women build strong foundations in software development and gain real-world project experience. Being accepted into this program marked a major milestone in my journey into tech, after spending a year independently strengthening my coding skills and developing confidence in my abilities.

                    Throughout the program, I deepened my knowledge across the full stack, built practical projects, and worked alongside a cohort of talented women all striving to grow in the industry. The hands-on learning environment, combined with mentorship and industry exposure, helped me refine my technical foundations and expand my understanding of what a career in tech can look like.

                    I’m grateful to Kate Kirwin, the founder of She Codes Australia, for creating a pathway that truly empowers women entering the tech workforce. The program was made possible through the support of Commonwealth Bank, Telstra, and Canva, whose partnership opens doors for women who may not otherwise have access to this level of training.

                    Being part of She Codes Plus was not only a learning experience — it was a transformative step that strengthened my skills, broadened my network, and affirmed my commitment to pursuing a long-term future in technology.
                 </p>
                </div>
              </motion.div>

              {/* bubble grid */}
              <div className="w-full lg:w-60 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorOne} alt="Warrior Woman group photo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorThree} alt="Shannon speaking" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorTwo} alt="Warrior Woman flyer" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-[11px] text-[#ff84d9] font-perandory">
                    More soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Like A Girl */}
          <div className="space-y-8 w-full">
            <div className={pill}>
              <span className="text-sm font-semibold text-[#ff84d9]">Code Like A Girl</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className={card}>
                  <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                    Code Like A Girl
                  </h3>
                  <p className={bodyText}>
                    I have been actively involved with Code Like a Girl, participating in a range of their community events and completing their Career Mentoring Program in 2025.
                    Through these experiences, I connected with women across the tech industry, gained valuable career guidance, and strengthened my confidence
                  </p>
                </div>
              </motion.div>

              {/* bubble grid layout */}
              <div className="w-full lg:w-60 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorOne} alt="Wesley image 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorThree} alt="Wesley image 2" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorTwo} alt="Wesley image 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-[11px] text-[#ff84d9] font-perandory">
                    More soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Her Tech Circle */}
          <div className="space-y-8 w-full">
            <div className={pill}>
              <span className="text-sm font-semibold text-[#ff84d9]">Her Tech Circle</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className={card}>
                  <h3 className="text-2xl font-amoresa mb-4 text-[#ff84d9]">
                    Her Tech Circle
                  </h3>
                  <p className={bodyText}>
                    I volunteer my time with HerTechCircle, a community-driven initiative that supports women entering and growing within the technology industry. Through this organisation, I contribute to creating safe, empowering spaces where women can access guidance, share experiences, and build the confidence needed to thrive in tech.

                    My involvement includes providing mentorship, offering career support, and engaging with women who are navigating the early stages of their tech journey. Whether I’m helping someone prepare for their first interview, clarifying technical concepts, or simply being a supportive presence, my focus is always on making the tech industry feel more accessible and less intimidating.
                  </p>
                </div>
              </motion.div>

              {/* bubble grid layout */}
              <div className="w-full lg:w-60 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorOne} alt="Wesley image 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-32 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorThree} alt="Wesley image 2" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={warriorTwo} alt="Wesley image 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-24 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl h-28 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-[11px] text-[#ff84d9] font-perandory">
                    More soon
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
