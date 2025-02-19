"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  mobile: string;
  country: string;
  message: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use SMTP for custom domains
      auth: {
        user: process.env.EMAIL_USER, // Store these in .env
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aliakram9789@gmail.com", // Recipient email
      subject: `New Contact Request from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Mobile: ${formData.mobile}
        Country: ${formData.country}
        Message: ${formData.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
};
