function Education() {
  return (
    <section id="education" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Education</h2>

      <div className="space-y-6 max-w-3xl mx-auto text-left">

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold">BSc in Computer Science & Engineering</h3>
          <p>American International University-Bangladesh (AIUB)</p>
          <p>2022 - 2026 (Expected)</p>
          <p className="text-green-400">CGPA: 3.94 / 4.00</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold">Higher Secondary Certificate (HSC)</h3>
          <p>Cantonment College, Jashore</p>
          <p>GPA: 5.00</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition duration-300">
          <h3 className="font-semibold">Secondary School Certificate (SSC)</h3>
          <p>Shaplakali Adarsha Secondary School</p>
          <p>GPA: 5.00</p>
        </div>

      </div>
    </section>
  );
}

export default Education;