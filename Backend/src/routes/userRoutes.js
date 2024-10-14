import express from 'express';
import ProfileController from "../controllers/profileController.js";
import protectRoute from "../middlewares/protectRoute.js";
import ResultController from '../controllers/resultController.js';
import multer from 'multer';
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage }); // Create multer instance
const userRouter = express.Router();

// Define routes
userRouter.put("/:id/update", protectRoute, ProfileController.updateUser);
userRouter.get("/school-ambassador/:id", protectRoute, ProfileController.schoolAmbassador);
userRouter.get("/getUser", protectRoute, ProfileController.getUserByEmail);
userRouter.post('/upload', upload.single('file'), ResultController.upload);
userRouter.post('/result', ResultController.createResult);
userRouter.get('/myresult', ResultController.getResults);

export { userRouter };
