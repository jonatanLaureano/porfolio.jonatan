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
  React: { color: "bg-blue-500/20 text-blue-300 border-blue-500/30", icon: <FaReact /> },
  "Tailwind CSS": { color: "bg-teal-500/20 text-teal-300 border-teal-500/30", icon: <SiTailwindcss /> },
  TypeScript: { color: "bg-blue-800/30 text-blue-200 border-blue-700/40", icon: <SiTypescript /> },
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
      className={`px-2.5 py-1 text-xs font-medium flex items-center gap-1.5 rounded-md border ${config?.color ?? "bg-gray-700/40 text-gray-300 border-gray-600/40"
        }`}
    >
      {config?.icon ?? "🔧"} {tech}
    </span>
  );
};

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="py-16 text-white bg-[#0a0a1a] overflow-hidden"
    >
      <div className="max-w-5xl w-full mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          <FaCode className="text-blue-400" /> Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f0f23] border border-gray-700/50 rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed flex-1">
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
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/60 border border-gray-600/50 rounded-lg text-sm hover:bg-gray-600/60 transition-colors"
                    >
                      <FaGithub /> Código
                    </a>
                  )}
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 rounded-lg text-sm hover:bg-blue-500 transition-colors"
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
