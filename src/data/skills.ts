import type { IconType } from "react-icons";
import {
  SiBruno,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLit,
  SiMysql,
  SiNodedotjs,
  SiPolymerproject,
  SiPostman,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiLayers,
  FiRefreshCw,
  FiServer,
} from "react-icons/fi";

interface Skill {
  name: string;
  icon: IconType;
}
interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const specialtySkills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "LitElement · Lit 2/3", icon: SiLit },
  { name: "Cells Framework", icon: FiLayers },
];
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Polymer", icon: SiPolymerproject },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SCSS", icon: SiSass },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Calidad y testing",
    skills: [
      { name: "Pruebas unitarias", icon: FiCheckCircle },
      { name: "Pruebas E2E", icon: FiCode },
      { name: "Refactorización", icon: FiRefreshCw },
    ],
  },
  {
    category: "Backend y datos",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FiDatabase },
      { name: "APIs REST", icon: FiServer },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "Jira", icon: SiJira },
      { name: "Postman", icon: SiPostman },
      { name: "Bruno", icon: SiBruno },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
