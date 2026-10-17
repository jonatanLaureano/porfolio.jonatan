import {
  FiArrowDown,
  FiArrowRight,
  FiMail,
  FiLayers,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { SiLit, SiJavascript } from "react-icons/si";
import CvLink from "../components/CvLink";
import { profile } from "../data/profile";

export default function HeroPage() {
  return (
    <section
      id="home"
      className="hero"
      tabIndex={-1}
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" /> Abierto a oportunidades
          </p>
          <p className="eyebrow hero-role">{profile.role}</p>
          <h1 id="hero-title">
            Jonatan <br />
            <span>
              Laureano<span className="name-dot">.</span>
            </span>
          </h1>
          <p className="hero-lead">
            Web Components.
            <br />
            Experiencia en banca digital.
          </p>
          <p className="hero-description">
            Más de 2 años en desarrollo web, incluidas prácticas profesionales.
            Actualmente desarrollo para{" "}
            <strong>BBVA Perú, a través de Entelgy</strong>, con{" "}
            <strong>JavaScript, LitElement y Cells Framework.</strong>
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Ver proyectos <FiArrowDown aria-hidden="true" />
            </a>
            <CvLink />
          </div>
          <div className="hero-socials">
            <a href={"mailto:" + profile.email}>
              <FiMail aria-hidden="true" /> Contactar
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> GitHub{" "}
              <span className="sr-only">(abre en otra pestaña)</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn{" "}
              <span className="sr-only">(abre en otra pestaña)</span>
            </a>
            <span className="location">
              <FiMapPin aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/img/jonatan-720.webp"
              srcSet="/img/jonatan-480.webp 480w, /img/jonatan-720.webp 720w"
              sizes="(min-width: 1100px) 370px, (min-width: 900px) 320px, (min-width: 600px) 360px, 80vw"
              alt="Jonatan Laureano en su graduación de Ingeniería de Sistemas Computacionales"
              width="720"
              height="1018"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span>Diseño + código</span>
              <span aria-hidden="true">&lt;/&gt;</span>
            </div>
          </div>
          <div className="specialty-note">
            <span className="specialty-icon" aria-hidden="true">
              <SiLit />
            </span>
            <div>
              <span>Mi especialidad</span>
              <strong>LitElement & Cells Framework</strong>
            </div>
          </div>
          <span className="portrait-coordinate" aria-hidden="true">
            TRUJILLO, PE · FRONTEND
          </span>
        </div>
      </div>
      <div className="container">
        <div className="hero-context">
          <a href="#experience" className="current-role">
            <span className="status-dot" aria-hidden="true" />
            <span>
              Actualmente en <strong>Entelgy · BBVA Perú</strong>
            </span>
            <FiArrowRight aria-hidden="true" />
          </a>
          <div className="core-stack" aria-label="Tecnologías principales">
            <span>
              <SiLit aria-hidden="true" /> Lit
            </span>
            <span>
              <SiJavascript aria-hidden="true" /> JavaScript
            </span>
            <span>
              <FiLayers aria-hidden="true" /> Cells
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
