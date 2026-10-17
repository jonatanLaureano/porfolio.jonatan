export interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    srcSet: string;
    width: number;
    height: number;
    category: string;
  };
  tech: string[];
  codeLink?: string;
  previewLink: string;
}

export const projects: Project[] = [
  {
    id: "sgi",
    title: "Sistema de Gestión de Inventario",
    description:
      "Aplicación React para administrar eficientemente el stock de productos. Incluye dashboard de métricas, CRUD completo y filtros avanzados. Diseñado en Figma e implementado con TypeScript y TailwindCSS.",
    image: {
      src: "/img/inventario-1200.webp",
      srcSet: "/img/inventario-640.webp 640w, /img/inventario-1200.webp 1200w",
      width: 1200,
      height: 579,
      category: "Aplicación web · Gestión de inventario",
    },
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/SGI-FRONTEND-SA",
    previewLink: "https://sgi-frontend-sa.vercel.app/",
  },
  {
    id: "arena",
    title: "Arena FreeStyle — Plataforma de Venta de Tickets",
    description:
      "Plataforma moderna para la gestión y venta de tickets de eventos. Diseño responsivo con React, TypeScript y TailwindCSS. Arquitectura escalable con separación de responsabilidades y consumo de APIs.",
    image: {
      src: "/img/arena-1200.webp",
      srcSet: "/img/arena-640.webp 640w, /img/arena-1200.webp 1200w",
      width: 1200,
      height: 505,
      category: "Plataforma web · Eventos y tickets",
    },
    tech: ["React", "Tailwind CSS", "TypeScript"],
    codeLink: "https://github.com/jonatanLaureano/TicketFlow",
    previewLink: "https://furia-plumada-frontend.vercel.app/",
  },
  {
    id: "siom-mineria",
    title: "SIOM Minería",
    description:
      "Interfaz web de acceso para SIOM Minería, desarrollada con React JS y CSS.",
    image: {
      src: "/img/siom-mineria-1200.webp",
      srcSet:
        "/img/siom-mineria-640.webp 640w, /img/siom-mineria-1200.webp 1200w",
      width: 1200,
      height: 571,
      category: "Aplicación web · Sector minero",
    },
    tech: ["React JS", "CSS"],
    codeLink: "https://github.com/jonatanLaureano/proyecto-siom",
    previewLink: "https://proyecto-siom.vercel.app/login",
  },
];
