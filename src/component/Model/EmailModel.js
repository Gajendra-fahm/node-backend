const dbConnection = require("../../Config/db");
require('dotenv').config();
const nodemailer = require('nodemailer');

// Setup the transporter using environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send an email
const sendEmailModel = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  // Return the result from nodemailer
  return await transporter.sendMail(mailOptions);
};

module.exports = { sendEmailModel };
