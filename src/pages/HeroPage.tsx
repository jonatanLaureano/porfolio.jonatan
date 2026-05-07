
import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaBriefcase, FaGithub } from "react-icons/fa";
import type { JSX } from "react";

const experiences = [
  {
    id: "entelgy",
    title: "Analista Programador",
    company: "Entelgy — BBVA",
    period: "mar. 2025 - Actualidad",
    description:
      "Desarrollo Frontend y Web Components con Lit para la plataforma digital de BBVA. Trabajo en el Design System de Cells, construyendo componentes reutilizables que dan soporte a millones de usuarios de banca digital en producción.",
    projects: [
      {
        name: "Sistema de Conciliación entre aplicativos",
        detail:
          "Construí componentes visuales, consumí servicios REST (GET, POST, PATCH), desarrollé métodos en Data Manager y refactoricé componentes existentes."
      },
      {
        name: "Glomo: Security Journeys 2.0",
        detail:
          "Migré componentes Data Manager de Polymer a Lit 3, corregí pruebas E2E, implementé test unitarios y refactoricé componentes del módulo.",
      },
      {
        name: "Motor de Resolución Ágil de Reclamos (FCR)",
        detail:
          "Diseñé componentes visuales desde mockups FCR, desarrollé Data Managers del módulo de gestión de seguros, migré componentes de Polymer a Lit 3 e integré servicios de reuso con implementación de test unitarios.",
      },
      {
        name: "Error Message Omission /  IVR Contact Center",
        detail:
          "Migré componentes Data Manager de Polymer a Lit 2, implementé lógica en el flujo de errores, adapté test unitarios y acompañé la ventana de pruebas del proyecto.",
      },
    ],
  },
  {
    id: "tgh",
    title: "Web Developer — React",
    company: "TGH Technology Solution · Contrato de formación",
    period: "dic. 2024 - feb. 2025",
    description:
      "Diseñé prototipos de páginas web en Figma y desarrollé componentes reutilizables con React y TailwindCSS. Implementé un CRUD completo consumiendo APIs REST.",
    projects: [],
  },
  {
    id: "devdatep",
    title: "Front-end Developer — React",
    company: "DEVDATEP CONSULTING · Prácticas",
    period: "ago. 2024 - nov. 2024",
    description:
      "Colaboré en el desarrollo de interfaces de usuario interactivas, implementando componentes reutilizables y estilos responsivos. Resolví un bug crítico en formularios de edición que afectaba la persistencia de datos.",
    projects: [],
  },
];

interface ContactLink {
  href: string;
  icon: JSX.Element;
  label: string;
  brandColor: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    href: "mailto:jonatandlau@gmail.com",
    icon: <SlEnvolopeLetter />,
    label: "Contáctame",
    brandColor: "#EA4335",
  },
  {
    href: "https://www.linkedin.com/in/jonatan-laureano-alfaro-bb41682b4/",
    icon: <CiLinkedin />,
    label: "LinkedIn",
    brandColor: "#0A66C2",
    external: true,
  },
  {
    href: "https://github.com/jonatanLaureano",
    icon: <FaGithub />,
    label: "GitHub",
    brandColor: "#ffffff",
    external: true,
  },
];

interface HeroPageProps {
  isDark: boolean;
}

const ContactButton = ({ href, icon, label, brandColor, external, isDark }: ContactLink & { isDark: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const displayColor = brandColor === "#ffffff" && !isDark ? "#111827" : brandColor;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? displayColor : (isDark ? "#4b5563" : "#d1d5db"),
      }}
      className={`flex items-center gap-3 px-5 py-3 border rounded-xl transition-all duration-300 w-full sm:w-auto justify-center ${
        isDark
          ? "hover:bg-white/5"
          : "hover:bg-gray-100"
      }`}
    >
      <span
        style={{ color: displayColor }}
        className="text-2xl flex-shrink-0"
      >
        {icon}
      </span>
      <span style={{ color: displayColor }} className="text-sm font-medium">{label}</span>
    </a>
  );
};

const HeroPage = ({ isDark }: HeroPageProps) => {
  return (
    <section className={`flex flex-col overflow-hidden ${isDark ? "bg-[#0a0a1a] text-white" : "bg-gray-50 text-gray-800"}`}>

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col items-center gap-4 max-w-3xl w-full">

          <div className="flex flex-col items-center gap-3">
            <img
              src="/img/Student.jpg"
              alt="Foto de Jonatan Laureano"
              className="w-24 h-24 rounded-full border-2 object-cover"
              style={{ borderColor: isDark ? "#6b7280" : "#d1d5db" }}
            />
            <span className="px-3 py-1 text-sm bg-green-700 text-white rounded-full">
              Disponible para trabajar
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            Hola, soy <span className="text-blue-500">Jonatan</span>
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Frontend Developer especializado en{" "}
            <span className="font-semibold">Web Components con LitElement</span> y el{" "}
            <span className="font-semibold">Design System Cells</span> de{" "}
            <span className="font-semibold text-blue-500">BBVA</span>, con más de{" "}
            <span className="font-semibold">1 año construyendo interfaces de banca digital en producción</span>.
            Bachiller en Ingeniería de Sistemas y actualmente especializándome en{" "}
            <span className="font-semibold">Arquitectura de Software</span> e{" "}
            <span className="font-semibold">Inteligencia Artificial generativa</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            {contactLinks.map((link) => (
              <ContactButton key={link.href} {...link} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <FaBriefcase />
          Experiencia laboral
        </h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-2 pl-6 relative"
              style={{ borderColor: isDark ? "#374151" : "#d1d5db" }}
            >
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2. bg-blue-500 rounded-full" />

              <h3 className="text-lg font-semibold text-blue-500">{exp.title}</h3>
              <p className={`text-sm mt-0.5 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{exp.company}</p>
              <p className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{exp.period}</p>
              <p className={`mt-3 text-sm leading-relaxed text-justify ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {exp.description}
              </p>

              {exp.projects.length > 0 && (
                <div className="mt-4 flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                    Proyectos en BBVA
                  </p>
                  {exp.projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="border rounded-lg px-4 py-3"
                      style={{
                        backgroundColor: isDark ? "#111127" : "#f9fafb",
                        borderColor: isDark ? "rgba(55, 65, 81, 0.5)" : "#e5e7eb"
                      }}
                    >
                      <p className="text-sm font-semibold" style={{ color: isDark ? "#fff" : "#111" }}>
                        {proj.name}
                      </p>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                        {proj.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
