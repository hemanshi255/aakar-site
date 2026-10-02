import React from "react";
import SEO from "../../components/common/SEO";
import ScrollReveal from "../../components/common/ScrollReveal";

const Services = () => {
  return (
    <>
      <SEO
        title="Services - Aakar.co | Creative Design & Digital Development"
        description="Explore Aakar.co's graphic design, UI/UX design, web development, e-commerce, custom digital solutions and ongoing support services."
      />

      <main className="services-page">
        {/* Services Hero */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-layout">
              <ScrollReveal direction="left">
                <div className="services-hero-content">
                  <div className="home-services-eyebrow">
                    <span className="home-services-eyebrow-line"></span>
                    <span>Creative Design × Digital Development</span>
                  </div>

                  <h1 className="services-hero-title">
                    Services Built
                    <br />
                    Around Your Business.
                  </h1>

                  <p className="services-hero-description">
                    From visual identity and UI/UX design to websites,
                    e-commerce and custom digital systems, Aakar.co brings
                    creative and technical work together under one roof.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="services-hero-side">
                  <span className="services-hero-side-number">01</span>

                  <p>
                    Design it.
                    <br />
                    Build it.
                    <br />
                    Grow it.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Graphic Design */}
        <section className="services-category services-category-design">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="services-category-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="services-category-eyebrow">
                    VISUAL & CREATIVE
                  </span>

                  <h2 className="services-category-title">Graphic Design</h2>

                  <p className="services-category-description">
                    Visual design that helps your business look clear,
                    consistent and professional across every touchpoint.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="services-list">
              <div className="services-list-item">
                <span>01</span>
                <h3>Logo Design</h3>
                <p>
                  Professional logos designed around your business, audience and
                  visual direction.
                </p>
              </div>

              <div className="services-list-item">
                <span>02</span>
                <h3>Brand Essentials</h3>
                <p>
                  Brand colors, typography and essential visual assets for a
                  consistent presence.
                </p>
              </div>

              <div className="services-list-item">
                <span>03</span>
                <h3>Business & Marketing Design</h3>
                <p>
                  Business cards, stationery, flyers, posters, banners,
                  brochures, catalogues and presentations.
                </p>
              </div>

              <div className="services-list-item">
                <span>04</span>
                <h3>Packaging & Product Design</h3>
                <p>
                  Product labels, packaging, boxes, pouches, mockups and
                  product-focused creative assets.
                </p>
              </div>

              <div className="services-list-item">
                <span>05</span>
                <h3>Social Media Design</h3>
                <p>
                  Posts, stories, carousels, reel covers, advertisements and
                  promotional creatives.
                </p>
              </div>

              <div className="services-list-item">
                <span>06</span>
                <h3>UI/UX Design</h3>
                <p>
                  Landing pages, websites, e-commerce interfaces, dashboards and
                  mobile app UI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Web & Development */}
        <section className="services-category services-category-development">
          <div className="container">
            <ScrollReveal direction="right">
              <div className="services-category-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="services-category-eyebrow">
                    DIGITAL & DEVELOPMENT
                  </span>

                  <h2 className="services-category-title">Web & Development</h2>

                  <p className="services-category-description">
                    Responsive websites and practical digital products built
                    around how your business actually works.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="services-list">
              <div className="services-list-item">
                <span>01</span>
                <h3>Business Websites</h3>
                <p>
                  Professional responsive websites designed to present your
                  business clearly and build trust online.
                </p>
              </div>

              <div className="services-list-item">
                <span>02</span>
                <h3>E-commerce</h3>
                <p>
                  Online stores with product management, cart, checkout and
                  practical customer experiences.
                </p>
              </div>

              <div className="services-list-item">
                <span>03</span>
                <h3>Custom Web Apps</h3>
                <p>
                  Custom-built digital applications for specific workflows,
                  businesses and operational needs.
                </p>
              </div>

              <div className="services-list-item">
                <span>04</span>
                <h3>Admin Panels & Dashboards</h3>
                <p>
                  Centralized interfaces for managing users, products, orders,
                  content, data and business operations.
                </p>
              </div>

              <div className="services-list-item">
                <span>05</span>
                <h3>Business Management Systems</h3>
                <p>
                  CRM, booking, inventory, invoice, customer, employee, lead and
                  order management systems.
                </p>
              </div>

              <div className="services-list-item">
                <span>06</span>
                <h3>Authentication & Access</h3>
                <p>
                  Login, signup, OTP, social login, password recovery and
                  role-based access systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="services-category services-category-integrations">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="services-category-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="services-category-eyebrow">
                    CONNECT & EXTEND
                  </span>

                  <h2 className="services-category-title">
                    Integrations & Technical Setup
                  </h2>

                  <p className="services-category-description">
                    Connect your website or application with the tools and
                    services your business already uses.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="services-list">
              <div className="services-list-item">
                <span>01</span>
                <h3>API Integration</h3>
                <p>
                  Connect internal systems and third-party services through
                  APIs.
                </p>
              </div>

              <div className="services-list-item">
                <span>02</span>
                <h3>Payment Gateway</h3>
                <p>
                  Payment gateway integration for online transactions and
                  checkout flows.
                </p>
              </div>

              <div className="services-list-item">
                <span>03</span>
                <h3>WhatsApp Integration</h3>
                <p>
                  Connect business workflows with WhatsApp-based communication
                  and actions.
                </p>
              </div>

              <div className="services-list-item">
                <span>04</span>
                <h3>Maps & Location</h3>
                <p>
                  Google Maps and location-based functionality for websites and
                  applications.
                </p>
              </div>

              <div className="services-list-item">
                <span>05</span>
                <h3>Email & SMS</h3>
                <p>
                  Transactional email and SMS integrations for notifications and
                  communication.
                </p>
              </div>

              <div className="services-list-item">
                <span>06</span>
                <h3>Shipping & Delivery APIs</h3>
                <p>
                  Connect shipping and delivery services with e-commerce
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO & Technical Setup */}
        <section className="services-feature">
          <div className="container">
            <ScrollReveal direction="right">
              <div className="services-feature-layout">
                {/* <div className="services-feature-number">04</div> */}
                <i class="fa-solid fa-circle-dot services-category-number text-white"></i>

                <div className="services-feature-content">
                  <span className="services-category-eyebrow">
                    INCLUDED WITH WEBSITE PROJECTS
                  </span>

                  <h2 className="services-feature-title">
                    Basic SEO & Technical Setup
                  </h2>

                  <p className="services-feature-description">
                    Every website gets a solid technical foundation so search
                    engines can properly understand and discover the site.
                  </p>

                  <div className="services-feature-items">
                    <span>Meta Title</span>
                    <span>Meta Description</span>
                    <span>Sitemap.xml</span>
                    <span>Robots.txt</span>
                    <span>Basic Schema Markup</span>
                  </div>

                  <p className="services-feature-note">
                    Basic SEO setup is included with website development. Search
                    ranking or traffic results are not guaranteed.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ongoing Support */}
        <section className="services-category services-category-support">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="services-category-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="services-category-eyebrow">
                    AFTER LAUNCH
                  </span>

                  <h2 className="services-category-title">Ongoing Support</h2>

                  <p className="services-category-description">
                    Keep your brand and website moving with reliable creative
                    and technical support after launch.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="services-list">
              <div className="services-list-item">
                <span>01</span>
                <h3>Social Creatives</h3>
                <p>
                  Ongoing social media posts, stories, promotional creatives and
                  campaign assets.
                </p>
              </div>

              <div className="services-list-item">
                <span>02</span>
                <h3>Website Updates</h3>
                <p>
                  Product, collection, content and website updates when your
                  business changes.
                </p>
              </div>

              <div className="services-list-item">
                <span>03</span>
                <h3>Website Banners</h3>
                <p>
                  Promotional, seasonal and campaign banners for your website.
                </p>
              </div>

              <div className="services-list-item">
                <span>04</span>
                <h3>Technical Support</h3>
                <p>
                  Minor improvements, fixes and practical technical assistance
                  after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="services-cta">
          <div className="container">
            <div className="row align-items-center services-cta-row g-3">
              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="left">
                  <div className="services-cta-content">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>HAVE A PROJECT IN MIND?</span>
                    </div>

                    <h2 className="services-cta-title">
                      Let's build something
                      <br />
                      that works for you.
                    </h2>

                    <p className="services-cta-description">
                      Tell us what you are building, what you need and where you
                      want to go. We'll help shape the right direction.
                    </p>

                    <a href="/contact" className="services-cta-button">
                      <span>Start a Project</span>
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-6 col-md-6">
                <ScrollReveal direction="right" delay={150}>
                  <div className="services-cta-visual">
                    <img
                      src="/images/services-cta.webp"
                      alt="Aakar.co creative digital studio"
                    />
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

export default Services;
