import { useState } from "react";
import {
  SiTailwindcss,
  SiLit,
  SiFigma,
  SiGit,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaCode } from "react-icons/fa";
import type { JSX } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
  level: "Avanzado" | "Intermedio" | "Básico";
  brandColor: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Core",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, level: "Avanzado", brandColor: "#F7DF1E" },
      { name: "HTML5", icon: <SiHtml5 />, level: "Avanzado", brandColor: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, level: "Avanzado", brandColor: "#1572B6" },
      { name: "React", icon: <FaReact />, level: "Avanzado", brandColor: "#61DAFB" },
    ],
  },
  {
    category: "Web Components & Design System",
    skills: [
      { name: "LitElement", icon: <SiLit />, level: "Avanzado", brandColor: "#325FFF" },
      { name: "Cells (BBVA)", icon: <FaCode />, level: "Avanzado", brandColor: "#1973B8" },
    ],
  },
  {
    category: "Herramientas & Estilos",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Avanzado", brandColor: "#06B6D4" },
      { name: "Git", icon: <SiGit />, level: "Avanzado", brandColor: "#F05032" },
      { name: "Vite", icon: <SiVite />, level: "Intermedio", brandColor: "#646CFF" },
      { name: "Figma", icon: <SiFigma />, level: "Intermedio", brandColor: "#F24E1E" },
    ],
  },
];

const levelStyle: Record<Skill["level"], string> = {
  Avanzado: "bg-blue-500/20   text-blue-300   border-blue-500/30",
  Intermedio: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Básico: "bg-gray-600/20   text-gray-400   border-gray-600/30",
};

const SkillCard = ({ name, icon, level, brandColor }: Skill) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={hovered ? { borderColor: `${brandColor}55` } : undefined}
      className="flex flex-col items-center gap-2 bg-[#0f0f23] border border-gray-700/50 rounded-xl p-4 transition-all duration-300 cursor-default"
    >
      <span
        style={{ color: hovered ? brandColor : undefined }}
        className="text-3xl text-gray-400 transition-colors duration-300"
      >
        {icon}
      </span>

      <span className="text-sm font-medium text-white text-center leading-tight">
        {name}
      </span>

      <span
        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelStyle[level]}`}
      >
        {level}
      </span>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="py-16 text-white bg-[#080815] overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          <FaCode className="text-blue-400" /> Skills
        </h2>

        <div className="flex flex-col gap-10">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
