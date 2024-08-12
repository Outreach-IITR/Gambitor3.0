import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/index.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema, loginSchema, infoSchema } from "../validations/authValidation.js";
import bcrypt from "bcryptjs";
import { createOTP, verifyOTP } from "../utils/otpGenerator.js";
import mailService from "../utils/mailService.js";
import { sendOtp, generateOTP } from "../utils/mobileOTP.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

class AuthController {
  static register = asyncHandler(async (req, res, next) => {
    const body = req.body;
    const validator = vine.compile(registerSchema);

    try {
      // Validate request body
      const payload = await validator.validate(body);

      const existingUser = await prisma.user.findUnique({
        where: { email: payload.email },
      });

      if (existingUser) {
        throw new ApiError(400, "Email already in use");
      }

      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      const user = await prisma.user.create({
        data: payload,
      });

      if (user) {
        const payloadData = {
          id: user.id,
          email: user.email,
        };
        generateTokenAndSetCookie(payloadData, res);
        const response = new ApiResponse(200, user, "User created successfully");
        
        return res.status(200).json(response);
      }
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.message);
      }
      // Pass other errors to the global error handler
      throw error;
    }
  });

  static login = asyncHandler(async (req, res, next) => {
    const body = req.body;
    const validator = vine.compile(loginSchema);

    try {
      const payload = await validator.validate(body);
      const findUser = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (!findUser) {
        throw new ApiError(400, "No user found with this email.");
      }

      if (!bcrypt.compareSync(payload.password, findUser.password)) {
        throw new ApiError(400, "Incorrect Password.");
      }

      // Issue token to user
      const payloadData = {
        id: findUser.id,
        email: findUser.email,
      };
      generateTokenAndSetCookie(payloadData, res);

      const response = new ApiResponse(200, findUser, "Logged in successfully");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.messages);
      }
      throw error;
    }
  });

  // static login = asyncHandler(async (req, res, next) => {
  //   try {
  //     const body = req.body;
  //     const validator = vine.compile(loginSchema);
  //     const payload = await validator.validate(body);

  //     // Find user with email
  //     const findUser = await prisma.user.findUnique({
  //       where: {
  //         email: payload.email,
  //       },
  //     });

  //     if (!findUser) {
  //       throw new ApiError(400, "No user found with this email.");
  //     }
  //     if (findUser) {
  //       if (!bcrypt.compareSync(payload.password, findUser.password)) {
  //         throw new ApiError(400, "Incorrect Password.");
  //       }

  //       // * Issue token to user
  //       const payloadData = {
  //         id: findUser.id,
  //         name: findUser.name,
  //         email: findUser.email,
  //         // add role and other req payload
  //       };
  //       const token = jwt.sign(payloadData, process.env.ACCESS_TOKEN_SECRET, {
  //         expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  //       });

  //       const response = new ApiResponse(
  //         200,
  //         { access_token: `Bearer ${token}` },
  //         "Logged in successfully"
  //       );
  //       return res.status(200).json(response);
  //     }
  //     throw new ApiError(400, "No user found with this email.");
  //   } catch (error) {
  //     if (error instanceof errors.E_VALIDATION_ERROR) {
  //       throw new ApiError(400, "Validation Error", error.messages);
  //     }

  //     if (error instanceof ApiError) {
  //       throw error;
  //     } else {
  //       throw new ApiError(500, "Internal Server Error");
  //     }
  //   }
  // });

  static failureGoogleLogin = (req, res) => {
    res.status(400).json({ message: "Google login failed" });
  };

  static updateAdditionalDetails = asyncHandler(async (req, res) => {
    try {
      // Validate input data
      console.log(req.body);
      const name=req.body.name;
      const formdata= {
        ...req.body.formData,
        name
      }
      console.log(formdata)
      const validator = vine.compile(infoSchema);
      const validatedData = await validator.validate(formdata);
      // Extract additional fields from req.body if present
      const { referralCode} = req.body.formData;
      
      if (referralCode) {
        console.log(referralCode)
        const referringUser = await prisma.user.findUnique({ where: { myReferral:referralCode } });
        console.log(referringUser)
        if (referringUser) {
          // Increment the referral count for the referring user
          await prisma.user.update({
            where: { id: referringUser.id },
            data: {
              referralCount: {
                increment: 1,
              },
            },
          });
        }
      }
      // Merge validated data with additional fields
      const data = {
        ...validatedData,
        referralCode,
      };
      // Update user in database
      console.log(req.params)
      console.log(data)
      const userId = parseInt(req.params.id);
      console.log(userId);
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: data,
      });
     res.json(updatedUser);
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.messages);
      }
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Details cannot be updated");
    }
  });

  static sendOtp = asyncHandler(async (req, res, next) => {
    try {
      const email = req.body.email;
      // Check if the email already exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email: email },
      });
      if (existingUser) {
        throw new ApiError(400, "Email already in use");
      }
      const otpCode = await createOTP(email);
      //console.log(otpCode);
      const mailOptions = {
        from: process.env.your_gmail,
        to: email,
        subject: "Email confirmation",
        text: `Thank you for registering for GambitoR 3.0 .Please use the code ${otpCode} to verify your email and proceed with the registration`,
      };
      mailService.sendMail(mailOptions, function (err) {
        if (err) {
          next(new ApiError(500, err.message, [], err.stack));
          console.log(err);
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

  static sendOtpPhone = asyncHandler(async (req, res, next) => {
    try {
      const phoneNumber = "+91" + req.body.contactNumber;
      if (!phoneNumber) {
        return res.status(400).json({ message: "Phone number is required" });
      }

      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
      await prisma.phoneotp.create({
        data: {
          phoneNumber,
          otp,
          expiresAt,
        },
      });

      const response = await sendOtp(phoneNumber, otp);

      console.log(`Verification code sent to ${phoneNumber}`);
      res.status(200).json({
        status: "success",
        data: "SMS sent successfully.",
        response,
      });
    } catch (error) {
      console.error("Error sending verification code:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to send SMS.",
      });
    }
  });

  static verifyOtpPhone = asyncHandler(async (req, res, next) => {
    try {
      const phoneNumber = "+91" + req.body.contactNumber;
      const otp = req.body.otp;
      if (!phoneNumber || !otp) {
        return res.status(400).json({ message: "Phone number and OTP are required" });
      }
      const otpRecord = await prisma.phoneotp.findFirst({
        where: {
          phoneNumber,
          otp,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (otpRecord) {
        await prisma.phoneotp.delete({
          where: {
            id: otpRecord.id,
          },
        });
        return res.status(200).json({ message: "OTP verified successfully" });
      } else {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      throw error;
    }
  });
}

export default AuthController;
