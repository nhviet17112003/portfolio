import avatar from "../assets/viet.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] md:w-[520px] h-[420px] md:h-[520px] bg-pink-500/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[460px] md:w-[600px] h-[460px] md:h-[600px] bg-purple-500/25 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center lg:text-left">
            <p className="text-pink-500 font-semibold tracking-widest mb-4 text-sm md:text-base">
              HELLO, I’M
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Nguyen Hoang{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Viet
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6">
              <span className="text-pink-500 font-semibold">
                Full-stack Developer
              </span>{" "}
              & Problem Solver
            </p>

            <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              I design and build{" "}
              <span className="text-white font-medium">scalable</span>,{" "}
              <span className="text-white font-medium">secure</span>, and{" "}
              <span className="text-white font-medium">maintainable</span>{" "}
              applications with real-world experience in enterprise and
              outsourcing environments.
            </p>

            {/* ===== CTA ===== */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <a
                href="#experience"
                className="
                  px-7 py-3 md:px-8 md:py-4 rounded-xl font-semibold
                  bg-gradient-to-r from-pink-500 to-purple-500
                  shadow-[0_0_35px_rgba(236,72,153,0.6)]
                  hover:shadow-[0_0_55px_rgba(168,85,247,0.8)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View Work Experience
              </a>

              <a
                href="#contact"
                className="
                  px-7 py-3 md:px-8 md:py-4 rounded-xl font-semibold
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

          {/* ===== RIGHT AVATAR ===== */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30 rounded-full" />

            <div
              className="
                relative w-64 h-80 sm:w-72 sm:h-96
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_50px_rgba(236,72,153,0.4)]
                hover:scale-105
                transition-transform duration-300
                flex items-center justify-center
              "
            >
              <img
                src={avatar}
                alt="Nguyen Hoang Viet"
                className="
                  w-52 h-52 sm:w-60 sm:h-60
                  object-cover rounded-2xl
                  border-4 border-black
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
