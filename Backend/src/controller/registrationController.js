import { prisma } from "../db/client.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// Middleware to check if user is authenticated

const isAuthenticated = asyncHandler(async (req, res, next) => {
    // Getting the token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new ApiError(401, "You are not logged in. Please login to get access"));
    }

    // Verification of the token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!currentUser) {
        return next(new ApiError(401, "The user does not exist"));
    }

    // Optionally, you can add more checks here, such as password changes after token issuance

    // Grant access to the protected routes
    req.user = currentUser;
    next();
});



const getAllRegistrations = asyncHandler(async (req, res, next) => {
    try{
        const registrations = await prisma.user.findMany();
        console.log(registrations);
        res.status(200).json({
          status: "success",
          data: registrations,
        });
    }catch(error){
        next(new ApiError(500, "Failed to fetch registrations", [], error.stack));
    }
  });

export {getAllRegistrations,isAuthenticated}  