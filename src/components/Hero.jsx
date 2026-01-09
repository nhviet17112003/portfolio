import avatar from "../assets/viet.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Nguyen Hoang{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Viet
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="text-pink-500 font-semibold">
              Full-stack Developer
            </span>{" "}
            • React • Node • System
          </p>

          <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
            I build <span className="text-white">stable</span>,{" "}
            <span className="text-white">scalable</span>, and{" "}
            <span className="text-white">maintainable</span> web systems with
            hands-on experience in enterprise and outsourcing environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                px-8 py-4 rounded-xl font-semibold
                bg-gradient-to-r from-pink-500 to-purple-500
                shadow-[0_0_30px_rgba(236,72,153,0.5)]
                hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]
                hover:scale-105
                transition-all duration-300
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-8 py-4 rounded-xl font-semibold
                border border-white/20
                hover:border-pink-500
                hover:text-pink-500
                hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
                transition-all duration-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: Avatar */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30"></div>

          <div
            className="
              relative w-72 h-72 md:w-80 md:h-80
              rounded-full p-1
              bg-gradient-to-r from-pink-500 to-purple-500
              hover:scale-105
              transition-transform duration-300
            "
          >
            <img
              src={avatar}
              alt="Nguyen Hoang Viet"
              className="
                w-full h-full object-cover rounded-full
                border-4 border-black
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
