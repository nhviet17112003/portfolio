export default function Skills() {
  const skills = [
    "ReactJS",
    "Tailwind CSS",
    "NodeJS",
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
    <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h3 className="text-4xl font-extrabold mb-10">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h3>

        {/* Skill list */}
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                relative px-5 py-3 rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                text-sm font-medium
                transition-all duration-300
                hover:scale-110 hover:border-pink-500/50
                hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
                cursor-default
              "
            >
              {/* glow layer */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 blur-lg transition-opacity duration-300 hover:opacity-20"></span>

              <span className="relative z-10">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
