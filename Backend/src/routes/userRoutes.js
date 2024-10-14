import express from 'express';
import ProfileController from "../controllers/profileController.js";
import protectRoute from "../middlewares/protectRoute.js";

const userRouter = express.Router();

// Define routes
userRouter.put("/:id/update", protectRoute, ProfileController.updateUser);
userRouter.get("/school-ambassador/:id", protectRoute, ProfileController.schoolAmbassador);
userRouter.get("/getUser", protectRoute, ProfileController.getUserByEmail);


export { userRouter };
