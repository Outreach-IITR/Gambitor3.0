import twilio from 'twilio';
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
const client = new twilio(accountSid, authToken);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP for phone number verification for Gambitor3.0 is ${otp}`,
    from: TWILIO_PHONE_NUMBER,
    to: phoneNumber,
  });
};

function generateOTP() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

export {sendOtp,generateOTP}

