import React from "react";
import { AnimatedTooltip } from "../components/AnimatedToolTip";
import AnimatedOnScroll from "../components/AnimatedOnScroll";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { src: "/icons/html.svg", title: "HTML" },
      { src: "/icons/css.svg", title: "CSS" },
      { src: "/icons/reactjs.svg", title: "React" },
      { src: "/icons/tailwindcss.svg", title: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { src: "/icons/node-js.svg", title: "Node.js" },
      { src: "/icons/express.svg", title: "Express.js" },
      { src: "/icons/mongodb.svg", title: "MongoDB" },
    ],
  },
  {
    category: "Programming Tools",
    skills: [
      { src: "/icons/git.svg", title: "Git" },
      { src: "/icons/github.svg", title: "GitHub" },
      { src: "/icons/postman.svg", title: "Postman" },
    ],
  },
  {
    category: "Programming Skills",
    skills: [
      { src: "/icons/c.svg", title: "C" },
      { src: "/icons/cpp.svg", title: "Cpp" },
      { src: "/icons/js.svg", title: "JavaScript" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen py-16 px-5 md:px-20">
      <AnimatedOnScroll animation="fade-left">
        <h2
          className="text-5xl font-bold text-center mb-6 p-3"
          style={{
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Skills
        </h2>
      </AnimatedOnScroll>
      <AnimatedOnScroll animation="fade-right">
        <div className="flex justify-center py-5">
          <div className="grid gap-14 grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-full max-w-screen-lg">
            {skillsData.map((section, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border-2 border-gray-700 flex flex-col items-center bg-black/10"
                style={{ boxShadow: "0 1px 10px rgba(0, 112, 255, 0.4)" }}
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
                  {section.category}
                </h3>

                {/* Add flex-wrap here for skills container */}
                <div className="flex flex-wrap gap-8 justify-center w-full">
                  {section.skills.map((skill, i) => (
                    <AnimatedTooltip
                      key={`${section.category}-${i}`}
                      items={[
                        {
                          id: `${section.category}-${i}`,
                          name: skill.title,
                          image: skill.src,
                          designation: section.category,
                        },
                      ]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Skills;
