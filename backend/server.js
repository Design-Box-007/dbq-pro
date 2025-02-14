require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Adjust based on frontend URL
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Check if .env variables are loaded
console.log("✅ Server started on PORT:", PORT);
console.log("📩 Email User:", process.env.EMAIL_USER);
console.log("🔑 Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

// Contact Form Route
app.post("/contact", async (req, res) => {
  const { name, email, mobile, country, message } = req.body;

  if (!name || !email || !message) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ error: "Please fill in all required fields" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-receiving-email@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCountry: ${country}\nMessage: ${message}`,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
