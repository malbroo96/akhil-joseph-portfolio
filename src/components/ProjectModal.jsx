import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-w-6xl w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061022]/90 to-[#071124]/80 shadow-2xl backdrop-blur-xl">
        <div className="grid md:grid-cols-3">
          {/* Left: Project Image */}
          <div className="h-64 overflow-hidden md:h-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-90"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between p-6 md:col-span-2">
            <div>
              <h4 className="text-xl font-bold text-cyan-200">{project.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{project.long}</p>

              {project.badges?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md border border-cyan-300/25 bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-cyan-400/20 bg-white/5 px-2 py-1 text-xs text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.highlights?.length > 0 && (
                <div className="mt-5 space-y-2">
                  <h5 className="text-sm font-semibold text-cyan-100">Key Features</h5>
                  <ul className="space-y-1 text-sm text-gray-200">
                    {project.highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.impact && (
                <p className="mt-4 rounded-lg border border-purple-300/20 bg-purple-400/5 p-3 text-sm text-purple-100">
                  Impact: {project.impact}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 px-4 py-2 text-sm font-semibold transition hover:scale-105"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-[#0e1627]/50 px-4 py-2 text-sm hover:bg-white/5"
              >
                GitHub
              </a>

              <button
                onClick={onClose}
                className="rounded-lg bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
