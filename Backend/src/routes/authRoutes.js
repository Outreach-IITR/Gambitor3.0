import { Router } from "express";
import AuthController from "../controllers/authController.js";
import passport from "passport";
import "../utils/passportConfig.js";
import errorHandler from "../controllers/errorController.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const router = Router();

router.use(passport.initialize());
router.use(passport.session());

router.get("/", (req, res) => {
  return res.json({ message: "Yay It's working..." });
});

router.post("/auth/register", AuthController.register);
router.post("/auth/login",AuthController.login);
// * Profile routes
//router.get("/profile", authMiddleware, ProfileController.index); //Private route

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email", "openid"] }));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
  (req, res) => {
    const email = req.user.email;
    res.redirect(`http://localhost:3000/auth/google/callback?email=${encodeURIComponent(email)}`);
  }
);

router.get('/logout', AuthController.logout);

//mail verification

router.post("/sendOtp", AuthController.sendOtp);
router.post("/verifyOtp", AuthController.verifyOtp);

// mobile verification

router.post("/sendOtpPhone", AuthController.sendOtpPhone);
router.post("/verifyOtpPhone", AuthController.verifyOtpPhone);

//info
router.post('/user/:id/details', AuthController.updateAdditionalDetails);

export { router };
