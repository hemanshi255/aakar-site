import React from "react";

const Footer = () => {
  const services = [
    "Graphic Design",
    "UI/UX Design",
    "Web Development",
    "E-commerce",
    "Custom Digital Solutions",
  ];

  const navigation = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-pattern"></div>

      <div className="container">
        <div className="site-footer-main">
          {/* Footer Intro */}
          <div className="site-footer-intro">
            <div className="site-footer-intro-left">
              <span className="site-footer-eyebrow">
                <span className="site-footer-eyebrow-line"></span>A CREATIVE
                DIGITAL STUDIO
              </span>

              <h2 className="site-footer-title">
                Build something
                <br />
                <span>worth remembering.</span>
              </h2>
            </div>

            <div className="site-footer-intro-right">
              <p>
                Aakar.co brings design and development together to help
                businesses build stronger brands and better digital experiences.
              </p>

              <a href="/contact" className="site-footer-start-link">
                <span>Start a Project</span>
                <i className="fa-solid fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="site-footer-divider"></div>

          {/* Footer Links */}
          <div className="site-footer-links">
            {/* Brand */}
            <div className="site-footer-brand-column">
              <a
                href="/"
                className="site-footer-logo"
                aria-label="Aakar.co Home"
              >
                <img
                  src="/images/aakar-logo.png"
                  alt="Aakar.co"
                  className="site-footer-logo-image"
                />
              </a>

              <p className="site-footer-brand-description">
                Design, development and digital solutions for businesses ready
                to move forward.
              </p>

              <p className="site-footer-brand-description text-white">
                aakarcollective36@gmail.com
              </p>

              {/* Social Icons */}
              <div className="site-footer-socials">
                <button
                  type="button"
                  className="site-footer-social"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </button>

                <button
                  type="button"
                  className="site-footer-social"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="site-footer-column">
              <span className="site-footer-column-title">EXPLORE</span>

              <nav className="site-footer-nav">
                {navigation.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="site-footer-nav-link"
                  >
                    <span>{item.label}</span>
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="site-footer-column">
              <span className="site-footer-column-title">WHAT WE DO</span>

              <div className="site-footer-services">
                {services.map((service, index) => (
                  <a
                    href="/services"
                    key={service}
                    className="site-footer-service"
                  >
                    <span>{service}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="site-footer-column site-footer-contact-column">
              <span className="site-footer-column-title">LINKS</span>

              <a href="/privacy-policy" className="site-footer-service">
                Privacy Policy
              </a>

              <a href="/terms-condition" className="site-footer-service">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="site-footer-bottom">
            <div className="site-footer-copyright">
              © {new Date().getFullYear()} Aakar.co. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
