export default function Skills() {
  const skills = [
    "ReactJS",
    "Tailwind CSS",
    "NodeJS",
    "PHP",
    "Java Spring",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "React Native",
    "Android",
    "Postman",
    "Jira",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <h3 className="text-4xl font-extrabold mb-12 text-center md:text-left">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h3>

        {/* ===== SKILLS GRID ===== */}
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                group relative
                px-6 py-3 rounded-2xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-sm md:text-base font-semibold
                transition-all duration-300
                hover:scale-110
                hover:border-pink-500/60
                hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]
                cursor-default
                select-none
                min-w-[110px] text-center
              "
            >
              {/* Glow layer */}
              <span
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-pink-500 to-purple-500
                  opacity-0 blur-xl
                  transition-opacity duration-300
                  group-hover:opacity-25
                "
              />

              {/* Skill text */}
              <span className="relative z-10 tracking-wide">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
