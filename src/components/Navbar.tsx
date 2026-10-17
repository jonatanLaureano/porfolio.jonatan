import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}
const navItems = [
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Tecnologías" },
  { id: "about", label: "Sobre mí" },
  { id: "education", label: "Formación" },
];
export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const ids = ["home", ...navItems.map((item) => item.id), "contact"];
      const visible = ids.filter(
        (id) =>
          (document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity) <= 180
      );
      setActive(visible[visible.length - 1] ?? "home");
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const media = window.matchMedia("(min-width: 900px)");
    const onResize = () => {
      if (media.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onResize);
    };
  }, [menuOpen]);
  function navigate(id: string) {
    setMenuOpen(false);
    setActive(id);
    requestAnimationFrame(() =>
      document.getElementById(id)?.focus({ preventScroll: true })
    );
  }
  return (
    <header
      className="site-header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setMenuOpen(false);
      }}
    >
      <nav className="container nav-bar" aria-label="Navegación principal">
        <a
          href="#home"
          className="wordmark"
          aria-label="Jonatan Laureano, inicio"
          onClick={() => navigate("home")}
        >
          <span className="monogram" aria-hidden="true">
            jl<span>.</span>
          </span>
          <span className="wordmark-name">
            {profile.name}
            <span>{profile.role}</span>
          </span>
        </a>
        <div className="desktop-navigation">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => navigate(id)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            }
          >
            {isDark ? (
              <FiSun aria-hidden="true" />
            ) : (
              <FiMoon aria-hidden="true" />
            )}
          </button>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => navigate("contact")}
          >
            Hablemos <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            type="button"
            ref={menuButton}
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className="mobile-navigation"
          hidden={!menuOpen}
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => navigate(id)}
            >
              {label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a href="#contact" onClick={() => navigate("contact")}>
            Hablemos <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
