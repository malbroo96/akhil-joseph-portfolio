import React from "react";

export default function GitHub() {
  return (
    <section
      id="github"
      className="py-24 flex flex-col items-center text-center space-y-12 bg-[#060b18]"
    >
      {/* Heading */}
      <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-purple-300">
        GitHub Activity
      </h3>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-4">
        {/* Card 1 */}
        <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 backdrop-blur-xl">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=malbroo96&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="w-full rounded-xl"
          />
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#0d1628]/50 border border-cyan-400/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 backdrop-blur-xl">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=malbroo96&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
