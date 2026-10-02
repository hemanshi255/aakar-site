import React from "react";
import SEO from "../../components/common/SEO";
import HomeServices from "../../components/home/HomeServices.jsx";
import HowWeWork from "../../components/home/HowWeWork.jsx";
import SelectedWork from "../../components/home/SelectedWork.jsx";
import WhyAakar from "../../components/home/WhyAakar.jsx";
import FinalCta from "../../components/home/FinalCta.jsx";
import ScrollReveal from "../../components/common/ScrollReveal.jsx";

const Home = () => {
  return (
    <main className="home-page">
      <SEO
        title="आकार.co - Creative Design & Digital Development Studio"
        description="Aakar.co helps businesses build strong brands and digital experiences through graphic design, UI/UX design, websites, e-commerce development and custom digital solutions."
      />

      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-md-6">
              <ScrollReveal direction="left">
                <div className="home-hero-content">
                  <div className="home-services-eyebrow">
                    <span className="home-services-eyebrow-line"></span>
                    <span>Creative Design × Digital Development</span>
                  </div>

                  <h1 className="home-hero-title">
                    Build Your Brand.
                    <br />
                    Launch Your Digital Presence.
                  </h1>

                  <p className="home-hero-description">
                    Aakar.co is a creative digital studio helping businesses
                    turn ideas into strong visual identities, modern websites
                    and practical digital experiences.
                  </p>

                  <div className="home-hero-actions">
                    <a href="/contact" className="home-hero-primary-button">
                      Start a Project
                    </a>

                    <a href="/services" className="home-hero-secondary-button">
                      Explore Services
                    </a>
                  </div>

                  <div className="home-hero-services">
                    <span>Graphic Design</span>
                    <span>UI/UX Design</span>
                    <span>Web Development</span>
                    <span>Digital Solutions</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual */}
            <div className="col-lg-6 col-md-6">
              <ScrollReveal direction="right" delay={150}>
                <div className="home-hero-visual">
                  <img
                    src="/images/home-hero.webp"
                    alt="Creative design and web development"
                    className="home-hero-image"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up">
        <HomeServices />
      </ScrollReveal>

      <HowWeWork />
      <SelectedWork />
      <WhyAakar />
      <FinalCta />
    </main>
  );
};

export default Home;
