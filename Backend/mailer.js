import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const transporter = nodemailer.createTransport({
 
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT, // Use 465 if secure is set to true
  secure: false, // Use true if SSL is required (port 465)
  auth: {
    user: process.env.SMPT_MAIL, // Gmail address from .env
    pass: process.env.SMPT_PASSWORD, // Gmail App Password from .env
  },
});

export default transporter;
