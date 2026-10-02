import React from "react";
import ScrollReveal from "../common/ScrollReveal";

const whyAakarPoints = [
  {
    number: "01",
    title: "Design That Has Purpose",
    description:
      "Visuals that are not only attractive, but built around your business goals.",
  },
  {
    number: "02",
    title: "Development That Works",
    description:
      "Responsive, practical and scalable websites built for real business needs.",
  },
  {
    number: "03",
    title: "One Connected Workflow",
    description:
      "Design and development stay aligned from the first idea to final launch.",
  },
  {
    number: "04",
    title: "Support Beyond Launch",
    description:
      "Updates, improvements and ongoing creative or technical support when you need it.",
  },
];

const WhyAakar = () => {
  return (
    <section className="why-aakar">
      <div className="container">
        <div className="why-aakar-layout">
          <ScrollReveal direction="left">
            <div className="why-aakar-intro">
              <div className="why-aakar-eyebrow">
                <span className="why-aakar-eyebrow-line"></span>
                <span>WHY AAKAR.CO</span>
              </div>

              <h2 className="why-aakar-title">
                One Studio.
                <br />
                Design + Development.
                <br />
                Built to Work Together.
              </h2>

              <p className="why-aakar-description">
                Instead of managing separate designers and developers, work with
                one focused team that understands both the visual and technical
                side of your business.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="why-aakar-points">
              {whyAakarPoints.map((point) => (
                <div className="why-aakar-point" key={point.number}>
                  <div className="why-aakar-point-number">{point.number}</div>

                  <div className="why-aakar-point-content">
                    <h3 className="why-aakar-point-title">{point.title}</h3>

                    <p className="why-aakar-point-description">
                      {point.description}
                    </p>
                  </div>

                  <div className="why-aakar-point-arrow">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyAakar;
