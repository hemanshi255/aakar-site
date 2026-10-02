const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const escapeHtml = (value = "") => {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
};

const sendContactEmail = async (data) => {
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
  } = data;

  const details = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Company / Business", company],
    ["Requirement", requirement],
    ["Project Category", category],
    ["Selected Plan", plan],
    ["Monthly Support", needsMonthlySupport === "yes" ? "Yes" : "No"],
    [
      "Monthly Support Plan",
      needsMonthlySupport === "yes" ? monthlySupportPlan : "Not selected",
    ],
    ["Budget", budget],
    ["Project Details", projectDetails],
  ];

  const rows = details
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px;border:1px solid #eee;font-weight:600;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px;border:1px solid #eee;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join("");

  return transporter.sendMail({
    from: {
      name: "Aakar.co Website",
      address: process.env.SMTP_USER,
    },
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Project Enquiry — ${name}`,
    text: details.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:700px;margin:auto;">
        <div style="background:#57010c;padding:24px;color:#fff;">
          <h2 style="margin:0;">Aakar.co</h2>
          <p style="margin:8px 0 0;">New Project Enquiry</p>
        </div>

        <div style="padding:24px;">
          <p>You have received a new enquiry from your website.</p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rows}
          </table>

          <p style="margin-top:24px;color:#777;font-size:12px;">
            Reply directly to this email to respond to the customer.
          </p>
        </div>
      </div>
    `,
  });
};

module.exports = sendContactEmail;
