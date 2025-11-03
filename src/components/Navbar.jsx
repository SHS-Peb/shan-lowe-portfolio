import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "px-6 py-2 rounded-full border-2 border-white shadow-sm transition-all duration-200 hover:shadow-md backdrop-blur-md";

  return (
    <nav className="w-full py-6 px-10 flex justify-center gap-8 text-ink font-medium">
      <NavLink
        to="/"
        className={`${base} bg-[var(--clr-home)] hover:brightness-110`}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={`${base} bg-[var(--clr-tech)] hover:brightness-110`}
      >
        Tech & Code
      </NavLink>

      <NavLink
        to="/advocacy"
        className={`${base} bg-[var(--clr-advocacy)] hover:brightness-110`}
      >
        Advocacy
      </NavLink>

      <NavLink
        to="/creative"
        className={`${base} bg-[var(--clr-creative)] hover:brightness-110`}
      >
        Creative Work
      </NavLink>

      <NavLink
        to="/blog"
        className={`${base} bg-[var(--clr-blog)] hover:brightness-110`}
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={`${base} bg-[var(--clr-contact)] hover:brightness-110`}
      >
        Contact Me
      </NavLink>
    </nav>
  );
}

