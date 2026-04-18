import { useState } from "react";
import profile from "../assets/profile.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">

      <div className="flex justify-between items-center px-6 py-4">

        {/* 🔥 Logo (Profile Image) */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={profile}
            alt="logo"
            className="w-10 h-10 rounded-full border-2 border-blue-500 hover:scale-110 transition"
          />
        </a>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">

          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

        </div>

        {/* 🔹 Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

      </div>

      {/* 🔥 Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">

          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#education" onClick={()=>setOpen(false)}>Education</a>
          <a href="#experience" onClick={()=>setOpen(false)}>Experience</a>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;