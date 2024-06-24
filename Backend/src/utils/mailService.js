import nodemailer from 'nodemailer'

const mailService = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.your_gmail,
      pass: process.env.your_gmail_password,
    }
  });

export default mailService  