import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const base =
    "px-6 py-2 rounded-full border-2 border-white shadow-sm transition-all duration-200 hover:shadow-md backdrop-blur-md whitespace-nowrap";

  const [techOpen, setTechOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full py-6 px-10 flex justify-center gap-8 text-ink font-medium relative z-50">

      {/* Home */}
      <NavLink
        to="/"
        className={`${base} bg-[var(--clr-home)] hover:brightness-110`}
      >
        Home
      </NavLink>

      {/* Code Developer + dropdown */}
      <div
        onMouseEnter={() => setTechOpen(true)}
        onMouseLeave={() => setTechOpen(false)}
        className="relative"
      >
          <Link to="/code-developer" className={`${base} bg-[var(--clr-tech)] hover:brightness-110 block`}>
            Code Developer
            </Link>

  <AnimatePresence>
    {techOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -6 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex flex-col gap-2"
      >
        {/* Projects and Spotlight go to anchors */}
        <Link
          to="/code-developer#projects"
          className={`${base} bg-[var(--clr-tech)] hover:brightness-110`}
        >
          Projects
        </Link>

        <Link
          to="/code-developer#spotlight"
          className={`${base} bg-[var(--clr-tech)] hover:brightness-110`}
        >
          Spotlight
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>

      {/* Advocacy */}
      <NavLink
        to="/advocacy"
        className={`${base} bg-[var(--clr-advocacy)] hover:brightness-110`}
      >
        Advocacy
      </NavLink>

      {/* Creative + dropdown 
      <div
        onMouseEnter={() => setCreativeOpen(true)}
        onMouseLeave={() => setCreativeOpen(false)}
        className="relative"
      >
        <div
          className={`${base} bg-[var(--clr-creative)] hover:brightness-110`}
        >
          Creative Work
        </div>

        <AnimatePresence>
          {creativeOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -6 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex flex-col gap-2"
            >
              <Link
                to="/acting"
                className={`${base} bg-[var(--clr-creative)] hover:brightness-110`}
              >
                Acting
              </Link>
              <Link
                to="/writing"
                className={`${base} bg-[var(--clr-creative)] hover:brightness-110`}
              >
                Writing
              </Link>
              <Link
                to="/photography"
                className={`${base} bg-[var(--clr-creative)] hover:brightness-110`}
              >
                Photoshoots
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Blog 
      <NavLink
        to="/blog"
        className={`${base} bg-[var(--clr-blog)] hover:brightness-110`}
      >
        Blog
      </NavLink>
*/}
      {/* Contact Me */}
      <NavLink
        to="/contact"
        className={`${base} bg-[var(--clr-contact)] hover:brightness-110`}
      >
        Contact Me
      </NavLink>
    </nav>
  );
}
