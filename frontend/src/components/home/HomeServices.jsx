import React from "react";
import ScrollReveal from "../../components/common/ScrollReveal";

const services = [
  {
    number: "01",
    icon: "fa-solid fa-palette",
    eyebrow: "SHAPE THE WAY YOU ARE SEEN",
    title: "Graphic Design",
    description:
      "Practical visual design that gives your business a clear, considered presence.",
    tags: [
      "Logo Design",
      "Brand Essentials",
      "Business & Marketing Design",
      "Product & Packaging",
    ],
    link: "Explore Graphic Design",
    path: "/services",
  },
  {
    number: "02",
    icon: "fa-solid fa-code",
    eyebrow: "BUILD WHAT YOUR BUSINESS NEEDS",
    title: "Web & Development",
    description:
      "Responsive websites, e-commerce and custom digital systems built to work hard.",
    tags: [
      "Business Websites",
      "E-commerce",
      "Custom Development",
      "Authentication",
    ],
    link: "Explore Web & Development",
    path: "/services",
  },
  {
    number: "03",
    icon: "fa-solid fa-globe",
    eyebrow: "KEEP MOVING AFTER LAUNCH",
    title: "Ongoing Support",
    description:
      "A reliable creative and technical partner for the updates that follow launch.",
    tags: [
      "Social Creatives",
      "Product Updates",
      "Content Updates",
      "Website Banners",
    ],
    link: "Explore Ongoing Support",
    path: "/services",
  },
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="home-services-header">
            <div className="home-services-eyebrow">
              <span className="home-services-eyebrow-line"></span>
              <span>WHAT WE DO</span>
            </div>

            <h2 className="home-services-title">
              Everything You Need to
              <br />
              Build Your Business Online.
            </h2>

            <p className="home-services-description">
              A focused studio for the moments when your business needs to look
              sharper, work better and move forward.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards */}
        <div className="row home-services-row">
          {services.map((service) => (
            <div
              className="col-lg-4 col-md-6 home-services-column"
              key={service.number}
            >
              <ScrollReveal
                direction={
                  service.number === "01"
                    ? "left"
                    : service.number === "02"
                      ? "up"
                      : "right"
                }
                delay={
                  service.number === "01"
                    ? 0
                    : service.number === "02"
                      ? 150
                      : 300
                }
              >
                <article className="home-service-card">
                  {/* Card Top */}
                  <div className="home-service-card-top">
                    <span className="home-service-number">
                      {service.number}
                    </span>

                    <span className="home-service-icon">
                      <i className={service.icon}></i>
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="home-service-card-content">
                    <span className="home-service-eyebrow">
                      {service.eyebrow}
                    </span>

                    <h3 className="home-service-title">{service.title}</h3>

                    <p className="home-service-description">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="home-service-tags">
                      {service.tags.map((tag) => (
                        <span className="home-service-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="home-service-card-footer">
                    <a href={service.path} className="home-service-button">
                      <span>{service.link}</span>

                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
