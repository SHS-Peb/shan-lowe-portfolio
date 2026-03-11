import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function BubbleGrid() {
  const [techOpen, setTechOpen] = useState(false);

  const bubbleSize = "w-[clamp(160px,42vw,256px)] h-[clamp(160px,42vw,256px)]";
  const smallBubbleSize = "w-[clamp(84px,20vw,112px)] h-[clamp(84px,20vw,112px)]";

  const bigBubbleBase =
    `${bubbleSize} rounded-full backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer text-center`;
  const smallBubbleBase =
    `${smallBubbleSize} rounded-full backdrop-blur-md shadow-md flex items-center justify-center text-center`;

  const bigText = "text-[clamp(18px,4.5vw,40px)]";
  const smallText = "text-[clamp(12px,2.8vw,18px)]";

  const hoverHandlers = {
    onHoverStart: () => setTechOpen(true),
    onHoverEnd: () => setTechOpen(false),
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 place-items-center">
        {/* Advocacy */}
        <Link to="/advocacy">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className={`${bigBubbleBase} bg-[#ffdef5]/70 text-[#ff84d9] ${bigText}`}
          >
            <span className="font-perandory">
              <span className="font-amoresa">A</span>dvocacy
            </span>
          </motion.div>
        </Link>

        {/* Tech */}
        <motion.div
          className="relative flex items-center justify-center"
          {...(typeof window !== "undefined" && window.innerWidth >= 768 ? hoverHandlers : {})}
        >
          <Link to="/code-developer">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className={`${bigBubbleBase} bg-[#f2f4ff]/70 text-[#558cdd] ${bigText}`}
            >
              <div className="flex flex-col leading-tight">
                <span className="font-perandory">
                  <span className="font-amoresa">C</span>ode
                </span>
                <span className="font-perandory">
                  <span className="font-amoresa">D</span>eveloper
                </span>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:block">
            <AnimatePresence>
              {techOpen && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute right-0 top-1/2 translate-x-[110%] -translate-y-1/2 flex flex-col gap-4"
                >
                  <Link to="/code-developer#projects">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className={`${smallBubbleBase} bg-[#f2f4ff]/70 text-[#558cdd] ${smallText}`}
                    >
                      <span className="font-perandory">
                        <span className="font-amoresa">P</span>rojects
                      </span>
                    </motion.div>
                  </Link>

                  <Link to="/code-developer#spotlight" className="block">
                    <motion.div className="relative inline-block">
                      <span className="absolute rounded-full -inset-5 sm:-inset-4 lg:-inset-3" />
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 220, damping: 16 }}
                        className={`${smallBubbleBase} bg-[#f2f4ff]/70 text-[#558cdd] ${smallText} relative`}
                      >
                        <span className="font-perandory">
                          <span className="font-amoresa">S</span>potlight
                        </span>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Acting */}
        <Link to="/acting">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className={`${bigBubbleBase} bg-[#efdbff]/70 text-[#72409b] ${bigText}`}
          >
            <div className="flex flex-col leading-tight">
                <span className="font-perandory">
                  <span className="font-amoresa">M</span>odeling &
                </span>
                <span className="font-perandory">
                  <span className="font-amoresa">A</span>cting
                </span>
              </div>
          </motion.div>
        </Link>

        {/* Contact */}
        <Link to="/contact">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className={`${bigBubbleBase} bg-[#c7edd7]/70 text-[#248955] ${bigText}`}
          >
            <div className="flex flex-col leading-tight">
              <span className="font-perandory">
                <span className="font-amoresa">C</span>ontact
              </span>
              <span className="font-perandory">
                <span className="font-amoresa">M</span>e
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}


{/* Creative (splits into 3)
      <motion.div
        onHoverStart={() => setCreativeOpen(true)}
        onHoverEnd={() => setCreativeOpen(false)}
        className="relative flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-64 h-64 rounded-full bg-[#efdbff]/70 text-[#72409b] text-xl lg:text-4xl backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          <div className="flex flex-col leading-tight">
            <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
              Creative
            </span>
            <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
              Work
            </span>
          </div>
        </motion.div>

        <AnimatePresence>
          {creativeOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex flex-col gap-4"
            >
              <Link to="/writing">
                <div className="w-20 h-20 rounded-full bg-[#efdbff]/70 text-[#72409b] shadow-md flex items-center justify-center hover:scale-105 transition">
                  <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
                    Writing
                  </span>
                </div>
              </Link>
              <Link to="/acting">
                <div className="w-20 h-20 rounded-full bg-[#efdbff]/70 text-[#72409b] shadow-md flex items-center justify-center hover:scale-105 transition">
                  <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
                    Acting
                  </span>
                </div>
              </Link>
              <Link to="/photography">
                <div className="w-20 h-20 rounded-full bg-[#efdbff]/70 text-[#72409b] shadow-md flex items-center justify-center hover:scale-105 transition">
                  <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
                    Photography
                  </span>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div> */}
