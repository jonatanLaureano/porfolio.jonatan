import { FaCode, FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const techColors: Record<string, string> = {
  React: "bg-blue-500",
  "Tailwind CSS": "bg-teal-600",
  TypeScript: "bg-blue-800",
};

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  TypeScript: <SiTypescript />,
};


const projects = [
  {
    title: "Sistema de Gestión de Inventario",
    description:
      "Es una aplicación desarrollada con React que permite a los usuarios administrar eficientemente el stock de productos. Creado con React, TypeScript, TailwindCSS y Figma.",
    image: "/img/Proyecto2.PNG",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/SGI-FRONTEND-SA",
    previewLink: "https://sgi-frontend-sa.vercel.app/",
  },
  {
    title: "Arena FreeStyle : Plataforma de Venta de Tickets",
    description:
      "Es una plataforma moderna y eficiente para la venta de tickets, diseñada para facilitar la gestión de eventos. Creada con React, TypeScript, TailwindCSS y Figma.",
    image: "/img/Proyecto1.PNG",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/TicketFlow",
    previewLink: "https://furia-plumada-frontend.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="flex flex-col pt-10 pb-10 text-white bg-[#0a0a1a] overflow-hidden"
    >
      <div className="text-left max-w-4xl w-full mx-auto px-4">
        <h2 className="text-left text-3xl font-bold mb-6 flex items-center gap-2">
          <FaCode /> Proyectos
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0a0a1a] p-6 rounded-xl flex flex-col md:flex-row gap-6 shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-sm text-white flex items-center gap-1 rounded-md ${
                          techColors[tech] || "bg-gray-800"
                        }`}
                      >
                        {techIcons[tech] || "🔧"} {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <MdOutlinePreview /> Preview
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


