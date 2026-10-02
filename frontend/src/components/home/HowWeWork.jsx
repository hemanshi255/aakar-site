import React from "react";
import ScrollReveal from "../../components/common/ScrollReveal";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, goals and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define scope, deliverables and project direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the visual direction and UI/UX.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the website or digital product.",
  },
  {
    number: "05",
    title: "Test",
    description: "Responsive, functional and quality checks.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deployment, technical setup and handover.",
  },
];

const HowWeWork = () => {
  return (
    <section className="home-process">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="home-process-header">
            <div className="home-process-eyebrow">
              <span className="home-process-eyebrow-line"></span>
              <span>OUR PROCESS</span>
            </div>

            <h2 className="home-process-title">From idea to launch.</h2>

            <p className="home-process-description">
              A clear, collaborative process that keeps the work moving without
              making it complicated.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="home-process-list">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.number} direction="up" delay={index * 120}>
              <div className="home-process-item">
                <span className="home-process-number">{step.number}</span>

                <h3 className="home-process-step-title">{step.title}</h3>

                <p className="home-process-step-description">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
