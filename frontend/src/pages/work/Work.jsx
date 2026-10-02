import React, { useEffect, useState } from "react";
import SEO from "../../components/common/SEO";
import ScrollReveal from "../../components/common/ScrollReveal";

const Work = () => {
  const workHeroSlides = [
    "/images/work-01.webp",
    "/images/work-02.webp",
    "/images/work-03.webp",
    "/images/work-04.webp",
    "/images/work-05.webp",
    "/images/work-06.webp",
  ];

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroSlide((current) => {
        return (current + 1) % workHeroSlides.length;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [workHeroSlides.length]);

  const workItems = [
    {
      category: "Graphic Design",
      title: "Brand & Marketing Creative",
      description:
        "Visual systems, marketing creatives and digital assets designed for a consistent brand presence.",
      className: "work-project-graphic",
      image: "/images/graphic-design-work-combo.webp",
    },
    {
      category: "E-commerce",
      title: "Product-focused Online Store",
      description:
        "A conversion-focused e-commerce experience built around products, browsing and smooth customer journeys.",
      className: "work-project-ecommerce",
      image: "/images/ecommerce-website-combo.webp",
    },
    {
      category: "Web Development",
      title: "Business Website",
      description:
        "A modern responsive website combining strong visual direction with practical business functionality.",
      className: "work-project-website",
      image: "/images/business-website-combo.webp",
    },
    {
      category: "UI/UX Design",
      title: "Digital Interface System",
      description:
        "Clean interface design focused on structure, usability and a consistent digital experience.",
      className: "work-project-ui",
      image: "/images/ui-ux-design-combo.webp",
    },
  ];

  return (
    <>
      <SEO
        title="Our Work - Aakar.co | Creative Design & Digital Development"
        description="Explore selected creative design, UI/UX, website and digital development work by Aakar.co."
      />

      <main className="work-page">
        {/* Hero */}
        <section className="work-hero">
          <div className="container">
            <div className="row align-items-center work-hero-row">
              <div className="col-lg-7 col-md-7">
                <ScrollReveal direction="left">
                  <div className="work-hero-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>SELECTED WORK</span>
                    </div>

                    <h1 className="work-hero-title">
                      Ideas Designed.
                      <br />
                      Experiences Built.
                    </h1>

                    <p className="work-hero-description">
                      A selection of creative and digital work showing how
                      design, technology and thoughtful execution come together
                      at Aakar.co.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-5 col-md-5">
                <ScrollReveal direction="right" delay={150}>
                  <div className="work-hero-carousel">
                    {workHeroSlides.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt=""
                        className={`work-hero-carousel-image ${
                          index === activeHeroSlide
                            ? "work-hero-carousel-image-active"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="work-featured-section">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="work-section-heading">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="work-section-eyebrow">FEATURED WORK</span>

                  <h2 className="work-section-title">
                    Selected projects across
                    <br />
                    design and development.
                  </h2>

                  <p className="work-section-description">
                    From visual identity and marketing design to websites and
                    digital products, every project starts with understanding
                    what the business actually needs.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="row work-featured-grid">
              {workItems.slice(0, 2).map((item, index) => (
                <div className="col-lg-6 col-md-6" key={item.title}>
                  <ScrollReveal
                    direction={index === 0 ? "left" : "right"}
                    delay={index * 120}
                  >
                    <article className={`work-featured-card ${item.className}`}>
                      <div className="work-featured-visual">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="work-project-image"
                        />
                      </div>

                      <div className="work-project-content">
                        <span className="work-project-category">
                          {item.category}
                        </span>

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

        {/* Work Categories */}
        <section className="work-categories-section">
          <div className="container">
            <ScrollReveal direction="right">
              <div className="work-section-heading work-section-heading-right">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="work-section-eyebrow">WHAT WE CREATE</span>

                  <h2 className="work-section-title">
                    Different disciplines.
                    <br />
                    One creative direction.
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="row work-category-grid">
              <div className="col-lg-3 col-md-6">
                <ScrollReveal direction="left">
                  <div className="work-category-card">
                    <span>01</span>

                    <h3>Graphic Design</h3>

                    <p>
                      Brand assets, marketing creatives, packaging, social media
                      and business materials.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-3 col-md-6">
                <ScrollReveal direction="up" delay={100}>
                  <div className="work-category-card">
                    <span>02</span>

                    <h3>UI/UX Design</h3>

                    <p>
                      Interfaces and digital experiences designed around
                      clarity, usability and visual consistency.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-3 col-md-6">
                <ScrollReveal direction="up" delay={200}>
                  <div className="work-category-card">
                    <span>03</span>

                    <h3>Web Development</h3>

                    <p>
                      Responsive business websites and custom digital
                      experiences built for real-world use.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-3 col-md-6">
                <ScrollReveal direction="right" delay={300}>
                  <div className="work-category-card">
                    <span>04</span>

                    <h3>E-commerce</h3>

                    <p>
                      Product-focused stores with shopping, checkout, payment
                      and business functionality.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* More Work */}
        <section className="work-projects-section">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="work-section-heading">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="work-section-eyebrow">MORE WORK</span>

                  <h2 className="work-section-title">
                    Built around the
                    <br />
                    actual requirement.
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="row work-projects-grid">
              {workItems.slice(2).map((item, index) => (
                <div className="col-lg-6 col-md-6" key={item.title}>
                  <ScrollReveal
                    direction={index === 0 ? "left" : "right"}
                    delay={index * 120}
                  >
                    <article className={`work-project-card ${item.className}`}>
                      <div className="work-featured-visual">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="work-project-image"
                        />
                      </div>

                      <div className="work-project-content">
                        <span className="work-project-category">
                          {item.category}
                        </span>

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

        {/* Approach */}
        <section className="work-approach-section">
          <div className="container">
            <div className="row align-items-center work-approach-row">
              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="left">
                  <div className="work-approach-content">
                    <span className="work-section-eyebrow">OUR APPROACH</span>

                    <h2 className="work-approach-title">
                      Good work is not
                      <br />
                      just about looking good.
                    </h2>

                    <p>
                      We combine creative thinking with practical development to
                      create work that looks considered, communicates clearly
                      and works in the real world.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="right" delay={150}>
                  <div className="work-approach-points">
                    <div className="work-approach-point">
                      <span>01</span>

                      <div>
                        <h3>Understand</h3>

                        <p>
                          We first understand the business, audience and actual
                          requirement.
                        </p>
                      </div>
                    </div>

                    <div className="work-approach-point">
                      <span>02</span>

                      <div>
                        <h3>Design</h3>

                        <p>
                          We create a clear visual direction before moving into
                          execution.
                        </p>
                      </div>
                    </div>

                    <div className="work-approach-point">
                      <span>03</span>

                      <div>
                        <h3>Build</h3>

                        <p>
                          Development turns the approved direction into a
                          responsive working experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="work-cta">
          <div className="container">
            <div className="row align-items-center work-cta-row">
              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="left">
                  <div className="work-cta-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span> HAVE A PROJECT IN MIND?</span>
                    </div>

                    <h2 className="work-cta-title">
                      Let's build something
                      <br />
                      that works for you.
                    </h2>

                    <p className="work-cta-description">
                      Tell us what you are building, what you need and where you
                      want to go. We'll help shape the right direction.
                    </p>

                    <a href="/contact" className="work-cta-button">
                      <span>Start a Project</span>
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="right" delay={150}>
                  <div className="work-cta-visual">
                    <div className="work-cta-visual-inner">
                      <div className="work-cta-visual-top">
                        <span>CREATIVE</span>
                        <span>DESIGN</span>
                      </div>

                      <div className="work-cta-visual-center">
                        <span className="work-cta-visual-large">LET'S</span>

                        <span className="work-cta-visual-large work-cta-visual-large-offset">
                          BUILD.
                        </span>
                      </div>

                      <div className="work-cta-visual-line"></div>

                      <div className="work-cta-visual-bottom">
                        <span>IDEAS</span>
                        <span>DESIGN</span>
                        <span>DIGITAL EXPERIENCE</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;
