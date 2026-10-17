export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  arrangement?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  impact?: { value: string; description: string };
}

export const experiences: Experience[] = [
  {
    id: "entelgy",
    title: "Desarrollador Frontend",
    company: "Entelgy · BBVA Perú",
    period: "mar. 2025 – Actualidad",
    arrangement: "Híbrido",
    description:
      "Desarrollo frontend para proyectos del sector bancario de BBVA Perú, con JavaScript, LitElement y Cells Framework. Trabajo en interfaces, integración de servicios y modernización de componentes.",
    responsibilities: [
      "Desarrollo de interfaces y componentes reutilizables con JavaScript, LitElement y Cells Framework.",
      "Integración de APIs REST (GET, POST y PATCH) y desarrollo de componentes Data Manager (DM).",
      "Migración y modernización de componentes de Polymer a Lit 2 y 3.",
      "Implementación de pruebas unitarias y E2E para asegurar la calidad del software.",
      "Refactorización, optimización de código, gestión de errores y despliegue de aplicaciones en entornos corporativos.",
    ],
    technologies: [
      "JavaScript",
      "LitElement",
      "Cells Framework",
      "Polymer",
      "APIs REST",
      "Testing",
    ],
  },
  {
    id: "tgh",
    title: "Desarrollador Web",
    company: "TGH Technology Solution",
    period: "dic. 2024 – feb. 2025",
    arrangement: "Contrato de prácticas",
    description:
      "Diseño de prototipos en Figma y desarrollo de aplicaciones web responsivas con React y Tailwind CSS. Implementación de componentes reutilizables.",
    responsibilities: [
      "Diseño de prototipos de páginas web en Figma.",
      "Desarrollo de aplicaciones web responsivas con React y Tailwind CSS a partir de los prototipos.",
      "Implementación de componentes reutilizables y reducción del tiempo de carga de una aplicación.",
    ],
    technologies: ["React", "Tailwind CSS", "Figma"],
    impact: {
      value: "20 %",
      description: "menos tiempo de carga en una aplicación",
    },
  },
  {
    id: "devdatep",
    title: "Desarrollador Front-end",
    company: "Devdatep Consulting",
    period: "ago. 2024 – nov. 2024",
    arrangement: "Contrato de prácticas",
    description:
      "Desarrollo de interfaces responsivas y componentes reutilizables, con corrección de problemas funcionales en formularios y promoción de TypeScript y buenas prácticas.",
    responsibilities: [
      "Desarrollo de interfaces responsivas y componentes reutilizables.",
      "Corrección de problemas funcionales en formularios.",
      "Optimización del rendimiento de una aplicación en un 10 %.",
      "Promoción de TypeScript y buenas prácticas de desarrollo.",
    ],
    technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    impact: {
      value: "10 %",
      description: "de mejora en el rendimiento de una aplicación",
    },
  },
];
