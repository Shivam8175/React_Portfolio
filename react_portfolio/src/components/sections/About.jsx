import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Redux"];
  const backendSkills = [
    "JavaScript",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 bg-black text-white flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            I'm a passionate Full-Stack Developer with a strong foundation in
            Computer Science. I specialize in building dynamic, responsive, and
            user-friendly web applications using modern technologies. From
            crafting sleek frontend interfaces to developing robust backend
            services, I aim to deliver seamless digital experiences. Currently
            exploring cloud computing and scalable architectures while
            contributing to meaningful projects.
          </p>

          {/* Skills and Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Skills Card */}
            <div className="rounded-2xl border border-white/10 p-8 flex flex-col justify-center h-full hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
                🚀 Skills
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/10 text-blue-400 py-1 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-300">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-green-500/10 text-green-400 py-1 px-4 rounded-full text-sm font-medium hover:bg-green-500/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-white/10 p-8 flex flex-col justify-center h-full hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
                🎓 Education
              </h3>

              <ul className="space-y-6">
                {/* Degree Item */}
                <li className="flex items-center gap-4">
                  {" "}
                  {/* Changed from items-start to items-center */}
                  <div className="bg-blue-500/10 p-3 rounded-lg flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="text-center flex-1">
                    {" "}
                    {/* Added text-center and flex-1 */}
                    <h4 className="font-bold text-white">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-gray-400">RGPV University (2020–2024)</p>
                    <p className="text-sm text-gray-500">GPA: 8.2 / 10</p>
                  </div>
                </li>

                {/* Coursework Item */}
                <li className="flex items-center gap-4">
                  {" "}
                  {/* Changed from items-start to items-center */}
                  <div className="bg-blue-500/10 p-3 rounded-lg flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div className="text-center flex-1">
                    {" "}
                    {/* Added text-center and flex-1 */}
                    <h4 className="font-bold text-white">
                      Relevant Coursework
                    </h4>
                    <p className="text-gray-400">
                      Data Structures, Algorithms, Web Development, Cloud
                      Computing, Database Systems
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
