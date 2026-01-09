import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Multidisciplinary Online Course",
      tech: "ReactJS, NodeJS, MongoDB, Firebase",
      link: "https://github.com/nhviet17112003/MultipleCourse",
      responsibilities: [
        "Developed both backend and frontend features as a Full-stack Developer.",
        "Designed RESTful APIs using NodeJS to handle course management, user authentication, and enrollment.",
        "Implemented frontend interfaces using ReactJS with responsive layouts and dynamic course filtering.",
        "Integrated Firebase for real-time notifications and updates.",
        "Designed MongoDB schemas to manage courses, users, and progress tracking efficiently.",
        "Performed unit and integration testing to ensure feature reliability.",
        "Optimized API queries and frontend rendering for better performance.",
        "Collaborated with UI/UX designer to improve user experience and interactive course features.",
      ],
      achievements: [
        "Successfully implemented multi-course enrollment system with real-time progress tracking.",
        "Reduced API response time by 30% through query optimization.",
        "Enhanced frontend responsiveness and accessibility for desktop and mobile users.",
      ],
    },
    {
      title: "VieFood Android App",
      tech: "Java, XML, Firebase Realtime DB",
      link: "https://github.com/nhviet17112003/VieFood-App",
      responsibilities: [
        "Developed Android app frontend and backend logic using Java and XML.",
        "Implemented Firebase Realtime Database to manage menu items, orders, and user profiles.",
        "Designed interactive UI screens for browsing menu, placing orders, and tracking delivery status.",
        "Handled user authentication and session management.",
        "Integrated push notifications for order updates.",
        "Performed testing across multiple devices to ensure stability and performance.",
      ],
      achievements: [
        "Delivered a fully functional food ordering app with real-time order updates.",
        "Improved order handling efficiency by implementing local caching and offline support.",
        "Received positive feedback from testers for smooth navigation and intuitive UI.",
      ],
    },
    {
      title: "Book Store System",
      tech: "ReactJS, React Native, NodeJS, MongoDB",
      link: "https://github.com/nhviet17112003/Book-Store-Project",
      responsibilities: [
        "Built a full-stack book store system with web and mobile versions.",
        "Developed backend APIs using NodeJS to manage books, users, orders, and payments.",
        "Created ReactJS web frontend and React Native mobile frontend for seamless user experience.",
        "Implemented shopping cart, order processing, and payment integration features.",
        "Optimized MongoDB queries and indexes for fast data retrieval.",
        "Integrated user authentication, role-based access control, and profile management.",
        "Performed end-to-end testing and debugging for both web and mobile platforms.",
      ],
      achievements: [
        "Delivered cross-platform system enabling web and mobile purchases.",
        "Enhanced performance and stability through database optimization and efficient API design.",
        "Implemented intuitive UI for easy browsing, ordering, and account management.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-pink-500 mb-10 ">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setActiveProject(project)}
              className="bg-black/70 p-6 rounded-2xl card-hover border border-white/10 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <h4 className="font-semibold text-xl mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 hover:underline"
              >
                View Repository →
              </a>
              <p className="mt-3 text-pink-400 text-sm">
                Click for full details →
              </p>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 max-w-4xl w-full rounded-2xl p-8 border border-white/10 shadow-[0_0_40px_rgba(236,72,153,0.3)] animate-fadeIn overflow-y-auto max-h-[90vh]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-2xl font-bold text-pink-500">
                  {activeProject.title}
                </h4>
                <p className="text-gray-400 mb-3">{activeProject.tech}</p>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-400 hover:underline text-sm"
                >
                  View Repository →
                </a>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-gray-400 hover:text-pink-500 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <h5 className="text-pink-400 font-semibold mb-3">
              Responsibilities:
            </h5>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              {activeProject.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h5 className="text-pink-400 font-semibold mb-3">Achievements:</h5>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {activeProject.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
