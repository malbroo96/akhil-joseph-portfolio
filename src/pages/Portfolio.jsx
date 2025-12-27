import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProjectModal from "../components/ProjectModal";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import GitHub from "../components/Github";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Import project screenshots
import habitFlowImg from "../assets/habbit flow.png";
import loanManagerImg from "../assets/loan manager.png";
import financeAppImg from "../assets/finance app.png";
import todoImg from "../assets/todo.png";

const projectsData = [
  {
    title: "HabitFlow",
    short:
      "Nutrition & workout tracker with real-time food insights and secure JWT authentication.",
    long: "Built HabitFlow, a nutrition & workout tracker with real-time food insights and secure JWT authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: habitFlowImg,
    link: "https://github.com/malbroo96/habit-flow",
    deploy: "https://habit-flow-new.vercel.app/",
  },
  {
    title: "Loan Manager",
    short:
      "Multi-step forms, live status tracking, and document verification workflow.",
    long: "Developed a Loan Manager with multi-step forms, live status tracking, and document verification workflow.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: loanManagerImg,
    link: "https://github.com/malbroo96/loan-manager",
    deploy: "https://masai-react-five.vercel.app",
  },
  {
    title: "FinanceApp",
    short:
      "Live market news, expense tracking, category insights, and interactive data charts.",
    long: "Created FinanceApp with live market news, expense tracking, category insights, and interactive data charts.",
    tech: ["React", "Firebase", "Chart.js"],
    image: financeAppImg,
    link: "https://github.com/malbroo96/finance-app",
    deploy: "https://delightful-sprinkles-8e91a9.netlify.app/index.html",
  },
  {
    title: "Todo CRUD App",
    short:
      "MERN-based Todo CRUD app with REST APIs, MongoDB storage, responsive UI.",
    long: "Built a MERN-based Todo CRUD app with REST APIs, MongoDB storage, responsive UI, and improved error handling.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: todoImg,
    link: "https://github.com/malbroo96/todo-app",
    deploy: "https://todo-snowy-pi-91.vercel.app/",
  },
];

const skillsData = [
  "Data Structures",
  "Algorithms",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "REST APIs",
  "MySQL",
  "Spring",
];
const toolsData = ["IntelliJ", "VSCode", "MySQL Server", "MongoDB", "Git"];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen text-gray-100 space-y-60 antialiased">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-12 space-y-60">
        <Hero />
        <Education />
        <Experience />
        <Projects projects={projectsData} onOpen={setActiveProject} />
        <Skills skills={skillsData} tools={toolsData} />
        <GitHub />
        <Contact />
        <Footer />
      </main>

      {activeProject !== null && (
        <ProjectModal
          project={projectsData[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
