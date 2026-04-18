import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">

      <div className="grid md:grid-cols-2 gap-24 items-center max-w-7xl">

        {/* 🔥 LEFT SIDE */}
        <div className="flex flex-col items-center text-center md:pr-10">

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="profile"
            className="w-52 h-52 rounded-full border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mt-2"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Md. Salman Farshe
          </motion.h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg text-gray-400 mt-4 block"
          />

        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="text-gray-300 leading-8 ">

          {/* About Title */}
          <h2 className="text-4xl font-bold mb-8 text-white text-center mt-6">
            About Me
          </h2>



          {/* Content */}
          <p className="text-justify">
            I am Md. Salman Farshe, a dedicated Computer Science and Engineering student
            at American International University-Bangladesh (AIUB), currently maintaining
            an outstanding academic record with a CGPA of 3.94/4.00. I have a strong
            foundation in software development with expertise in C++, C#, Java, and modern
            frameworks such as Spring Boot, ASP.NET, and React.
          </p>

          <p className="mt-4 text-justify">
            I specialize in building scalable and real-world applications, particularly in
            healthcare systems. My projects demonstrate experience in full-stack development,
            RESTful API design, database management, authentication systems, and clean
            architectural patterns such as N-Tier architecture.
          </p>

          <p className="mt-4 text-justify">
            Currently, I am working as an Academic Intern at Metafour Ltd, where I am gaining
            practical industry experience across QA, operations, and software development.
            This role has strengthened my understanding of real-world development workflows,
            testing strategies, and production-level systems.
          </p>

          <p className="mt-4 text-justify">
            I am passionate about problem-solving, system design, and continuously learning
            new technologies. My goal is to become a skilled full-stack developer and contribute
            to impactful, large-scale software solutions.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;