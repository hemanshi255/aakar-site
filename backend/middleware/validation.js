const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^[6-9]\d{9}$/;

const allowedCategories = {
  graphic: ["Essential Design", "Business Design", "Complete Creative"],

  development: ["Starter Website", "Professional Website", "Business Pro"],

  ecommerce: [
    "E-commerce Starter",
    "E-commerce Professional",
    "E-commerce Advanced",
  ],

  digital: ["Launch", "Business Launch", "Complete Digital Launch"],
};

const allowedMonthlySupportPlans = [
  "Starter Support",
  "Growth Support",
  "Digital Pro",
];

const validateContactForm = (req, res, next) => {
  const {
    name,
    email,
    phone,
    company,
    category,
    plan,
    needsMonthlySupport,
    monthlySupportPlan,
    budget,
    projectDetails,
  } = req.body;

  const errors = {};

  // Name
  if (!name || !name.trim()) {
    errors.name = "Name is required.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email
  if (!email || !email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone
  if (!phone || !phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phone.trim())) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  // Company
  if (!company || !company.trim()) {
    errors.company = "Company / Business name is required.";
  } else if (company.trim().length < 2) {
    errors.company = "Company / Business name must be at least 2 characters.";
  }

  // Category
  if (!category) {
    errors.category = "Project category is required.";
  } else if (
    !Object.prototype.hasOwnProperty.call(allowedCategories, category)
  ) {
    errors.category = "Invalid project category.";
  }

  // Plan
  if (!plan || !plan.trim()) {
    errors.plan = "Plan selection is required.";
  } else if (
    category &&
    allowedCategories[category] &&
    !allowedCategories[category].includes(plan)
  ) {
    errors.plan = "Selected plan does not belong to this category.";
  }

  if (needsMonthlySupport === "yes") {
    if (category !== "digital") {
      errors.needsMonthlySupport =
        "Monthly Support is only available with Complete Digital.";
    }

    if (!monthlySupportPlan) {
      errors.monthlySupportPlan = "Monthly Support plan is required.";
    } else if (!allowedMonthlySupportPlans.includes(monthlySupportPlan)) {
      errors.monthlySupportPlan = "Invalid Monthly Support plan.";
    }
  } else if (needsMonthlySupport !== "no") {
    errors.needsMonthlySupport =
      "Please select whether you need Monthly Support.";
  }

  if (category !== "digital" && monthlySupportPlan) {
    errors.monthlySupportPlan =
      "Monthly Support is only available with Complete Digital.";
  }

  // Budget
  if (!budget || !budget.trim()) {
    errors.budget = "Budget is required.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    });
  }

  next();
};

module.exports = validateContactForm;
