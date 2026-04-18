function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold mb-2">Programming</h3>
          <p>C++, C#, Java (Strong), Python, R</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold mb-2">Frameworks</h3>
          <p>ASP.NET, .NET Core, Spring Boot, React, Thymeleaf</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold mb-2">Databases</h3>
          <p>SQL, MySQL, SQL Server, MongoDB, PostgreSQL</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold mb-2">Tools</h3>
          <p>RStudio, MATLAB, Git/GitHub, LaTeX, MS Office</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;