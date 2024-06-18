import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma, connectDB } from "../db/index.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema, loginSchema } from "../validations/authValidation.js";
import bcrypt from "bcryptjs";
// import { Role } from '@prisma/client';
import jwt from "jsonwebtoken";

class AuthController {
  static async register(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);

      //   * Encrypt the password
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      const user = await prisma.user.create({
        data: payload,
      });

      return res.json({
        status: 200,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.log("The error is", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      }
    }
  }

  static async login(req, res) {
    try {
      // connectDB()
      const body = req.body;
      const validator = vine.compile(loginSchema);
      const payload = await validator.validate(body);

      //   * Find user with email
      const findUser = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (findUser) {
        if (!bcrypt.compareSync(payload.password, findUser.password)) {
          return res.status(400).json({
            errors: {
              password: "Incorrect Password.",
            },
          });
        }

        // * Issue token to user
        const payloadData = {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          // add role and other req payload
        };
        const token = jwt.sign(payloadData, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "365d",
        });

        return res.json({
          message: "Logged in successfully",
          access_token: `Bearer ${token}`,
        });
      }

      return res.status(400).json({
        errors: {
          email: "No user found with this email.",
        },
      });
    } catch (error) {
      console.log("The error is", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }
}

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma, connectDB } from "../db/index.js";
import vine, { errors } from "@vinejs/vine";
import { registerSchema, loginSchema } from "../validations/authValidation.js";
import bcrypt from "bcryptjs";
// import { Role } from '@prisma/client';
import jwt from "jsonwebtoken";

class AuthController {
  static register = asyncHandler(async (req, res) => {
    const body = req.body;
    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(body);

    //   * Encrypt the password
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    const user = await prisma.user.create({
      data: payload,
    });
    const response = new ApiResponse(200, user, "User created successfully");
    return res.status(200).json(response);
  });

  static login = asyncHandler(async (req, res) => {
    // connectDB()
    const body = req.body;
    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(body);

    //   * Find user with email
    const findUser = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (findUser) {
      if (!bcrypt.compareSync(payload.password, findUser.password)) {
        const response = new ApiResponse(400, null, "Incorrect Password.");
        return res.status(400).json(response);
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

    const response = new ApiResponse(400, null, "No user found with this email.");
    return res.status(400).json(response);
  });
}

export default AuthController;
