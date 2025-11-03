export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 flex justify-between items-center text-ink">
      <div className="font-bold text-xl">
        Shan
      </div>

      <div className="flex items-center gap-8 opacity-80">
        <a href="/" className="hover:opacity-100 transition">Home</a>
        <a href="/projects" className="hover:opacity-100 transition">Projects</a>
        <a href="/about" className="hover:opacity-100 transition">About</a>
      </div>
    </nav>
  );
}
