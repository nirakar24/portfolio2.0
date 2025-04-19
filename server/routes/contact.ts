import { Router } from "express";
import nodemailer from "nodemailer";
import { log } from "../vite";

const router = Router();

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nirakarjena249@gmail.com", // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your app password
  },
  tls: {
    rejectUnauthorized: false // This might be needed in some environments
  }
});

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email content
    const mailOptions = {
      from: "nirakarjena249@gmail.com", // Your Gmail address
      to: "nirakarjena249@gmail.com", // Your Gmail address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    log(`Email sent: ${info.messageId}`);

    log(`Contact form submitted by ${name} (${email})`);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    log(`Error sending contact form email: ${error.message}`);
    res.status(500).json({ 
      success: false, 
      message: "Error sending email", 
      error: error.message 
    });
  }
});

export default router; 