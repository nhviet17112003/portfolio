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
        "Payment gateway integration",
        "Database optimization and deployment",
        "Code versioning & CI/CD workflow",
        "Collaboration with QA and PM teams",
      ],
      details: [
        "Participated in multiple outsourcing projects as a Full-stack Developer, handling everything from requirement analysis, system design, development, to deployment.",
        "Analyzed client requirements and translated business workflows into efficient, maintainable technical solutions.",
        "Developed backend APIs using NodeJS, implementing business logic, authentication, data validation, and payment processing workflows.",
        "Integrated multiple payment gateways (e.g., Stripe, PayPal, local banking APIs) into applications to facilitate secure and reliable customer transactions.",
        "Built dynamic and responsive frontend features using ReactJS, integrating them seamlessly with backend APIs and payment modules through Axios.",
        "Designed and optimized MongoDB schemas for performance, scalability, and data integrity across projects.",
        "Implemented full-stack features including user management, reporting dashboards, workflow automation, and payment transaction tracking.",
        "Deployed systems on cloud and on-premise servers, monitored logs, troubleshot issues, and provided post-deployment support.",
        "Performed comprehensive testing including unit, integration, end-to-end, and payment flow testing using Postman and automated scripts.",
        "Collaborated closely with QA engineers and project managers to ensure timely delivery and high-quality standards.",
        "Used Git for version control and implemented CI/CD pipelines to automate builds, tests, and deployments.",
        "Worked in agile development environment, participated in daily stand-ups, sprint planning, and code reviews.",
        "Gained practical experience in full-stack problem-solving, system architecture, secure payment integration, and enterprise software delivery.",
      ],
    },
    {
      title: "IT Production",
      company: "Thuan Phong Express (J&T)",
      time: "02/2025 – Present",
      short: [
        "Full-stack development with PHP & frontend frameworks",
        "CRM system maintenance and optimization",
        "Employee QR code management system",
        "Inventory & warehouse management system",
        "Database design, backup & synchronization",
        "Dashboard and reporting tool development",
        "IT infrastructure & enterprise operations support",
      ],
      details: [
        "Monitored and maintained CRM server systems to ensure high availability, stable performance, and minimal downtime.",
        "Developed full-stack solutions using PHP for backend business logic and integrated frontend interfaces for internal tools and dashboards.",
        "Designed and implemented an employee QR code system, embedding individual staff data into QR codes for ID cards, enabling instant access to employee information upon scanning.",
        "Built a comprehensive inventory and warehouse management system, including stock tracking, real-time updates, automated alerts, and reporting dashboards to optimize warehouse operations.",
        "Managed and developed a comprehensive HR dashboard, including attendance reporting, shift scheduling, and work calendars; oversaw personnel management by region with role-based access control; administered branch offices, seasonal, and outsourced staff, ensuring operational efficiency and optimized resource allocation.",
        "Enhanced frontend components for HR, logistics, and inventory modules using HTML, CSS, JavaScript, and modern frontend practices.",
        "Designed, optimized, and maintained MySQL and SQL Server databases, ensuring data integrity, security, and fast query performance.",
        "Establish a system for assigning permissions to users based on hierarchical levels and departments within the software.",
        "Implemented data synchronization between multiple databases and automated periodic backups to prevent data loss.",
        "Created dashboards and reporting tools to visualize employee activities, logistics metrics, warehouse stock levels, and system usage in real-time.",
        "Software configuration for automatic and semi-automatic conveyor belt sorting machines for post offices and transit sorting warehouses.",
        "Worked closely with operations teams to identify workflow bottlenecks and implement software automation solutions, improving efficiency and reducing errors.",
        "Troubleshot conveyor belt systems, automated sorting machines, and IT hardware to maintain smooth operations.",
        "Resolved software and connectivity issues on thermal printers, barcode scanners, and CCTV systems, ensuring uninterrupted service.",
        "Designed and deployed IT layouts for new post offices, including LAN, Wi-Fi, CCTV networks, and workstation setups.",
        "Guided hardware and software upgrades to enhance system reliability and maintainability.",
        "Followed full software development lifecycle (SDLC) practices, including requirement analysis, system design, coding, testing, deployment, and maintenance.",
        "Utilized Git for version control and collaborated with team members to implement new features and fix bugs efficiently.",
        "Applied problem-solving skills to handle complex business logic, automate tasks, and deliver practical solutions for enterprise operations.",
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
              rounded-r-xl py-6 px-4
            "
          >
            <h4 className="text-xl font-semibold mb-1">
              {job.title} – {job.company}
            </h4>
            <p className="text-sm text-gray-400 mb-3">{job.time}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
              {job.short.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
            <p className="mt-2 text-pink-400 text-sm font-medium">
              Click to view full details →
            </p>
          </div>
        ))}
      </div>

      {activeJob && (
        <div
          onClick={() => setActiveJob(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-zinc-900 max-w-4xl w-full rounded-2xl p-8
              border border-white/10
              shadow-[0_0_40px_rgba(236,72,153,0.3)]
              animate-fadeIn overflow-y-auto max-h-[90vh]
            "
          >
            <div className="flex justify-between items-start mb-6">
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
                className="text-gray-400 hover:text-pink-500 text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <h5 className="text-pink-400 font-semibold mb-3">
              Key Responsibilities:
            </h5>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              {activeJob.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <h5 className="text-pink-400 font-semibold mb-3">
              Highlights & Achievements:
            </h5>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Contributed solutions that improved system performance and
                reduced downtime.
              </li>
              <li>
                Recognized for delivering new features quickly and efficiently
                resolving system issues.
              </li>
              <li>
                Learned and applied new technologies, enhancing full-stack
                development skills.
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
