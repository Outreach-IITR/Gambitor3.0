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

// Route to initiate Google OAuth2 login

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

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email", "openid"] }));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
  (req, res) => {
    const email = req.user.email;

    res.redirect(`http://localhost:3000/auth/google/callback?email=${encodeURIComponent(email)}`);
  }
);


// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
//   (req, res) => {
//     if (!req.user) {
//       console.log("User is not authenticated, returning error response");
//       return res.redirect("http://localhost:3000/auth/callback?error=AuthenticationFailed");
//     }

//     req.user.success = true;
//     req.user.statusCode = 200;
//     req.user.message = "Authenticated successfully";

//     // Determine the appropriate redirect URL for frontend use
//     const redirectUrl = req.user.isNew
//       ? "http://localhost:3000/personalinfo"
//       : "http://localhost:3000/dashboard";

//     console.log("Redirecting to callback with URL:", redirectUrl);
//     res.redirect(`http://localhost:3000/auth/google/callback?redirectUrl=${encodeURIComponent(redirectUrl)}`);
//   }
// );



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
