import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;