import avatar from "../assets/viet.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-pink-500/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/25 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-pink-500 font-semibold tracking-widest mb-4">
              HELLO, I’M
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Nguyen Hoang{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Viet
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              <span className="text-pink-500 font-semibold">
                Full-stack Developer
              </span>{" "}
              & Problem Solver
            </p>

            <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-10">
              I design and build{" "}
              <span className="text-white font-medium">scalable</span>,{" "}
              <span className="text-white font-medium">secure</span>, and{" "}
              <span className="text-white font-medium">maintainable</span>{" "}
              applications with real-world experience in enterprise and
              outsourcing environments.
            </p>

            {/* ===== CTA ===== */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#experience"
                className="
                  px-8 py-4 rounded-xl font-semibold
                  bg-gradient-to-r from-pink-500 to-purple-500
                  shadow-[0_0_40px_rgba(236,72,153,0.6)]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View Work Experience
              </a>

              <a
                href="#contact"
                className="
                  px-8 py-4 rounded-xl font-semibold
                  border border-white/20
                  backdrop-blur
                  hover:border-pink-500
                  hover:text-pink-500
                  hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]
                  transition-all duration-300
                "
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30 rounded-full" />

            <div
              className="
                relative w-80 h-96
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_60px_rgba(236,72,153,0.4)]
                hover:scale-105
                transition-transform duration-300
                flex items-center justify-center
              "
            >
              <img
                src={avatar}
                alt="Nguyen Hoang Viet"
                className="
                  w-64 h-64
                  object-cover rounded-2xl
                  border-4 border-black
                "
              />

              <div className="absolute -bottom-6 px-6 py-2 rounded-full bg-black/80 border border-white/10 text-sm text-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
