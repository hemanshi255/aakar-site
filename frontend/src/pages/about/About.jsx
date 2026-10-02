import React from "react";
import SEO from "../../components/common/SEO";
import ScrollReveal from "../../components/common/ScrollReveal";

const About = () => {
  const capabilities = [
    {
      number: "01",
      category: "CREATIVE",
      title: "Design that makes your brand feel clear and consistent.",
      description:
        "We create visual systems that help businesses communicate with confidence across digital and physical touchpoints.",
      services: [
        "Brand & Graphic Design",
        "Social Media Creative",
        "Marketing Materials",
        "UI/UX Design",
      ],
    },
    {
      number: "02",
      category: "DIGITAL",
      title: "Digital experiences built around how your business works.",
      description:
        "We design and develop responsive digital experiences that are practical, scalable and easy to use.",
      services: [
        "Business Websites",
        "E-commerce",
        "Custom Web Apps",
        "API & Integrations",
      ],
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Understand",
      description:
        "We start by understanding the business, audience, goals and actual problem before deciding what to create.",
    },
    {
      number: "02",
      title: "Simplify",
      description:
        "We remove unnecessary complexity and focus on decisions that make the final experience clearer and more useful.",
    },
    {
      number: "03",
      title: "Connect",
      description:
        "Design and development stay connected throughout the project so the visual idea and final product work together.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We care about the final details, responsive behaviour and real-world usability - not just how the work looks in a presentation.",
    },
  ];

  const process = [
    {
      icon: "fa-solid fa-comments",
      title: "Understand",
      description:
        "We understand your business, goals, audience and project requirements.",
    },
    {
      icon: "fa-solid fa-pen-ruler",
      title: "Design",
      description:
        "We shape the visual direction and user experience around your requirements.",
    },
    {
      icon: "fa-solid fa-code",
      title: "Build",
      description:
        "We develop the website or digital experience with a clean and practical approach.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Launch",
      description: "We test, refine and prepare the final project for launch.",
    },
  ];

  const whyAakar = [
    {
      number: "01",
      title: "One connected team",
      description:
        "Creative and development stay aligned instead of being treated as completely separate projects.",
    },
    {
      number: "02",
      title: "Clear communication",
      description:
        "We keep the process straightforward, practical and easy to understand.",
    },
    {
      number: "03",
      title: "Built for real use",
      description:
        "The final work is designed around actual business needs, users and everyday use.",
    },
  ];

  return (
    <>
      <SEO
        title="About Aakar.co - Creative Design & Digital Development Studio"
        description="Aakar.co is a creative digital studio combining graphic design, UI/UX and web development to help businesses build stronger brands and digital experiences."
      />

      <main className="about-page">
        {/* =========================================
            HERO
        ========================================== */}
        <section className="about-hero">
          <div className="container">
            <div className="row align-items-center about-hero-row">
              <div className="col-lg-5 col-md-5">
                <ScrollReveal direction="left">
                  <div className="about-hero-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>ABOUT AAKAR.CO</span>
                    </div>

                    <h1 className="about-hero-title">
                      Design with purpose.
                      <br />
                      Development with direction.
                    </h1>

                    <p className="about-hero-description">
                      Aakar.co is a creative digital studio bringing graphic
                      design, UI/UX and web development together to help
                      businesses build a stronger brand and digital presence.
                    </p>

                    <div className="about-hero-actions">
                      <a href="/contact" className="about-primary-button">
                        Start a Project
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </a>

                      <a href="/services" className="about-secondary-button">
                        Explore Services
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-7 col-md-7 col-12">
                <ScrollReveal direction="right" delay={150}>
                  <div className="about-hero-video">
                    <video
                      className="about-hero-video-element"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source src="/videos/about-aakar.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            INTRO
        ========================================== */}
        <section className="about-intro">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <ScrollReveal direction="left" delay={150}>
                  <div className="about-intro-image">
                    <img
                      src="/images/about-intro.webp"
                      alt="Aakar.co creative digital studio"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <ScrollReveal direction="right">
                  <div className="about-principles-heading">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>WHO WE ARE</span>
                    </div>

                    <h2>
                      A small studio bringing
                      <br />
                      two disciplines together.
                    </h2>

                    <p>
                      Aakar.co brings creative design and web development
                      together under one direction. We work with businesses that
                      need to build, improve or launch their visual and digital
                      presence.
                    </p>

                    <p>
                      Instead of treating design and technology as separate
                      pieces, we keep them connected throughout the process -
                      from the first idea to the final experience.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CAPABILITIES
        ========================================== */}
        <section className="about-capabilities">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="about-section-heading">
                <div>
                  <div className="home-services-eyebrow">
                    <span className="home-services-eyebrow-line"></span>
                    <span>WHAT WE DO</span>
                  </div>

                  <h2>
                    Creative and digital,
                    <br />
                    working together.
                  </h2>

                  <p>
                    We combine visual thinking with practical development to
                    create work that looks right and works properly.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="row about-capability-row">
              {capabilities.map((item, index) => (
                <div className="col-lg-6 col-md-6" key={item.number}>
                  <ScrollReveal
                    direction={index === 0 ? "left" : "right"}
                    delay={index * 120}
                  >
                    <article className="about-capability-card">
                      <div className="about-capability-card-top">
                        <span className="about-card-number">{item.number}</span>

                        <span className="about-card-category">
                          {item.category}
                        </span>
                      </div>

                      <div className="about-capability-card-main">
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>

                      <div className="about-capability-services">
                        {item.services.map((service) => (
                          <div
                            className="about-capability-service"
                            key={service}
                          >
                            <span>{service}</span>

                            <i className="fa-solid fa-arrow-up-right"></i>
                          </div>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            PRINCIPLES
        ========================================== */}
        <section className="about-principles">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="about-principles-heading">
                <div className="home-services-eyebrow">
                  <span className="home-services-eyebrow-line"></span>
                  <span>OUR PRINCIPLES</span>
                </div>

                <h2>
                  A simple way of
                  <br />
                  thinking about the work.
                </h2>

                <p>
                  The way we approach a project matters as much as the final
                  output. These principles guide how we work.
                </p>
              </div>
            </ScrollReveal>

            <div className="row about-principles-grid">
              {principles.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={item.number}>
                  <ScrollReveal direction="up" delay={index * 90}>
                    <article className="about-principle-card">
                      <div className="about-principle-card-content">
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            PROCESS
        ========================================== */}
        <section className="about-process">
          <div className="container">
            <div className="about-process-heading-wrap">
              <ScrollReveal direction="left">
                <div className="about-process-heading">
                  <span className="about-eyebrow about-eyebrow-light">
                    OUR PROCESS
                  </span>

                  <h2>
                    From idea
                    <br />
                    to execution.
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="about-process-heading-description">
                  A straightforward process keeps the project focused,
                  transparent and moving in the right direction.
                </p>
              </ScrollReveal>
            </div>

            <div className="row about-process-row">
              {process.map((item, index) => (
                <div className="col-lg-3 col-md-6" key={item.number}>
                  <ScrollReveal direction="up" delay={index * 90}>
                    <article className="about-process-card">
                      <div className="about-process-icon">
                        <i className={item.icon}></i>
                      </div>

                      <div className="about-process-line"></div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </article>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            WHY AAKAR
        ========================================== */}
        <section className="about-why">
          <div className="container">
            <div className="row about-why-row">
              <div className="col-lg-5 col-md-5">
                <ScrollReveal direction="left">
                  <div className="about-why-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>WHY AAKAR</span>
                    </div>

                    <h2>
                      Different skills.
                      <br />
                      One direction.
                    </h2>

                    <p>
                      We are intentionally small. That means fewer layers,
                      direct communication and a closer connection between the
                      idea and the final work.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-7 col-md-7">
                <ScrollReveal direction="right" delay={120}>
                  <div className="about-why-list">
                    {whyAakar.map((item) => (
                      <div className="about-why-item" key={item.number}>
                        <span className="about-why-number">{item.number}</span>

                        <div className="about-why-item-content">
                          <h3>{item.title}</h3>

                          <p>{item.description}</p>
                        </div>

                        <span className="about-why-item-arrow">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================== */}
        <section className="about-cta">
          <div className="container">
            <ScrollReveal direction="scale">
              <div className="about-cta-box">
                <div className="about-cta-main">
                  <div className="about-cta-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>HAVE AN IDEA?</span>
                    </div>

                    <h2>
                      Let's turn it
                      <br />
                      into something real.
                    </h2>

                    <p>
                      Tell us what you are building, what you need and where you
                      want to go. We'll help shape the right creative and
                      digital direction.
                    </p>
                  </div>

                  <div className="about-cta-action">
                    <a href="/contact" className="about-cta-button">
                      <span>Start a Project</span>

                      <i className="fa-solid fa-arrow-up-right"></i>
                    </a>

                    <span className="about-cta-note">
                      Graphic Design · UI/UX · Web Development
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
