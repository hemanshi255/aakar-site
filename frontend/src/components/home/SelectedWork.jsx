import React, { useState } from "react";
import ScrollReveal from "../../components/common/ScrollReveal";

const selectedWorks = [
  {
    number: "01",
    category: "GRAPHIC DESIGN",
    title: "Selected Design Work",
    description:
      "A selection of visual identities, social creatives and product-focused design work.",
    image: "/images/graphic-design-work.webp",
    buttonText: "View Design Work",
    type: "gallery",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "E-commerce Website",
    description:
      "A personal e-commerce project built to explore responsive interfaces and practical online shopping experiences.",
    image: "/images/ecommerce-website.webp",
    buttonText: "View Live Website",
    type: "external",
    link: "https://shopsphere-ecommerce-pearl.vercel.app/",
  },
  {
    number: "03",
    category: "STUDIO PROJECT",
    title: "Aakar.co Website",
    description:
      "Our own studio website bringing creative design and digital development together.",
    image: "/images/aakar-website.webp",
    buttonText: "Explore Aakar.co",
    type: "external",
    link: "https://aakar.co",
  },
];

const SelectedWork = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleExternalLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="selected-work">
        <div className="container">
          {/* Section Header */}
          <div className="selected-work-header">
            <ScrollReveal direction="right">
              <div className="selected-work-eyebrow">
                <span className="selected-work-eyebrow-line"></span>
                <span>SELECTED WORK</span>
              </div>

              <h2 className="selected-work-title">
                Work That Shows What We Can Do.
              </h2>

              <p className="selected-work-description">
                A selection of our design practice, digital work and studio
                projects - created to explore ideas and demonstrate what
                Aakar.co brings together.
              </p>
            </ScrollReveal>
          </div>

          {/* Work Cards */}
          <div className="row selected-work-row">
            {selectedWorks.map((work, index) => (
              <div
                className="col-lg-4 col-md-6 selected-work-column"
                key={work.number}
              >
                <ScrollReveal
                  direction={
                    index === 0 ? "left" : index === 1 ? "scale" : "right"
                  }
                  delay={index * 150}
                >
                  <article className="selected-work-card">
                    {/* Project Image */}
                    <div className="selected-work-image-wrap">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="selected-work-image"
                      />

                      <span className="selected-work-number">
                        {work.number}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="selected-work-content">
                      <span className="selected-work-category">
                        {work.category}
                      </span>

                      <h3 className="selected-work-card-title">{work.title}</h3>

                      <p className="selected-work-card-description">
                        {work.description}
                      </p>

                      {/* CTA */}
                      <div className="selected-work-card-footer">
                        {work.type === "gallery" ? (
                          <button
                            type="button"
                            className="selected-work-button"
                            onClick={() => setIsGalleryOpen(true)}
                          >
                            <span>{work.buttonText}</span>

                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="selected-work-button"
                            onClick={() => handleExternalLink(work.link)}
                          >
                            <span>{work.buttonText}</span>

                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="selected-work-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Graphic Design Work"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="selected-work-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="selected-work-modal-close"
              onClick={() => setIsGalleryOpen(false)}
              aria-label="Close gallery"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="selected-work-modal-header">
              <span>GRAPHIC DESIGN</span>

              <h3>Selected Design Work</h3>
            </div>

            <div className="selected-work-gallery">
              <img
                src="/images/graphic-design-work.webp"
                alt="Selected graphic design work"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedWork;
