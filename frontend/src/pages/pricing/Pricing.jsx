import React from "react";
import SEO from "../../components/common/SEO";
import ScrollReveal from "../../components/common/ScrollReveal";
import FinalCta from "../../components/home/FinalCta";

const Pricing = () => {
  const graphicPlans = [
    {
      name: "Essential Design",
      price: "₹4,999",
      description:
        "For businesses that need a professional visual starting point.",
      features: [
        "Logo Design",
        "Brand Colors",
        "Typography Selection",
        "Business Card Design",
        "Basic Social Profile Branding",
        "Final Design Files",
      ],
    },
    {
      name: "Business Design",
      price: "₹11,999",
      description: "A stronger creative setup for growing businesses.",
      features: [
        "Logo Design",
        "Brand Colors",
        "Typography Selection",
        "Business Card",
        "Letterhead",
        "Email Signature",
        "Social Media Templates",
        "Marketing Creative",
        "Final Design Files",
      ],
      popular: true,
    },
    {
      name: "Complete Creative",
      price: "₹24,999+",
      description:
        "A broader creative package for businesses building a complete presence.",
      features: [
        "Logo Design",
        "Brand Colors",
        "Typography Selection",
        "Business Stationery",
        "Social Media Creative Set",
        "Marketing Materials",
        "Packaging / Product Design",
        "Presentation / Catalogue Design",
        "Final Design Files",
      ],
    },
  ];

  const websitePlans = [
    {
      name: "Starter Website",
      price: "₹12,999",
      description:
        "A clean professional website for getting your business online.",
      features: [
        "Responsive Website",
        "Up to 5 Pages",
        "Custom UI Design",
        "Contact Form",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Sitemap.xml",
        "Robots.txt",
        "Basic Schema Markup",
        "Deployment Support",
      ],
    },
    {
      name: "Professional Website",
      price: "₹29,999",
      description:
        "A more complete website for businesses that need a stronger digital presence.",
      features: [
        "Responsive Website",
        "Up to 10 Pages",
        "Custom UI Design",
        "Advanced Sections",
        "Contact Form",
        "Lead Form",
        "Basic Integrations",
        "Basic SEO Setup",
        "Sitemap.xml",
        "Robots.txt",
        "Basic Schema Markup",
        "Analytics Setup",
        "Deployment Support",
      ],
      popular: true,
    },
    {
      name: "Business Pro",
      price: "₹49,999+",
      description:
        "For businesses that need a more advanced and customized website.",
      features: [
        "Custom Responsive Website",
        "Custom UI/UX",
        "Advanced Pages & Sections",
        "Forms & Lead Capture",
        "Third-party Integrations",
        "Custom Functionality",
        "Basic SEO Setup",
        "Sitemap.xml",
        "Robots.txt",
        "Basic Schema Markup",
        "Analytics Setup",
        "Deployment Support",
      ],
    },
  ];

  const ecommercePlans = [
    {
      name: "E-commerce Starter",
      price: "₹39,999",
      description: "A practical online store for launching your products.",
      features: [
        "Responsive E-commerce Website",
        "Product Listing",
        "Product Detail Pages",
        "Shopping Cart",
        "Checkout",
        "Customer Account",
        "Basic Order Management",
        "Payment Gateway Integration",
        "Basic SEO Setup",
        "Deployment Support",
      ],
    },
    {
      name: "E-commerce Professional",
      price: "₹59,999",
      description: "A more complete store for growing product businesses.",
      features: [
        "Everything in Starter",
        "Advanced Product Management",
        "Categories & Filters",
        "Coupon / Discount Support",
        "Order Management",
        "Customer Management",
        "Payment Gateway",
        "Shipping Integration",
        "Basic SEO Setup",
        "Analytics Setup",
        "Deployment Support",
      ],
      popular: true,
    },
    {
      name: "E-commerce Advanced",
      price: "₹89,999+",
      description:
        "For businesses requiring advanced e-commerce functionality.",
      features: [
        "Everything in Professional",
        "Custom E-commerce Features",
        "Advanced Checkout",
        "Advanced Order Workflows",
        "Third-party Integrations",
        "Custom Admin Features",
        "Advanced Customer Features",
        "Payment & Shipping Integrations",
        "Basic SEO Setup",
        "Analytics Setup",
        "Deployment Support",
      ],
    },
  ];

  const digitalPlans = [
    {
      name: "Launch",
      price: "₹24,999",
      description:
        "A practical combination of creative design and web development.",
      features: [
        "Logo / Creative Support",
        "Brand Colors",
        "Professional Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Deployment Support",
      ],
    },
    {
      name: "Business Launch",
      price: "₹44,999",
      description: "A stronger digital foundation for growing businesses.",
      features: [
        "Logo & Creative Setup",
        "Brand Colors",
        "Professional Website",
        "Custom UI Design",
        "Forms & Lead Capture",
        "Basic Integrations",
        "Basic SEO Setup",
        "Analytics Setup",
        "Deployment Support",
      ],
      popular: true,
    },
    {
      name: "Complete Digital Launch",
      price: "₹69,999+",
      description: "A complete creative and digital setup for a new business.",
      features: [
        "Complete Creative Setup",
        "Custom UI/UX",
        "Professional Website",
        "Advanced Functionality",
        "Marketing Creatives",
        "Forms & Lead Capture",
        "Third-party Integrations",
        "Basic SEO Setup",
        "Analytics Setup",
        "Deployment Support",
      ],
    },
  ];

  const monthlyPlans = [
    {
      name: "Starter Support",
      price: "₹7,999",
      period: "/month",
      description:
        "For businesses that need regular creative and website support.",
      features: [
        "8 Social Media Posts",
        "4 Stories",
        "2 Reel Covers",
        "Basic Promotional Creatives",
        "2 Website Updates",
        "Website Content Updates",
        "Basic Website Support",
        "Monthly Coordination",
      ],
    },

    {
      name: "Growth Support",
      price: "₹11,999",
      period: "/month",
      description:
        "For growing businesses that need consistent creative and digital support.",
      features: [
        "12 Social Media Posts",
        "6 Stories",
        "4 Reel Covers",
        "Promotional Creatives",
        "Festival Creatives",
        "4 Website Updates",
        "New Collection Uploads",
        "Product Content Updates",
        "Website Banners",
        "Minor Website Changes",
        "Basic Technical Support",
      ],
      popular: true,
    },

    {
      name: "Digital Pro",
      price: "₹17,999",
      period: "/month",
      description:
        "For active businesses needing ongoing creative and development support.",
      features: [
        "Everything in Growth Support",
        "Higher Creative Requirements",
        "More Website Updates",
        "Campaign Creatives",
        "Promotional Banners",
        "Advanced Website Content Updates",
        "Minor Development Changes",
        "Technical Support",
        "Priority Coordination",
      ],
    },
  ];

  const renderPlans = (plans) => {
    return (
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-lg-4 col-md-6" key={plan.name}>
            <ScrollReveal
              direction={
                index === 0
                  ? "left"
                  : index === plans.length - 1
                    ? "right"
                    : "up"
              }
              delay={index * 120}
            >
              <article
                className={`pricing-card ${
                  plan.popular ? "pricing-card-popular" : ""
                }`}
              >
                {plan.popular && (
                  <span className="pricing-card-badge">Most Popular</span>
                )}

                <div className="pricing-card-top">
                  <h3 className="pricing-card-name">{plan.name}</h3>

                  <p className="pricing-card-description">{plan.description}</p>

                  <div className="pricing-card-price">
                    <strong>{plan.price}</strong>

                    {plan.period && <span>{plan.period}</span>}
                  </div>
                </div>

                <div className="pricing-card-divider"></div>

                <div className="pricing-card-features">
                  <span className="pricing-card-includes">Includes</span>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/contact" className="pricing-card-button">
                  Start a Project
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </article>
            </ScrollReveal>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Pricing - Aakar.co | Creative Design & Digital Development"
        description="Explore Aakar.co pricing for graphic design, websites, e-commerce, custom digital solutions and ongoing creative and technical support."
      />

      <main className="pricing-page">
        {/* Pricing Hero */}
        <section className="pricing-hero">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="pricing-hero-content">
                <div className="home-services-eyebrow">
                  <span className="home-services-eyebrow-line"></span>
                  <span>SIMPLE. CLEAR. PRACTICAL.</span>
                </div>

                <h1 className="pricing-hero-title">
                  Pricing Built
                  <br />
                  Around Your Needs.
                </h1>

                <p className="pricing-hero-description">
                  Choose a starting point that fits your business. Every project
                  is structured around your actual requirements, not unnecessary
                  features.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Graphic Design */}
        <section className="pricing-section">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="pricing-section-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="pricing-section-eyebrow">CREATIVE</span>

                  <h2 className="pricing-section-title">Graphic Design</h2>

                  <p className="pricing-section-description">
                    Professional visual design for businesses, products and
                    marketing.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {renderPlans(graphicPlans)}
          </div>
        </section>

        {/* Web Development */}
        <section className="pricing-section pricing-section-alt">
          <div className="container">
            <ScrollReveal direction="right">
              <div className="pricing-section-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="pricing-section-eyebrow">DEVELOPMENT</span>

                  <h2 className="pricing-section-title">Web & Development</h2>

                  <p className="pricing-section-description">
                    Responsive websites built around your business and digital
                    goals.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {renderPlans(websitePlans)}
          </div>
        </section>

        {/* E-commerce */}
        <section className="pricing-section">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="pricing-section-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="pricing-section-eyebrow">ONLINE STORE</span>

                  <h2 className="pricing-section-title">E-commerce</h2>

                  <p className="pricing-section-description">
                    Online stores with practical shopping and business
                    management functionality.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {renderPlans(ecommercePlans)}
          </div>
        </section>

        {/* Complete Digital */}
        <section className="pricing-section pricing-section-alt">
          <div className="container">
            <ScrollReveal direction="right">
              <div className="pricing-section-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="pricing-section-eyebrow">
                    DESIGN + DEVELOPMENT
                  </span>

                  <h2 className="pricing-section-title">Complete Digital</h2>

                  <p className="pricing-section-description">
                    A combined creative and development setup for businesses
                    launching or rebuilding online.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {renderPlans(digitalPlans)}
          </div>
        </section>

        {/* Monthly Support */}
        <section className="pricing-section">
          <div className="container">
            <ScrollReveal direction="left">
              <div className="pricing-section-header">
                <i class="fa-solid fa-circle-dot services-category-number"></i>

                <div>
                  <span className="pricing-section-eyebrow">ONGOING</span>

                  <h2 className="pricing-section-title">Monthly Support</h2>

                  <p className="pricing-section-description">
                    Flexible creative and technical support after your website
                    or brand is launched.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="row">
              {monthlyPlans.map((plan, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={plan.name}>
                  <ScrollReveal direction="up" delay={index * 100}>
                    <article
                      className={`pricing-card ${
                        plan.popular ? "pricing-card-popular" : ""
                      }`}
                    >
                      {plan.popular && (
                        <span className="pricing-card-badge">Most Popular</span>
                      )}

                      <div className="pricing-card-top">
                        <h3 className="pricing-card-name">{plan.name}</h3>

                        <p className="pricing-card-description">
                          {plan.description}
                        </p>

                        <div className="pricing-card-price">
                          <strong>{plan.price}</strong>
                          <span>{plan.period}</span>
                        </div>
                      </div>

                      <div className="pricing-card-divider"></div>

                      <div className="pricing-card-features">
                        <span className="pricing-card-includes">Includes</span>

                        <ul>
                          {plan.features.map((feature) => (
                            <li key={feature}>
                              <i className="fa-solid fa-check"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href="/contact" className="pricing-card-button">
                        Get Started
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </a>
                    </article>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="pricing-note-section">
          <div className="container">
            <ScrollReveal direction="up">
              <div className="pricing-note">
                <span>GOOD TO KNOW</span>

                <p>
                  Pricing shown is a starting point. Final pricing may vary
                  based on project scope, number of pages, functionality,
                  integrations and content requirements.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FinalCta />
      </main>
    </>
  );
};

export default Pricing;
