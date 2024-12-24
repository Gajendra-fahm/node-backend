const emailModel = require("../Model/EmailModel");


const sendEmailController = async (req,res) => {
    const { to, subject, text, html } = req.body;

  try {
    // Send email using the model
    await sendEmail({ to, subject, text, html });
    
    // Respond with success
    res.status(200).json({ status: 'success', message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email' });
  }
}

module.exports = {sendEmailController}