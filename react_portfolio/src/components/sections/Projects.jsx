import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import financeTimeMachine from "../../assets/financialtimemachine.png";
import portfolioImg from "../../assets/reactportfolio.png";
import voyageSync from "../../assets/voyagesync.png";

const Projects = () => {
  const projects = [
    {
      title: "Finance Time Machine",
      description:
        "A dynamic financial data visualization tool that lets users 'time travel' through historical stock prices, crypto trends, and economic indicators with an interactive timeline.",
      technologies: ["React", "Firebase", "TailwindCSS"],
      link: "https://financialtimemachine.netlify.app/",
      code: "https://github.com/Shivam8175/Masai_Unit4Hack",
      image: financeTimeMachine,
    },
    {
      title: "Portfolio",
      description:
        "A dynamic and visually appealing web application designed to showcase an individual's skills, projects, and professional achievements. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://shivamthakreportfolio.netlify.app/",
      code: "https://github.com/Shivam8175/React_Portfolio",
      image: portfolioImg,
    },
    {
      title: "VoyageSync",
      description:
        "A full-stack web application replicating the core functionality of MakeMyTrip, enabling users to search and book flights, hotels, and holiday packages with a seamless UI/UX.",
      technologies: ["React.js", "TailwindCSS", "Firebase"],
      link: "https://voyage-sync.netlify.app/",
      code: "https://github.com/Shivam8175/Unit-4_Project",
      image: voyageSync,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      🌐 View Live →
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      🛠 GitHub Repo ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
