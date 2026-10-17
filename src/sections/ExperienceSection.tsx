import {
  FiArrowDownRight,
  FiBriefcase,
  FiChevronDown,
  FiTrendingUp,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";
import { profile } from "../data/profile";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section experience-section"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >
      <div className="container experience-layout">
        <div className="experience-intro">
          <SectionHeading
            id="experience-title"
            number="02"
            eyebrow="Recorrido profesional"
            title="Experiencia con resultados."
          />
          <p className="section-description">{profile.trajectory}</p>
          <p className="experience-focus">
            Desarrollo web, modernización de componentes y calidad de software
            en el sector bancario.
          </p>
          <FiArrowDownRight className="section-arrow" aria-hidden="true" />
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article
              className={
                "experience-item" + (index === 0 ? " experience-current" : "")
              }
              key={experience.id}
            >
              <span className="timeline-marker" aria-hidden="true">
                {index === 0 && <FiBriefcase />}
              </span>
              <div className="experience-meta">
                <p>{experience.period}</p>
                {index === 0 && <span className="current-label">Actual</span>}
              </div>
              <h3>{experience.title}</h3>
              <p className="experience-company">{experience.company}</p>
              {experience.arrangement && (
                <p className="experience-arrangement">
                  {experience.arrangement}
                </p>
              )}
              <p className="experience-description">{experience.description}</p>
              {experience.impact && (
                <div className="experience-impact">
                  <FiTrendingUp aria-hidden="true" />
                  <strong>{experience.impact.value}</strong>
                  <span>{experience.impact.description}</span>
                </div>
              )}
              <details className="experience-details">
                <summary>
                  Responsabilidades y tecnologías{" "}
                  <FiChevronDown aria-hidden="true" />
                </summary>
                <div className="experience-detail-content">
                  <ul className="responsibility-list">
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul
                    className="tech-tags"
                    aria-label={"Tecnologías en " + experience.company}
                  >
                    {experience.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
