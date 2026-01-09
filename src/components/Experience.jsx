import { useState } from "react";

export default function Experience() {
  const [activeJob, setActiveJob] = useState(null);

  const jobs = [
    {
      title: "Intern & Project-based Developer",
      company: "FPT Software",
      time: "12/2023 – 11/2024",
      short: [
        "Full-stack development for outsourcing systems",
        "Backend API & business logic implementation",
        "Frontend-backend integration",
        "Database optimization and deployment",
      ],
      details: [
        "Participated in multiple outsourcing projects as a Full-stack Developer.",
        "Analyzed client requirements and converted business workflows into technical solutions.",
        "Designed RESTful APIs using NodeJS and integrated them with frontend systems.",
        "Built frontend features using ReactJS and Axios for API communication.",
        "Designed MongoDB schemas, optimized queries, and ensured data integrity.",
        "Deployed systems, monitored logs, fixed bugs, and supported post-handover maintenance.",
        "Performed manual API testing using Postman and system testing before delivery.",
      ],
    },
    {
      title: "IT Production",
      company: "Thuan Phong Express (J&T)",
      time: "06/2025 – Present",
      short: [
        "CRM system maintenance and optimization",
        "Database backup & synchronization",
        "IT infrastructure & hardware support",
        "Enterprise operations support",
      ],
      details: [
        "Monitored and maintained CRM server systems to ensure uptime and performance.",
        "Modified and optimized system logic based on business process changes.",
        "Developed new CRM features according to departmental requirements.",
        "Managed domain systems and configured user roles for shippers and post office staff.",
        "Performed periodic database backup, restoration, and data reconciliation.",
        "Handled data synchronization issues between MySQL and SQL Server.",
        "Troubleshot conveyor belt systems and automated sorting machines.",
        "Resolved thermal printer software errors and CCTV system issues.",
        "Designed IT layouts for new post offices including network and CCTV systems.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h3 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h3>

        {jobs.map((job, i) => (
          <div
            key={i}
            onClick={() => setActiveJob(job)}
            className="
              cursor-pointer border-l-4 border-pink-500 pl-6
              transition-all duration-300
              hover:translate-x-2 hover:bg-white/5
              hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]
              rounded-r-xl py-4
            "
          >
            <h4 className="text-xl font-semibold">
              {job.title} – {job.company}
            </h4>
            <p className="text-sm text-gray-400 mb-3">{job.time}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {job.short.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
            <p className="mt-3 text-pink-400 text-sm">
              Click to view details →
            </p>
          </div>
        ))}
      </div>

      {activeJob && (
        <div
          onClick={() => setActiveJob(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-zinc-900 max-w-3xl w-full rounded-2xl p-8
              border border-white/10
              shadow-[0_0_40px_rgba(236,72,153,0.3)]
              animate-fadeIn
            "
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold text-pink-500">
                  {activeJob.title}
                </h4>
                <p className="text-gray-400">
                  {activeJob.company} • {activeJob.time}
                </p>
              </div>
              <button
                onClick={() => setActiveJob(null)}
                className="text-gray-400 hover:text-pink-500 text-xl"
              >
                ✕
              </button>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {activeJob.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
