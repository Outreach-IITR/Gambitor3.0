import { Router } from "express";
const router = Router();
//import isAuthenticated from "../controllers/registrationController.js";
import { getAllRegistrations , isAuthenticated} from "../controller/registrationController.js";
import {login} from "../controller/authController.js"


// Route to get all registrations
router.get('/registration',isAuthenticated,getAllRegistrations);
router.post('/user/login',login)

export default router;