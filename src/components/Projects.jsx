import React from "react";

export default function Projects({ projects, onOpen }) {
  return (
    <section id="projects" className="space-y-12 py-20">
      <div className="text-center space-y-2">
        <h3 className="text-4xl font-bold bg-clip-text text-transparent   bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300">
          {" "}
          Featured Projects{" "}
        </h3>
        <p className="text-sm text-gray-400">
          {" "}
          Interactive • Scalable • Production Ready{" "}
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10   md:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={i}
            className={`group relative rounded-2xl overflow-hidden border border-cyan-300/20 bg-linear-to-br from-[#05060a]/70 to-[#071124]/70 p-0 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-cyan-500/20 ${
              p.featured ? "md:col-span-2 ring-1 ring-cyan-300/30" : ""
            }`}
          >
            {/* Project Thumbnail */}
            {p.featured && (
              <span className="absolute left-4 top-4 z-10 rounded-full border border-yellow-300/40 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-100 backdrop-blur">
                Featured
              </span>
            )}

            <div className="relative aspect-video w-full overflow-hidden bg-gray-900/20">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-[#02050c]/80 via-transparent to-transparent" />
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
              />
            </div>

            {/* Details Panel */}
            <div className="p-6 relative bg-[#050a14]/60 backdrop-blur-xl">
              <h4 className="text-lg font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-200">{p.short}</p>

              {/* Tech chips */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-white/5 text-xs text-cyan-200 border border-cyan-300/20"
                  >
                    {" "}
                    {t}{" "}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpen(i)}
                  className="px-3 py-2 rounded-lg bg-linear-to-br from-cyan-500 to-purple-600 text-sm font-semibold shadow-lg transition hover:scale-105"
                >
                  Details
                </button>

                <div className="flex items-center gap-3">
                  {p.deploy && (
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-gray-200 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
