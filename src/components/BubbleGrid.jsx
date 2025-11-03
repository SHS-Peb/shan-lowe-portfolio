import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function BubbleGrid() {
  const [techOpen, setTechOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-12 mt-20 mx-auto w-fit">

      {/* Advocacy */}
      <Link to="/advocacy">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-48 h-48 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          Advocacy
        </motion.div>
      </Link>

      {/* Tech (splits on hover) */}
      <motion.div
        onHoverStart={() => setTechOpen(true)}
        onHoverEnd={() => setTechOpen(false)}
        className="relative flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-48 h-48 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          Technological
        </motion.div>

        <AnimatePresence>
          {techOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -bottom-28 flex gap-6"
            >
              <Link to="/projects">
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
                  Projects
                </div>
              </Link>
              <Link to="/spotlight">
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
                  Spotlight
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
          className="w-48 h-48 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          Creative Work
        </motion.div>

        <AnimatePresence>
          {creativeOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -bottom-28 flex gap-6"
            >
              <Link to="/writing">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
                  Writing
                </div>
              </Link>
              <Link to="/acting">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
                  Acting
                </div>
              </Link>
              <Link to="/photography">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
                  Photo
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
          className="w-48 h-48 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer"
        >
          Contact
        </motion.div>
      </Link>

    </div>
  );
}
