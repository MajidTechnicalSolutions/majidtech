const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const { resendApiKey } = require("../envConfig");

// Initialize Resend with API key (only if provided)
let resend = null;
if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

// POST route for contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, interests, budget, inbound, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required"
      });
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Interested In:</strong> ${interests || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>How they found us:</strong> ${inbound || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
    `;

    // Send email using Resend (if API key is configured)
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: 'Jamal from MajidTech <mail@majidtechnicalsolutions.com>', // Temporary: using Resend's verified domain
        to: ['majidtechnicalsolutions@gmail.com'], // Your verified email (temporary)
        subject: `New Contact Form Submission from ${name}`,
        html: emailContent,
        replyTo: email, // Allow you to reply directly to the person who submitted
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({
          success: false,
          message: "Failed to send email",
          error: error.message
        });
      }

      // Success response with email sent
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully!",
        data: data
      });
    } else {
      // API key not configured - just log the submission for testing
      console.log('📧 Contact Form Submission (Email not sent - no API key):');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Message:', message);
      console.log('---');

      // Success response without email
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully! (Email API not configured)",
        note: "This is a test response. Configure RESEND_API_KEY to send actual emails."
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

module.exports = router; 