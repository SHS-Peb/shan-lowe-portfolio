import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const bgByRoute = [
  { prefix: "/code-developer", bg: "page-bg-blue" },
  { prefix: "/advocacy", bg: "page-bg-pink" },
  { prefix: "/contact", bg: "page-bg-green" },
  { prefix: "/", bg: "bg-home-gradient" },
];

export default function Layout() {
  const { pathname } = useLocation();

  const match = bgByRoute.find((r) => pathname.startsWith(r.prefix));
  const bgClass = match?.bg ?? "bg-home-gradient";

  return (
    <div className={`min-h-screen w-full bg-dots ${bgClass}`}>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
