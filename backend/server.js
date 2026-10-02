const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://aakar-site.vercel.app",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Aakar.co backend is running successfully.",
  });
});

app.listen(PORT, () => {
  console.log(`Aakar.co backend running on port ${PORT}`);
});
