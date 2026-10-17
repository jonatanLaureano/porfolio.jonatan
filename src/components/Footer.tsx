import { FiArrowUp } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Jonatan Laureano</p>
        <p>Diseñado con intención. Construido con React.</p>
        <a href="#home">
          Volver al inicio <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
