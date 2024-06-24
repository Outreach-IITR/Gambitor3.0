import {DateTime} from 'luxon';
import { prisma } from '../db/client.js';
function generateOTP() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

 // Create OTP object 
  async function createOTP(email) {
    const otpCode = generateOTP();
    const expirationTime = DateTime.now().plus({ minutes: 5 }).toJSDate(); // OTP expires in 5 minutes
  
    const otp = await prisma.OTP.create({
      data: {
        email,
        code: otpCode,
        expiresAt: expirationTime,
      },
    });
    console.log(otp);
    return otpCode;
  }
  
  // Verify an OTP
  async function verifyOTP(email, otpCode) {
    const otpRecord = await prisma.OTP.findFirst({
      where: {
        email,
        code: otpCode,
        expiresAt: {
          gte: new Date(),
        },
      },
    });
  
    return otpRecord !== null;
  }  

export {createOTP,verifyOTP}