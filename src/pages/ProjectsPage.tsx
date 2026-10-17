import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="section projects-section"
      tabIndex={-1}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-header-row">
          <SectionHeading
            id="projects-title"
            number="01"
            eyebrow="Una muestra de mi trabajo"
            title="Ideas llevadas a la pantalla."
            description="Proyectos donde el diseño, los componentes y la lógica se encuentran."
          />
          <a
            className="text-link section-side-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar GitHub <FiArrowUpRight aria-hidden="true" />
            <span className="sr-only">(abre en otra pestaña)</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const visual = project.image;
            return (
              <article className="project-card" key={project.id}>
                <a
                  className={"project-visual project-visual-" + project.id}
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    "Ver demo de " + project.title + " (abre en otra pestaña)"
                  }
                >
                  <span className="project-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="browser-frame">
                    <div className="browser-toolbar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>
                        {project.title}
                      </span>
                    </div>
                    <img
                      src={visual.src}
                      srcSet={visual.srcSet}
                      sizes="(min-width: 1200px) 480px, (min-width: 650px) 42vw, 88vw"
                      alt={"Interfaz de " + project.title}
                      width={visual.width}
                      height={visual.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="project-open" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </a>
                <div className="project-body">
                  <p className="project-category">{visual.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul
                    className="tech-tags"
                    aria-label="Tecnologías del proyecto"
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a
                      className="text-link"
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver demo <FiArrowUpRight aria-hidden="true" />
                      <span className="sr-only">
                        {" "}
                        de {project.title} (abre en otra pestaña)
                      </span>
                    </a>
                    {project.codeLink && (
                      <a
                        className="text-link muted-link"
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub aria-hidden="true" /> Código
                        <span className="sr-only">
                          {" "}
                          de {project.title} (abre en otra pestaña)
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
