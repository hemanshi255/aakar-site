const express = require("express");
const validateContactForm = require("../middleware/validation");
const sendContactEmail = require("../services/emailService");

const router = express.Router();

router.post("/", validateContactForm, async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    requirement,
    category,
    plan,
    needsMonthlySupport,
    monthlySupportPlan,
    budget,
    projectDetails,
  } = req.body;

  const contactData = {
    name,
    email,
    phone,
    company,
    requirement,
    category,
    plan,
    needsMonthlySupport,
    monthlySupportPlan,
    budget,
    projectDetails,
  };
  try {
    await sendContactEmail(contactData);

    console.log("Contact enquiry email sent successfully.");

    return res.status(200).json({
      success: true,
      message:
        "Thank you for reaching out to Aakar. Our team will review your requirements and contact you within 1–2 business days.",
    });
  } catch (error) {
    console.error("Contact enquiry email error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        "We couldn't send your enquiry right now. Please try again later.",
    });
  }
});

module.exports = router;
