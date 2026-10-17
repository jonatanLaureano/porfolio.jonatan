import { SiLit } from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import { skillCategories, specialtySkills } from "../data/skills";

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="section skills-section"
      tabIndex={-1}
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeading
          id="skills-title"
          number="03"
          eyebrow="Especialidad & herramientas"
          title="Frontend, integración y calidad."
          description="Mi especialidad en Web Components se complementa con herramientas para desarrollar, integrar y probar aplicaciones."
        />
        <div className="skills-layout">
          <div className="specialty-panel">
            <span className="specialty-large-icon" aria-hidden="true">
              <SiLit />
            </span>
            <p className="eyebrow">Mi especialidad</p>
            <h3>
              JavaScript, LitElement
              <br />& Cells Framework
            </h3>
            <p>
              Interfaces y componentes reutilizables para proyectos de banca
              digital. Migración de Polymer a Lit 2 y 3 e integración con APIs
              REST.
            </p>
            <ul className="specialty-skills">
              {specialtySkills.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Icon aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="skill-groups">
            {skillCategories.map((category) => (
              <div className="skill-group" key={category.category}>
                <h3>{category.category}</h3>
                <ul>
                  {category.skills.map(({ name, icon: Icon }) => (
                    <li className="skill-tag" key={name}>
                      <Icon aria-hidden="true" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
