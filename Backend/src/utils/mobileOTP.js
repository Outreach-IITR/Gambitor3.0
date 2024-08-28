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

// import axios from 'axios'

// const sendOtp = async (phoneNumber, otp) => {
//   try {
//     const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
//       params: {
//         authorization: process.env.YOUR_API_KEY,
//         variables_values: otp,
//         route: 'otp',
//         numbers:[phoneNumber],
//       },
//       headers: {
//         'cache-control': 'no-cache',
//       },
//     });

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     throw error;
//   }
// };

// import fast2sms from 'fast-two-sms'

// const sendOtp = async (phoneNumber, otp) => {
//   try {
//     console.log('API Key:', process.env.YOUR_API_KEY);
//     console.log(phoneNumber)
//     const response = await fast2sms.sendMessage({
//       authorization: process.env.YOUR_API_KEY,
//       message: `Your OTP for phone number verification is ${otp}`,
//       numbers: [phoneNumber],
//     });
//     console.log(response)
//     console.log('OTP sent successfully:', response);
//     return response;
//   } catch (error) {
//     console.error('Failed to send OTP:', error);
//     throw error;
//   }
// };


function generateOTP() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

export {sendOtp,generateOTP}

