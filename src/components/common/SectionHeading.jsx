export function SectionHeading({ eyebrow, children, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}
