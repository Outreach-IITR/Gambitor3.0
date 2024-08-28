import { Router } from "express";
const router = Router();
import authorizeAdmin from "../middleware/authorizeRole.js";
//import isAuthenticated from "../controllers/registrationController.js";
import { getAllRegistrations , getAmbassadors, isAuthenticated,deleteUser} from "../controller/registrationController.js";
import {login} from "../controller/authController.js"


// Route to get all registrations
router.get('/registration',isAuthenticated,getAllRegistrations);
router.get('/ambassadors',isAuthenticated,getAmbassadors)
router.post('/user/login',authorizeAdmin,login)
router.delete('/:id/delete',isAuthenticated,deleteUser)
router.get('/verify-token', isAuthenticated, (req, res) => {
    res.status(200).json({
        status: "success",
        message: "You have user logged in",
        user: req.user, // This is the authenticated user
    });
});

export default router;

