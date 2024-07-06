import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/index.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema, loginSchema } from "../validations/authValidation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
  static register = asyncHandler(async (req, res, next) => {
    try {
      const body = req.body;
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);

      // Encrypt the password
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      const user = await prisma.user.create({
        data: payload,
      });

      const response = new ApiResponse(200, user, "User created successfully");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.messages);
      }
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Registration failed", [], error.stack);
    }
  });

  static login = asyncHandler(async (req, res, next) => {
    try {
      // connectDB()
      const body = req.body;
      const validator = vine.compile(loginSchema);
      const payload = await validator.validate(body);

      // Find user with email
      const findUser = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (!findUser) {
        throw new ApiError(400, "No user found with this email.");
      }
      if (findUser) {
        if (!bcrypt.compareSync(payload.password, findUser.password)) {
          throw new ApiError(400, "Incorrect Password.");
        }

        // * Issue token to user
        const payloadData = {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          // add role and other req payload
        };
        const token = jwt.sign(payloadData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        });

        const response = new ApiResponse(
          200,
          { access_token: `Bearer ${token}` },
          "Logged in successfully"
        );
        return res.status(200).json(response);
      }
      throw new ApiError(400, "No user found with this email.");
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        throw new ApiError(400, "Validation Error", error.messages);
      }

      if (error instanceof ApiError) {
        throw error;
      } else {
        throw new ApiError(500, "Internal Server Error");
      }
    }
  });


  static loadAuth = (req, res) => {
    res.render('auth');
}

static successGoogleLogin = (req , res) => { 
	if(!req.user) 
		res.redirect('/failure'); 
    console.log(req.user);
	res.send("Welcome " + req.user.email); 
}

static failureGoogleLogin = (req , res) => { 
	res.send("Error"); 
}
}

export default AuthController;
