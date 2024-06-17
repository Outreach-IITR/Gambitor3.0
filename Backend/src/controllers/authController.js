import prisma from '../db/dbConfig.js';
import vine, { errors } from '@vinejs/vine';
import { registerSchema } from '../validations/authValidation.js';

class AuthController {
  static async register(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);
    } catch (error) {
      console.log('The error is', error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      }
    }
  }
}

export default AuthController;
