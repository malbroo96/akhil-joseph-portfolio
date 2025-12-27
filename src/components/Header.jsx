import React, { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg flex items-center justify-center text-gray-900 font-extrabold">
            AJ
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Akhil Joseph
            </h1>
            <p className="text-xs text-cyan-300/80">Full-Stack Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide text-gray-300">
          <a href="#hero" className="hover:text-cyan-300 transition">
            Home
          </a>
          <a href="#education" className="hover:text-cyan-300 transition">
            Education
          </a>
          <a href="#projects" className="hover:text-cyan-300 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-300 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-cyan-300 transition">
            Skills
          </a>
          <a href="#github" className="hover:text-cyan-300 transition">
            Github
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition">
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md bg-gradient-to-br from-[#0f172a]/50 to-[#04203a]/30"
          >
            <div className="flex flex-col justify-center items-center w-5 h-5 space-y-1">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/40">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-2">
            <a
              onClick={() => setMobileOpen(false)}
              href="#hero"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Home
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#education"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Education
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#projects"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Projects
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#experience"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Experience
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#skills"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Skills
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#github"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Github
            </a>
            <a
              onClick={() => setMobileOpen(false)}
              href="#contact"
              className="py-2 px-3 rounded hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
