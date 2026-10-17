import { FiBookOpen, FiChevronDown, FiGlobe } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import CvLink from "../components/CvLink";
import {
  certifications,
  education,
  otherCertifications,
} from "../data/education";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="section education-section"
      tabIndex={-1}
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeading
          id="education-title"
          number="05"
          eyebrow="Formación & certificaciones"
          title="Aprendizaje que acompaña mi práctica."
          description="Una base en ingeniería, complementada con arquitectura de software, desarrollo seguro e inteligencia artificial."
        />
        <div className="education-layout">
          <div className="education-degree">
            <FiBookOpen className="education-icon" aria-hidden="true" />
            <p className="eyebrow">Formación académica</p>
            <h3>{education.degree}</h3>
            <p className="education-institution">
              {education.institution} <span>({education.abbreviation})</span>
            </p>
            <p className="education-period">{education.period}</p>
            <div className="education-language">
              <FiGlobe aria-hidden="true" />
              <div>
                <strong>
                  {education.language.name} · {education.language.level}
                </strong>
                <span>{education.language.description}</span>
              </div>
            </div>
            <CvLink variant="text" />
          </div>
          <div className="education-certifications">
            <h3 className="certifications-label">Certificaciones destacadas</h3>
            <ul className="certification-list">
              {certifications.map((certification) => (
                <li key={certification.title}>
                  <div>
                    <h4>{certification.title}</h4>
                    <p>{certification.provider}</p>
                  </div>
                  <span className="certification-year">
                    {certification.year}
                  </span>
                </li>
              ))}
            </ul>
            <details className="other-certifications">
              <summary>
                Otras certificaciones <FiChevronDown aria-hidden="true" />
              </summary>
              <ul>
                {otherCertifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
