import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/client.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "../validations/userValidation.js";
import { createOTP, verifyOTP } from "../utils/otpGenerator.js";
import mailService from "../utils/mailService.js";

class AuthController {
  static register = asyncHandler(async (req, res, next) => {
    try {
      const body = req.body.formData;
      console.log(body);
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);
      console.log(payload);
      const user = await prisma.user.create({
        data: payload,
      });
      console.log(body);
      const response = new ApiResponse(200, user, "User created successfully");
      
      const mailOptions = {
        from: process.env.your_gmail,
        to: req.body.formData.email,
        subject: "Pre-Registration for GambitoR Successful.",
        text: `Hello ${req.body.formData.name}, \n
        Team GambitoR is delighted to inform you that you have successfully registered for GambitoR 3.0! \n  
        These are the credentials you have entered.
        Mobile Number: ${req.body.formData.contactNumber} 
        Email: ${req.body.formData.email} 
        Password: ${req.body.formData.contactNumber} \n
        Use the email and password provided to login to your account once the website goes live.
        \n
        Follow us on our social media handles to stay connected! \n
        Further updates will be sent to your registered email address. \n
        \n
        With regards,
        Team GambitoR.
        `,
      };

      mailService.sendMail(mailOptions, function (err) {
        if (err) {
          next(new ApiError(500, err.message, [], err.stack));
        } else {
          res.status(201).json({
            status: "success",
            data: "Registration Completed Successfully!",
          });
        }
      });
    } catch (error) {
      console.log(error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.messages);
      }
      if (error.code === "P2002" && error.meta.target.includes("email")) {
        res
          .status(400)
          .json({ error: "This email is already registered. Please use a different email." });
      }
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Registration failed", [], error.stack);
    }
  });

  static sendOtp = asyncHandler(async (req, res, next) => {
    try {
      const email = req.body.email;
      const otpCode = await createOTP(email);
      console.log(otpCode);
      console.log(process.env.your_gmail)
      const mailOptions = {
        from: process.env.your_gmail,
        to: email,
        subject: "Email confirmation",
        text: `Thank you for pre-registering for GambitoR 3.0 .Please use the code ${otpCode} to verify your email and proceed with the pre-registration`,
      };
      mailService.sendMail(mailOptions, function (err) {
        if (err) {
          next(new ApiError(500, err.message, [], err.stack));
          console.log(err)
        } else {
          res.status(200).json({
            status: "success",
            data: "Mail sent successfully.",
          });
        }
      });
    } catch (error) {
      throw error;
    }
  });



  static verifyOtp = asyncHandler(async (req, res, next) => {
    try {
      const { email, otp } = req.body;
      console.log(email);
      console.log(otp);
      const isOtpValid = await verifyOTP(email, otp);
      console.log(isOtpValid);
      if (isOtpValid) {
        res.json({ message: "OTP verified successfully" });
      } else {
        res.status(400).json({ message: "Invalid OTP" });
      }
    } catch (error) {
      next(error);
    }
  });
}

export default AuthController;
