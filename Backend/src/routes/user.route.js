import { Router } from "express";
import AuthController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authenticate.js";
import ProfileController from "../controllers/profileController.js";
import passport from "passport";
import "../utils/passportConfig.js";

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

// Route to initiate Google OAuth2 login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth2 callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/personalinfo",
    failureRedirect: "http://localhost:3000/login",
  })
);

// failure
router.get("/auth/failure", AuthController.failureGoogleLogin);

//mail verification

router.post("/sendOtp", AuthController.sendOtp);
router.post("/verifyOtp", AuthController.verifyOtp);

// mobile verification

router.post("/sendOtpPhone", AuthController.sendOtpPhone);
router.post("/verifyOtpPhone", AuthController.verifyOtpPhone);

//info

router.post('/user/:id/details', AuthController.updateAdditionalDetails);

// user routes to update profile
router.put('/user/:id/update',authMiddleware,ProfileController.updateUser);
router.get('/school-ambassador/:id',ProfileController.schoolAmbassador);

export { router };
