import { Router } from "express";
import AuthController from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authenticate.js";
// import ProfileController from "../controllers/profileController.js";
import passport from "passport";
import "../utils/passportConfig.js";

const router = Router();

router.use(passport.initialize());
router.use(passport.session());

router.get("/", AuthController.loadAuth);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
// * Profile routes
//router.get("/profile", authMiddleware, ProfileController.index); //Private route

// Route to initiate Google OAuth2 login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth2 callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/api/v1/auth/failure" }),
  (req, res) => {
    // Successful authentication, redirect to success page
    res.redirect("/api/v1/auth/success");
  }
);

// Success
router.get("/auth/success", AuthController.successGoogleLogin);

// failure
router.get("/auth/failure", AuthController.failureGoogleLogin);

export default router;
