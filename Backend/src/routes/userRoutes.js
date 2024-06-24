import { Router } from "express";
import AuthController from "../controllers/authController.js";
const router = Router();

router.post("/auth/register", AuthController.register);
router.post("/sendOtp",AuthController.sendOtp);
router.post("/verifyOtp",AuthController.verifyOtp);

export default router;