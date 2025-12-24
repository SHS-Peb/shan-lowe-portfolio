import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const base =
    "px-6 py-2 rounded-full border-2 border-white shadow-sm transition-all duration-200 hover:shadow-md backdrop-blur-md whitespace-nowrap";

  const [techOpen, setTechOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);

  // Close mobile menu on escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileTechOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // helper for mobile link click
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileTechOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-6 px-6 md:px-10 flex justify-center text-ink font-medium relative">
      {/* Desktop nav (pills) */}
      <div className="hidden md:flex justify-center gap-8">
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
          <Link
            to="/code-developer"
            className={`${base} bg-[var(--clr-tech)] hover:brightness-110 block`}
          >
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

        {/* Contact Me */}
        <NavLink
          to="/contact"
          className={`${base} bg-[var(--clr-contact)] hover:brightness-110`}
        >
          Contact Me
        </NavLink>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden w-full flex justify-between items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center w-12 h-12 rounded-3xl bg-white/30 border-2 border-white shadow-sm backdrop-blur-md"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {/* Hamburger -> X */}
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-[#3a3a3a] transition-transform duration-200 origin-center
                ${mobileOpen ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-[#3a3a3a] transition-opacity duration-200
                ${mobileOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-[#3a3a3a] transition-transform duration-200 origin-center
                ${mobileOpen ? "-rotate-45" : "translate-y-2"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop click to close */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="fixed inset-0 top-[84px] bg-black/20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 md:hidden w-[92%] max-w-md"
            >
              <div className="bg-white/25 backdrop-blur-md border-2 border-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.18)] p-4 flex flex-col gap-3">
                <NavLink
                  to="/"
                  onClick={closeMobile}
                  className={`${base} bg-[var(--clr-home)] hover:brightness-110 text-center`}
                >
                  Home
                </NavLink>

                {/* Mobile “Code Developer” with collapsible sublinks */}
                <button
                  type="button"
                  onClick={() => setMobileTechOpen((v) => !v)}
                  className={`${base} bg-[var(--clr-tech)] hover:brightness-110 text-center`}
                >
                  Code Developer{" "}
                  <span className="opacity-70">
                    {mobileTechOpen ? "▲" : "▼"}
                  </span>
                </button>

                <AnimatePresence>
                  {mobileTechOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pl-2"
                    >
                      <Link
                        to="/code-developer"
                        onClick={closeMobile}
                        className={`${base} bg-[var(--clr-tech)] hover:brightness-110 text-center`}
                      >
                        Main
                      </Link>

                      <Link
                        to="/code-developer#projects"
                        onClick={closeMobile}
                        className={`${base} bg-[var(--clr-tech)] hover:brightness-110 text-center`}
                      >
                        Projects
                      </Link>

                      <Link
                        to="/code-developer#spotlight"
                        onClick={closeMobile}
                        className={`${base} bg-[var(--clr-tech)] hover:brightness-110 text-center`}
                      >
                        Spotlight
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <NavLink
                  to="/advocacy"
                  onClick={closeMobile}
                  className={`${base} bg-[var(--clr-advocacy)] hover:brightness-110 text-center`}
                >
                  Advocacy
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={closeMobile}
                  className={`${base} bg-[var(--clr-contact)] hover:brightness-110 text-center`}
                >
                  Contact Me
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
