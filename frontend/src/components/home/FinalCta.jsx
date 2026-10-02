import React from "react";
import ScrollReveal from "../common/ScrollReveal";

const FinalCta = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-layout">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div className="final-cta-content">
              <div className="final-cta-eyebrow">
                <span className="final-cta-eyebrow-line"></span>
                <span>LET'S BUILD SOMETHING</span>
              </div>

              <h2 className="final-cta-title">
                Have an Idea?
                <br />
                <span>Let's Make It Real.</span>
              </h2>

              <p className="final-cta-description">
                From visual identity to digital experiences, we bring design and
                development together to build something your business can
                actually grow with.
              </p>

              <div className="final-cta-actions">
                <a href="/contact" className="final-cta-primary-button">
                  <span>Start a Project</span>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>

                <a href="/services" className="final-cta-secondary-button">
                  <span>Explore Services</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal direction="right" delay={150}>
            <div className="final-cta-visual">
              <div className="final-cta-visual-pattern"></div>

              <div className="final-cta-visual-circle"></div>

              <div className="final-cta-visual-content">
                <div className="final-cta-visual-label">
                  <span className="final-cta-visual-label-line"></span>
                  <span>AAKAR.CO</span>
                </div>

                <h3 className="final-cta-visual-title">
                  Design.
                  <br />
                  Develop.
                  <br />
                  <span>Grow.</span>
                </h3>

                <p className="final-cta-visual-description">
                  One focused studio for your brand and digital presence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
