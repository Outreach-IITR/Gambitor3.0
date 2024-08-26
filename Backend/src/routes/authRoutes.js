import { Router } from "express";
import AuthController from "../controllers/authController.js";
import passport from "passport";
import "../utils/passportConfig.js";
import errorHandler from "../controllers/errorController.js";

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
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:3000/login"
//   }),
//   (req, res) => {
//     const redirectUrl = req.user.isNew
//       ? "http://localhost:3000/personalinfo"
//       : "http://localhost:3000/dashboard";
//     res.redirect(redirectUrl);
//     console.log(req.user.isNew);
//     console.log(redirectUrl)
//   }
// );

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    console.log("Authenticated user:", req.user); // Log the authenticated user
    console.log("Session ID:", req.sessionID); // Log session ID
    console.log("Session data:", req.session); // Log session data

    if (!req.user) {
      console.log("User is not authenticated, redirecting to login");
      return res.redirect("http://localhost:3000/login");
    }

    const redirectUrl = req.user.isNew
      ? "http://localhost:3000/personalinfo"
      : "http://localhost:3000/dashboard";

    console.log("Redirecting to:", redirectUrl);
    res.redirect(redirectUrl);
  }
);

// failure
router.get("/auth/failure", AuthController.failureGoogleLogin);

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
