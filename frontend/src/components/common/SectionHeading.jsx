import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  return (
    <div className={`section-heading section-heading-${align} ${className}`}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}

      <h2 className="section-heading-title">{title}</h2>

      {description && (
        <p className="section-heading-description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
