// import React from "react";

const skills = [
  {
    name: "JavaScript",
    img: "https://img.shields.io/badge/JavaScript-04010b?logo=javascript&logoColor=F0DB4F",
  },
  {
    name: "HTML",
    img: "https://img.shields.io/badge/HTML5-04010b?logo=html5&logoColor=F05C37",
  },
  {
    name: "Tailwind CSS",
    img: "https://img.shields.io/badge/Tailwind%20CSS-04010b?logo=tailwind-css&logoColor=38B2AC",
  },
  {
    name: "React",
    img: "https://img.shields.io/badge/React-04010b?logo=react&logoColor=61DAFB",
  },
  {
    name: "Node.js",
    img: "https://img.shields.io/badge/Node.js-04010b?logo=node.js&logoColor=83CD29",
  },
  {
    name: "Express",
    img: "https://img.shields.io/badge/Express-04010b?logo=express&logoColor=FFFFFF",
  },
  {
    name: "Firebase",
    img: "https://img.shields.io/badge/Firebase-04010b?logo=firebase&logoColor=F05C37",
  },
  {
    name: "MongoDB",
    img: "https://img.shields.io/badge/MongoDB-04010b?logo=mongodb&logoColor=47A248",
  },
  {
    name: "Git",
    img: "https://img.shields.io/badge/Git-04010b?logo=git&logoColor=F05C37",
  },
  {
    name: "GitHub",
    img: "https://img.shields.io/badge/GitHub-04010b?logo=github&logoColor=1D753A",
  },
  {
    name: "REST API",
    img: "https://img.shields.io/badge/REST%20API-04010b?logo=rest&logoColor=FF6B6B",
  },
];

const tools = [
  {
    name: "Git",
    img: "https://img.shields.io/badge/Git-04010b?logo=git&logoColor=F05C37",
  },
  {
    name: "GitHub",
    img: "https://img.shields.io/badge/GitHub-04010b?logo=github&logoColor=1D753A",
  },
  {
    name: "Postman",
    img: "https://img.shields.io/badge/Postman-04010b?logo=postman&logoColor=F05C37",
  },
  {
    name: "Vercel",
    img: "https://img.shields.io/badge/Vercel-04010b?logo=vercel&logoColor=white",
  },
  {
    name: "Netlify",
    img: "https://img.shields.io/badge/Netlify-04010b?logo=netlify&logoColor=FFFFFF",
  },
  {
    name: "MongoDB Compass",
    img: "https://img.shields.io/badge/MongoDB%20Compass-04010b?logo=mongodb&logoColor=47A248",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-30 w-full  mx-0 px-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center  text-3xl md:text-4xl font-bold text-cyan-300 mb-12">
          {" "}
          Technical Expertise{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-15 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" skill-badge  bg-[#0d1323]  border border-cyan-500/30  shadow-[0_0_20px_rgba(0,255,255,0.15)]   p-4 rounded-xl flex items-center justify-center  hover:border-cyan-400  hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-28 h-20 object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        <h2 className="text-center  text-3xl md:text-4xl font-bold text-cyan-300 mb-12">
          Tech Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className=" skill-badge  bg-[#0d1323]  border border-cyan-500/30  shadow-[0_0_20px_rgba(0,255,255,0.15)]   p-4 rounded-xl flex items-center justify-center  hover:border-cyan-400  hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 "
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
