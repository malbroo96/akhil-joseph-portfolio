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
      "Full-stack health tracking app with workout logging, nutrition insights, and AI-based food analysis.",
    long: "Built HabitFlow, a full-stack health tracking app with workout logging, nutrition insights, and AI-based food analysis using secure JWT authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: habitFlowImg,
    link: "https://github.com/malbroo96/HabitFlow",
    deploy: "https://habit-flow-new.vercel.app/",
  },
  {
    title: "Loan Manager",
    short:
      "Loan management system with multi-step forms, real-time status tracking, and secure financial data handling.",
    long: "Developed a loan management system with multi-step forms, real-time status tracking, backend validation, and secure APIs for sensitive financial data.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: loanManagerImg,
    link: "https://github.com/malbroo96/loan-manager",
    deploy: "https://masai-react-five.vercel.app",
  },
  {
    title: "FinanceApp",
    short:
      "Personal finance dashboard for expense tracking, category-based insights, and interactive data visualization.",
    long: "Built a personal finance dashboard for expense tracking, category-based insights, and interactive data visualization using real-time cloud storage.",
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
