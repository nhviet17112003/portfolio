export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Nguyen Hoang Viet
        </h1>

        <div className="flex gap-6 text-sm">
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-pink-400 transition"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
