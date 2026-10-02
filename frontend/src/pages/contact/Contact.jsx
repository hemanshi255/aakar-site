import React, { useState } from "react";
import SEO from "../../components/common/SEO";
import ScrollReveal from "../../components/common/ScrollReveal";
import { CONTACT_CONFIG } from "../../config/contactConfig";

const Contact = () => {
  const [category, setCategory] = useState("");
  const [needsMonthlySupport, setNeedsMonthlySupport] = useState("");
  const [monthlySupportPlan, setMonthlySupportPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [phone, setPhone] = useState("");

  const getFieldError = (fieldName) => {
    return fieldErrors[fieldName] || "";
  };

  const openWhatsApp = (number, message) => {
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      message,
    )}`;

    window.location.href = whatsappUrl;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus({
      type: "",
      message: "",
    });
    setFieldErrors({});

    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
      company: formData.get("company")?.trim(),
      requirement: formData.get("requirement")?.trim(),
      category: formData.get("category"),
      plan: formData.get("plan"),
      needsMonthlySupport: formData.get("needsMonthlySupport") || "no",
      monthlySupportPlan: formData.get("monthlySupportPlan") || "",
      budget: formData.get("budget")?.trim(),
      projectDetails: formData.get("projectDetails")?.trim(),
    };

    const whatsappMessage = `
Hello Aakar.co,

I have submitted a project enquiry through your website.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company / Business: ${data.company}
Requirement: ${data.requirement}

Project Category: ${data.category}
Selected Plan: ${data.plan}

Monthly Support: ${data.needsMonthlySupport === "yes" ? "Yes" : "No"}
Monthly Support Plan: ${
      data.needsMonthlySupport === "yes"
        ? data.monthlySupportPlan
        : "Not selected"
    }

Budget: ${data.budget}

Project Details:
${data.projectDetails}

Thank you.
`.trim();

    if (
      data.category === "digital" &&
      data.needsMonthlySupport === "yes" &&
      !data.monthlySupportPlan
    ) {
      setFieldErrors({
        monthlySupportPlan: "Please select a Monthly Support plan.",
      });

      setSubmitStatus({
        type: "error",
        message: "Please complete the Monthly Support selection.",
      });

      setIsSubmitting(false);

      return;
    }

    try {
      const response = await fetch(
        "https://aakar-backend-rcvs.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setFieldErrors(result.errors || {});

        setSubmitStatus({
          type: "error",
          message: result.message || "Please check the form and try again.",
        });

        return;
      }

      if (data.category === "graphic") {
        openWhatsApp(CONTACT_CONFIG.whatsapp.designer, whatsappMessage);
      }

      if (data.category === "development" || data.category === "ecommerce") {
        openWhatsApp(CONTACT_CONFIG.whatsapp.developer, whatsappMessage);
      }

      if (data.category === "digital") {
        // Complete Digital enquiries are handled through email only.
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message || "Your enquiry has been submitted successfully.",
      });

      form.reset();
      setCategory("");
      setPhone("");
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const planOptions = {
    graphic: ["Essential Design", "Business Design", "Complete Creative"],
    development: ["Starter Website", "Professional Website", "Business Pro"],
    ecommerce: [
      "E-commerce Starter",
      "E-commerce Professional",
      "E-commerce Advanced",
    ],
    digital: ["Launch", "Business Launch", "Complete Digital Launch"],
  };

  const monthlySupportPlans = [
    "Starter Support",
    "Growth Support",
    "Digital Pro",
  ];
  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  return (
    <>
      <SEO
        title="Contact Aakar.co - Start Your Project"
        description="Have a project in mind? Get in touch with Aakar.co for graphic design, UI/UX, web development and complete digital solutions."
      />

      <main className="contact-page">
        {/* =========================================
            HERO
        ========================================== */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-inner">
              <ScrollReveal direction="left">
                <div className="contact-hero-content">
                  <div className="home-services-eyebrow">
                    <span className="home-services-eyebrow-line"></span>
                    <span>START A PROJECT</span>
                  </div>

                  <h1 className="contact-hero-title">
                    Let's build
                    <br />
                    something together.
                  </h1>

                  <p className="contact-hero-description">
                    Tell us a little about your business, what you need and what
                    you want to build. We'll get back to you with the right
                    direction.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="contact-hero-side">
                  <span className="contact-hero-side-number">01</span>

                  <div className="contact-hero-side-line"></div>

                  <span className="contact-hero-side-text">
                    GRAPHIC DESIGN
                    <br />
                    UI/UX
                    <br />
                    WEB DEVELOPMENT
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECT FORM
        ========================================== */}
        <section className="contact-form-section">
          <div className="container">
            <div className="row contact-form-row">
              <div className="col-lg-5 col-md-5 col-12">
                <ScrollReveal direction="left">
                  <div className="contact-form-intro">
                    <div className="home-services-eyebrow">
                      <span className="home-services-eyebrow-line"></span>
                      <span>PROJECT DETAILS</span>
                    </div>

                    <h2>
                      Tell us what
                      <br />
                      you're building.
                    </h2>

                    <p>
                      Fill in the details below and give us enough information
                      to understand your project.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-lg-7 col-md-7 col-12">
                <ScrollReveal direction="right" delay={150}>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {/* NAME */}
                    <div className="contact-field">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        autoComplete="name"
                        maxLength={80}
                        className={`contact-input ${
                          getFieldError("name") ? "contact-input-error" : ""
                        }`}
                        required
                      />
                      <p className="form-help-text">
                        Please enter your full name.
                      </p>
                      {getFieldError("name") && (
                        <span className="contact-field-error">
                          <i className="fa-solid fa-circle-exclamation"></i>
                          {getFieldError("name")}
                        </span>
                      )}
                    </div>

                    {/* EMAIL + PHONE */}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="contact-field">
                          <label htmlFor="email">
                            Email <span>*</span>
                          </label>

                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            className={`contact-input ${
                              getFieldError("email")
                                ? "contact-input-error"
                                : ""
                            }`}
                            required
                          />
                          <p className="form-help-text">
                            Please enter a valid email address.
                          </p>
                          {getFieldError("email") && (
                            <span className="contact-field-error">
                              <i className="fa-solid fa-circle-exclamation"></i>
                              {getFieldError("email")}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="contact-field">
                          <label htmlFor="phone">
                            Phone <span>*</span>
                          </label>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            inputMode="numeric"
                            pattern="[6-9][0-9]{9}"
                            maxLength={10}
                            placeholder="9876543210"
                            value={phone}
                            onChange={(event) => {
                              const value = event.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10);
                              setPhone(value);
                            }}
                            className={`contact-input ${
                              getFieldError("phone")
                                ? "contact-input-error"
                                : ""
                            }`}
                            required
                          />
                          <p className="form-help-text">
                            Please enter a valid 10-digit phone number.
                          </p>
                          {getFieldError("phone") && (
                            <span className="contact-field-error">
                              <i className="fa-solid fa-circle-exclamation"></i>
                              {getFieldError("phone")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* COMPANY */}
                    <div className="contact-field">
                      <label htmlFor="company">
                        Company / Business <span>*</span>
                      </label>

                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your company or business name"
                        autoComplete="organization"
                        maxLength={120}
                        className={`contact-input ${
                          getFieldError("company") ? "contact-input-error" : ""
                        }`}
                        required
                      />

                      {getFieldError("company") && (
                        <span className="contact-field-error">
                          <i className="fa-solid fa-circle-exclamation"></i>
                          {getFieldError("company")}
                        </span>
                      )}
                    </div>

                    {/* CATEGORY */}
                    <div className="contact-field">
                      <label htmlFor="category">
                        Category <span>*</span>
                      </label>

                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(event) => {
                          const value = event.target.value;

                          setCategory(value);

                          if (value !== "digital") {
                            setNeedsMonthlySupport("");
                            setMonthlySupportPlan("");
                          }
                        }}
                        required
                        className={`contact-input ${
                          getFieldError("category") ? "contact-input-error" : ""
                        }`}
                      >
                        {getFieldError("category") && (
                          <span className="contact-field-error">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {getFieldError("category")}
                          </span>
                        )}
                        <option value="">Select project category</option>

                        <option value="graphic">Graphic Design</option>

                        <option value="development">Development</option>

                        <option value="ecommerce">E-commerce</option>

                        <option value="digital">Complete Digital</option>
                      </select>
                    </div>

                    {/* SELECT PLAN */}
                    {category && (
                      <div className="contact-field">
                        <label htmlFor="plan">
                          Select Plan <span>*</span>
                        </label>

                        <select
                          id="plan"
                          name="plan"
                          required
                          className={`contact-input ${
                            getFieldError("plan") ? "contact-input-error" : ""
                          }`}
                        >
                          {getFieldError("plan") && (
                            <span className="contact-field-error">
                              <i className="fa-solid fa-circle-exclamation"></i>
                              {getFieldError("plan")}
                            </span>
                          )}
                          <option value="">Select a plan</option>

                          {planOptions[category].map((plan) => (
                            <option value={plan} key={plan}>
                              {plan}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {category === "digital" && (
                      <div className="contact-field">
                        <label>Need Monthly Support?</label>

                        <div className="contact-radio-group">
                          <label className="contact-radio-option">
                            <input
                              type="radio"
                              name="needsMonthlySupport"
                              value="yes"
                              checked={needsMonthlySupport === "yes"}
                              onChange={(event) => {
                                setNeedsMonthlySupport(event.target.value);
                              }}
                            />
                            <span>Yes, I need Monthly Support</span>
                          </label>

                          <label className="contact-radio-option">
                            <input
                              type="radio"
                              name="needsMonthlySupport"
                              value="no"
                              checked={needsMonthlySupport === "no"}
                              onChange={(event) => {
                                setNeedsMonthlySupport(event.target.value);
                                setMonthlySupportPlan("");
                              }}
                            />
                            <span>No, not right now</span>
                          </label>
                        </div>
                      </div>
                    )}

                    {category === "digital" &&
                      needsMonthlySupport === "yes" && (
                        <div className="contact-field">
                          <label htmlFor="monthlySupportPlan">
                            Select Monthly Support Plan <span>*</span>
                          </label>
                          <select
                            id="monthlySupportPlan"
                            name="monthlySupportPlan"
                            value={monthlySupportPlan}
                            onChange={(event) => {
                              setMonthlySupportPlan(event.target.value);
                            }}
                            className={`contact-input ${
                              getFieldError("monthlySupportPlan")
                                ? "contact-input-error"
                                : ""
                            }`}
                            required
                          >
                            {getFieldError("monthlySupportPlan") && (
                              <span className="contact-field-error">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                {getFieldError("monthlySupportPlan")}
                              </span>
                            )}
                            <option value="">
                              Select a monthly support plan
                            </option>

                            {monthlySupportPlans.map((plan) => (
                              <option value={plan} key={plan}>
                                {plan}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                    {/* WHAT DO YOU NEED */}
                    <div className="contact-field">
                      <label htmlFor="requirement">
                        What do you need? <span>*</span>
                      </label>

                      <input
                        type="text"
                        id="requirement"
                        name="requirement"
                        placeholder="Briefly describe what you need"
                        required
                      />
                    </div>

                    {/* BUDGET */}
                    <div className="contact-field">
                      <label htmlFor="budget">Budget</label>

                      <select
                        id="budget"
                        name="budget"
                        className={`contact-input ${
                          getFieldError("budget") ? "contact-input-error" : ""
                        }`}
                      >
                        {getFieldError("budget") && (
                          <span className="contact-field-error">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {getFieldError("budget")}
                          </span>
                        )}
                        <option value="">Select your approximate budget</option>

                        <option value="under-10000">Under ₹10,000</option>

                        <option value="10000-25000">₹10,000 – ₹25,000</option>

                        <option value="25000-50000">₹25,000 – ₹50,000</option>

                        <option value="50000-100000">
                          ₹50,000 – ₹1,00,000
                        </option>

                        <option value="100000-plus">₹1,00,000+</option>

                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    {/* PROJECT DETAILS */}
                    <div className="contact-field">
                      <label htmlFor="projectDetails">Project Details</label>

                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows="7"
                        placeholder="Tell us about your project, goals, timeline or anything else we should know..."
                        className={`contact-input ${
                          getFieldError("projectDetails")
                            ? "contact-input-error"
                            : ""
                        }`}
                      ></textarea>
                      {getFieldError("projectDetails") && (
                        <span className="contact-field-error">
                          <i className="fa-solid fa-circle-exclamation"></i>
                          {getFieldError("projectDetails")}
                        </span>
                      )}
                    </div>

                    <div className="contact-form-note">
                      <span className="contact-form-note-icon">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>

                      <p>
                        Please make sure all the information provided above,
                        including your name, email, phone number, business
                        details and project requirements, is accurate and up to
                        date. We’ll use these details to understand your enquiry
                        and contact you regarding your project.
                      </p>
                    </div>

                    {/* SUBMIT */}
                    <div className="contact-form-submit">
                      <button
                        type="submit"
                        className="contact-submit-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="contact-submit-spinner"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <i className="fa-solid fa-arrow-right"></i>
                          </>
                        )}
                      </button>
                    </div>

                    {submitStatus.message && (
                      <div
                        className={`contact-form-status contact-form-status-${submitStatus.type}`}
                        role="alert"
                      >
                        {submitStatus.type === "success" ? (
                          <>
                            <div className="contact-status-icon">
                              <i className="fa-solid fa-check"></i>
                            </div>

                            <div className="contact-status-content">
                              <h4>Enquiry Submitted Successfully</h4>

                              <p>
                                Thank you for reaching out to Aakar. Our team
                                will review your requirements and contact you
                                within <strong>1–2 business days</strong>.
                              </p>

                              <span>
                                We’ve received your project details
                                successfully.
                              </span>
                            </div>
                          </>
                        ) : (
                          submitStatus.message
                        )}
                      </div>
                    )}
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
