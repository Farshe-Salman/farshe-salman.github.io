const projects = [
  {
    title: "Medispring",
    desc: "ASP.NET Core Hospital Appointment System with JWT, scheduling, reports and automation.",
    tech: "ASP.NET Core, EF Core, SQL Server",
    link: "https://github.com/Farshe-Salman/Medispring-Hospital-Appointment-System"
  },
  {
    title: "Patient Health Nexus",
    desc: "Complete healthcare system with appointments, pharmacy, diagnostics, payments and admin dashboard.",
    tech: "C#, MySQL",
    link: "https://github.com/Farshe-Salman/Patient-Health-Nexus"
  },
  {
    title: "HNMS",
    desc: "Web-based healthcare system for patient-doctor interaction and management.",
    tech: "HTML, CSS, JS, PHP",
    link: "https://github.com/Farshe-Salman/Health_Navigation_and_Management_System-HNMS"
  },
  {
    title: "Synapse Boutique Shop",
    desc: "Java GUI based boutique shop system with product browsing and ordering.",
    tech: "Java GUI",
    link: "https://github.com/Farshe-Salman/Synapse_Boutiuqe_Shop"
  },
  {
    title: "DualScape",
    desc: "2D OpenGL project showing city & village scenes with real-time keyboard switching (C/V).",
    tech: "C++, OpenGL",
    link: "https://github.com/Farshe-Salman/DualScape-Computer-Graphics-"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 text-center">

      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((p, i) => {

          // 🔥 last item center (DualScape)
          if (i === projects.length - 1) {
            return (
              <div key={i} className="md:col-span-2 flex justify-center">

                <div className="relative group w-full md:w-1/2 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">

                  <div className="p-6 transition duration-300 group-hover:opacity-0">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-400 mt-2">{p.tech}</p>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-center">

                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>

                    <p className="text-gray-300 text-sm mb-4">
                      {p.desc}
                    </p>

                    <a
                      href={p.link}
                      target="_blank"
                      className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:scale-105 transition"
                    >
                      View on GitHub
                    </a>

                  </div>

                </div>

              </div>
            );
          }

          // 🔹 normal cards
          return (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300"
            >

              <div className="p-6 transition duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 mt-2">{p.tech}</p>
              </div>

              <div className="absolute inset-0 bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-center">

                <h3 className="text-xl font-bold mb-2">{p.title}</h3>

                <p className="text-gray-300 text-sm mb-4">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:scale-105 transition"
                >
                  View on GitHub
                </a>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Projects;