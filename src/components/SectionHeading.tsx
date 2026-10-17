interface SectionHeadingProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}
export default function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number} /</span> {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
