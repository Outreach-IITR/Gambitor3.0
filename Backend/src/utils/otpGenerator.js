import {DateTime} from 'luxon';
import { prisma } from '../db/client.js';
function generateOTP() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

 // Create OTP object 
  async function createOTP(email) {
    const otpCode = generateOTP();
    const expirationTime = DateTime.now().plus({ minutes: 4 }).toJSDate(); // OTP expires in 5 minutes
  
    const otp = await prisma.Otpvalue.create({
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
  async function verifyOTP(email, otpval) {
    console.log(email)
    console.log(otpval)
    const currentDate = new Date();
    const otpRecord = await prisma.Otpvalue.findFirst({
      where: {
        email: email,
        code: otpval,  // Add OTP code match condition
        expiresAt: {
          gte: currentDate,  // Ensure the OTP is not expired
        },
      },
      select: {
        id: true,
        email: true,
        code: true,
        expiresAt: true,
      },
    });
    console.log(otpRecord);
    console.log(otpRecord !== null)
    return otpRecord !== null;
  }  

export {createOTP,verifyOTP}