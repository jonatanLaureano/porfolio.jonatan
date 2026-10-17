import { FiDownload } from "react-icons/fi";
import { profile } from "../data/profile";

export default function CvLink({
  variant = "button",
}: {
  variant?: "button" | "text";
}) {
  return (
    <a
      href={profile.resume.href}
      download={profile.resume.filename}
      className={variant === "button" ? "button button-secondary" : "text-link"}
      aria-label={
        "Descargar CV de " + profile.name + " (" + profile.resume.format + ")"
      }
    >
      Descargar CV <FiDownload aria-hidden="true" />
    </a>
  );
}
