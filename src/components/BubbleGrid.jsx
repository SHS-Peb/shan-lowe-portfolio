import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function BubbleGrid() {
  const [techOpen, setTechOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-12 mt-10 mx-auto w-fit">

      {/* Advocacy */}
      <Link to="/advocacy">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-64 h-64 rounded-full bg-[#ffdef5]/70 text-[#ff84d9] text-xl lg:text-4xl backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
  A dvocacy
</span>

        </motion.div>
      </Link>

      {/* Tech (splits on hover) */}
<motion.div
  onHoverStart={() => setTechOpen(true)}
  onHoverEnd={() => setTechOpen(false)}
  className="relative flex items-center justify-center"
>
  <Link to="/code-developer">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-64 h-64 rounded-full bg-[#f2f4ff]/70 text-[#558cdd] text-xl lg:text-4xl backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer text-center"
    >
      <div className="flex flex-col leading-tight">
        <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
          Code
        </span>
        <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl text-left">
          Developer
        </span>
      </div>
    </motion.div>
  </Link>

  <AnimatePresence>
    {techOpen && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 flex flex-col gap-4"
      >
        <Link to="/code-developer#projects">
          <div className="w-24 h-24 rounded-full bg-[#f2f4ff]/70 text-[#558cdd] shadow-md flex items-center justify-center hover:scale-105 transition">
            <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
              Projects
            </span>
          </div>
        </Link>
        <Link to="/code-developer#spotlight">
          <div className="w-24 h-24 rounded-full bg-[#f2f4ff]/70 text-[#558cdd] shadow-md flex items-center justify-center hover:scale-105 transition">
            <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
              Spotlight
            </span>
          </div>
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

      {/* Creative (splits into 3) */}
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
      </motion.div>

      {/* Contact */}
      <Link to="/contact">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-64 h-64 rounded-full bg-[#c7edd7]/70 text-[#248955] text-xl lg:text-4xl backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
>
  <div className="flex flex-col leading-tight">
    <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
      Contact
    </span>
    <span className="font-perandory first-letter:!font-amoresa first-letter:text-3xl">
      Me
    </span>
  </div>
        </motion.div>
      </Link>

    </div>
  );
}
