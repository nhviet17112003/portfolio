export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-pink-500 mb-8">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Project
            title="Multidisciplinary Online Course"
            tech="ReactJS, NodeJS, MongoDB, Firebase"
            link="https://github.com/nhviet17112003/MultipleCourse"
          />

          <Project
            title="VieFood Android App"
            tech="Java, XML, Firebase Realtime DB"
            link="https://github.com/nhviet17112003/VieFood-App"
          />

          <Project
            title="Book Store System"
            tech="ReactJS, React Native, NodeJS, MongoDB"
            link="https://github.com/nhviet17112003/Book-Store-Project"
          />
        </div>
      </div>
    </section>
  );
}

function Project({ title, tech, link }) {
  return (
    <div className="bg-black/70 p-6 rounded-2xl card-hover border border-white/10">
      <h4 className="font-semibold text-xl mb-2">{title}</h4>
      <p className="text-gray-400 mb-4">{tech}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-pink-400 hover:underline"
      >
        View Repository →
      </a>
    </div>
  );
}
