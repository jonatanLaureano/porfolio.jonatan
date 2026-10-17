import {
  FiArrowUpRight,
  FiCheckCircle,
  FiRefreshCw,
  FiServer,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="section about-section"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-copy">
          <SectionHeading
            id="about-title"
            number="04"
            eyebrow="Detrás del código"
            title="Hola, soy Jonatan."
          />
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce mi perfil en LinkedIn <FiArrowUpRight aria-hidden="true" />
            <span className="sr-only">(abre en otra pestaña)</span>
          </a>
        </div>
        <div className="about-notes">
          <div className="about-note">
            <FiRefreshCw aria-hidden="true" />
            <div>
              <h3>Modernización de componentes</h3>
              <p>
                Migraciones de Polymer a Lit 2 y 3, refactorización y
                mantenibilidad del código.
              </p>
            </div>
          </div>
          <div className="about-note">
            <FiCheckCircle aria-hidden="true" />
            <div>
              <h3>Calidad de software</h3>
              <p>
                Pruebas unitarias y E2E, gestión de errores y buenas prácticas
                de desarrollo.
              </p>
            </div>
          </div>
          <div className="about-note">
            <FiServer aria-hidden="true" />
            <div>
              <h3>Integración de servicios</h3>
              <p>
                Consumo de APIs REST con GET, POST y PATCH, y desarrollo de
                componentes Data Manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
