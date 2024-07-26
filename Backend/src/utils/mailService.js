import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mailService = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.your_gmail,
      pass: process.env.your_gmail_password,
    }
  });

  mailService.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
      console.log(process.env.your_gmail)
    }
  });

export default mailService