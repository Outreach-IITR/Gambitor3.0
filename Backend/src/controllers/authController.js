import prisma from '../db/dbConfig.js';
import vine, { errors } from '@vinejs/vine';
import { registerSchema, loginSchema } from '../validations/authValidation.js';
import bcrypt from "bcryptjs";
// import { Role } from '@prisma/client';

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
      console.log('The error is', error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      }
    }
  }

  static async login(req, res) {
    try {
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

export default AuthController;
