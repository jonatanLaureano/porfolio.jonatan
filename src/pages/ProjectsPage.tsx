import { FaCode, FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import type { JSX } from "react";

interface TechConfig {
  color: string;
  icon: JSX.Element;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  codeLink?: string;
  previewLink: string;
}

const techConfig: Record<string, TechConfig> = {
  React: { color: "#61DAFB", icon: <FaReact /> },
  "Tailwind CSS": { color: "#06B6D4", icon: <SiTailwindcss /> },
  TypeScript: { color: "#3178C6", icon: <SiTypescript /> },
};

const projects: Project[] = [
  {
    id: "sgi",
    title: "Sistema de Gestión de Inventario",
    description:
      "Aplicación React para administrar eficientemente el stock de productos. Incluye dashboard de métricas, CRUD completo y filtros avanzados. Diseñado en Figma e implementado con TypeScript y TailwindCSS.",
    image: "/img/Proyecto2.PNG",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/SGI-FRONTEND-SA",
    previewLink: "https://sgi-frontend-sa.vercel.app/",
  },
  {
    id: "arena",
    title: "Arena FreeStyle — Plataforma de Venta de Tickets",
    description:
      "Plataforma moderna para la gestión y venta de tickets de eventos. Diseño responsivo con React, TypeScript y TailwindCSS. Arquitectura escalable con separación de responsabilidades y consumo de APIs.",
    image: "/img/Proyecto1.PNG",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/TicketFlow",
    previewLink: "https://furia-plumada-frontend.vercel.app/",
  },
];

const TechBadge = ({ tech }: { tech: string }) => {
  const config = techConfig[tech];
  return (
    <span
      className="px-2.5 py-1 text-xs font-medium flex items-center gap-1.5 rounded-md border bg-white/10"
      style={{ borderColor: config?.color, color: config?.color }}
    >
      <span style={{ color: config?.color }}>{config?.icon ?? "🔧"}</span> {tech}
    </span>
  );
};

interface ProjectsPageProps {
  isDark: boolean;
}

const ProjectsPage = ({ isDark }: ProjectsPageProps) => {
  return (
    <section
      id="projects"
      className={`py-16 overflow-hidden ${isDark ? "text-white bg-[#0a0a1a]" : "text-gray-800 bg-white"}`}
    >
      <div className="max-w-5xl w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          <FaCode className="text-blue-500" /> Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg group ${
                isDark
                  ? "bg-[#0f0f23] border-gray-700/50 hover:border-blue-500/40 hover:shadow-blue-900/20"
                  : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-200/30"
              }`}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? "from-[#0f0f23]" : "from-white"
                } via-transparent to-transparent`} />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold leading-snug" style={{ color: isDark ? "#fff" : "#111" }}>
                  {project.title}
                </h3>
                <p className={`text-sm mt-2 leading-relaxed flex-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-colors"
                      style={{
                        borderColor: isDark ? "#6b7280" : "#d1d5db",
                        color: isDark ? "#fff" : "#374151",
                        backgroundColor: isDark ? "rgba(55, 65, 81, 0.6)" : "#f3f4f4",
                      }}
                    >
                      <FaGithub style={{ color: isDark ? "#fff" : "#24292f" }} /> Código
                    </a>
                  )}
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors text-white"
                    style={{ backgroundColor: "#2563eb" }}
                  >
                    <MdOutlinePreview /> Vista previa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
