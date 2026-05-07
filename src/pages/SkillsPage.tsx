import { useState } from "react";
import {
  SiTailwindcss,
  SiLit,
  SiGit,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiBootstrap,
  SiGitlab,
  SiFigma,
} from "react-icons/si";
import { FaReact, FaCode, FaJava, FaNode, FaLinux, FaGithub, FaBitbucket, FaSass } from "react-icons/fa";
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
      { name: "TypeScript", icon: <SiTypescript />, level: "Avanzado", brandColor: "#3178C6" },
      { name: "HTML5", icon: <SiHtml5 />, level: "Avanzado", brandColor: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, level: "Avanzado", brandColor: "#1572B6" },
      { name: "React", icon: <FaReact />, level: "Avanzado", brandColor: "#61DAFB" },
      { name: "Node.js", icon: <FaNode />, level: "Intermedio", brandColor: "#339933" },
      { name: "Git", icon: <SiGit />, level: "Avanzado", brandColor: "#F05032" },
      { name: "Linux", icon: <FaLinux />, level: "Intermedio", brandColor: "#FCC624" },
      { name: "Python", icon: <SiPython />, level: "Intermedio", brandColor: "#3776AB" },
      { name: "Java", icon: <FaJava />, level: "Intermedio", brandColor: "#ED8B00" },
      { name: "C++", icon: <SiCplusplus />, level: "Intermedio", brandColor: "#00599C" },
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
    category: "Frameworks & Diseño",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Avanzado", brandColor: "#06B6D4" },
      { name: "SCSS", icon: <FaSass />, level: "Avanzado", brandColor: "#CC6699" },
      { name: "Bootstrap", icon: <SiBootstrap />, level: "Avanzado", brandColor: "#7952B3" },
      { name: "Vite", icon: <SiVite />, level: "Intermedio", brandColor: "#646CFF" },
      { name: "Figma", icon: <SiFigma />, level: "Intermedio", brandColor: "#F24E1E" },
    ],
  },
  {
    category: "Plataformas",
    skills: [
      { name: "GitHub", icon: <FaGithub />, level: "Avanzado", brandColor: "#ffffff" },
      { name: "GitLab", icon: <SiGitlab />, level: "Intermedio", brandColor: "#FC6D26" },
      { name: "Bitbucket", icon: <FaBitbucket />, level: "Intermedio", brandColor: "#0052CC" },
    ],
  },
];

const levelStyle: Record<Skill["level"], string> = {
  Avanzado: "bg-blue-500/20   text-blue-300   border-blue-500/30",
  Intermedio: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Básico: "bg-gray-600/20   text-gray-400   border-gray-600/30",
};

interface SkillsPageProps {
  isDark: boolean;
}

const SkillCard = ({ name, icon, level, brandColor, isDark }: Skill & { isDark: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const displayColor = (name === "GitHub" || name === "Linux") && !isDark ? "#111827" : brandColor;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={hovered ? { borderColor: `${displayColor}55` } : undefined}
      className={`flex flex-col items-center gap-2 border rounded-xl p-4 transition-all duration-300 cursor-default ${
        isDark ? "bg-[#0f0f23] border-gray-700/50" : "bg-white border-gray-200"
      }`}
    >
      <span
        style={{ color: displayColor }}
        className="text-3xl"
      >
        {icon}
      </span>

      <span className={`text-sm font-medium text-center leading-tight ${isDark ? "text-white" : "text-gray-800"}`}>
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

const SkillsPage = ({ isDark }: SkillsPageProps) => {
  return (
    <section
      id="skills"
      className={`py-16 overflow-hidden ${isDark ? "text-white bg-[#080815]" : "text-gray-800 bg-gray-100"}`}
    >
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          <FaCode className="text-blue-500" /> Skills
        </h2>

        <div className="flex flex-col gap-10">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: isDark ? "#6b7280" : "#9ca3af" }}>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} isDark={isDark} />
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
