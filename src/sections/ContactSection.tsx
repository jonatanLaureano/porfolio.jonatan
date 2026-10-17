import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import CvLink from "../components/CvLink";
import { profile } from "../data/profile";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-section"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">¿Construimos algo juntos?</p>
            <h2 id="contact-title">
              Tu próximo proyecto.
              <br />
              <span>Mi próximo desafío.</span>
            </h2>
            <p>
              Estoy abierto a oportunidades en desarrollo frontend. Aporto
              experiencia en JavaScript, Web Components, integración de
              servicios y calidad de software.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={"mailto:" + profile.email}
              >
                Hablemos <FiArrowUpRight aria-hidden="true" />
              </a>
              <CvLink />
            </div>
            <p className="resume-format">{profile.resume.format}</p>
          </div>
          <div className="contact-links">
            <a href={"mailto:" + profile.email}>
              <FiMail aria-hidden="true" />
              <span>
                <small>Escríbeme</small>
                {profile.email}
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.phoneHref}>
              <FiPhone aria-hidden="true" />
              <span>
                <small>Conversemos</small>
                {profile.phone}
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden="true" />
              <span>
                <small>Conectemos</small>LinkedIn
              </span>
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">(abre en otra pestaña)</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" />
              <span>
                <small>Más código</small>GitHub
              </span>
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">(abre en otra pestaña)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
