import express from 'express';
import ProfileController from "../controllers/profileController.js";
import protectRoute from "../middlewares/protectRoute.js"

const userRouter = express.Router();
// user routes to update profile
userRouter.put("/user/:id/update", protectRoute, ProfileController.updateUser);
userRouter.get("/school-ambassador/:id", ProfileController.schoolAmbassador);

export { userRouter };
