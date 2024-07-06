import { Router } from "express";
import AuthController from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authenticate.js";
// import ProfileController from "../controllers/profileController.js";
import passport from "passport";
import "../utils/passport.js";

const router = Router();

router.use(passport.initialize());
router.use(passport.session());

router.get("/", AuthController.loadAuth);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
// * Profile routes
//router.get("/profile", authMiddleware, ProfileController.index); //Private route

// Auth
router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));

// Auth Callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/failure",
  })
);

// Success
router.get("/success", AuthController.successGoogleLogin);

// failure
router.get("/failure", AuthController.failureGoogleLogin);

export default router;
