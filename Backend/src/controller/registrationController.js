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
        const registrations = await prisma.user.findMany({
          where: {
            role: "PARTICIPANT", // Filter by role "participant"
          },
        });
        console.log(registrations);
        res.status(200).json({
          status: "success",
          data: registrations,
        });
    }catch(error){
        next(new ApiError(500, "Failed to fetch registrations", [], error.stack));
    }
  });

  const getAmbassadors = asyncHandler(async (req, res, next) => {
    try {
      const ambassadors = await prisma.user.findMany({
        where: {
          referralCount: {
            gt: 0, // This will filter users with referralCount greater than 0
          },
        },
      });
      console.log(ambassadors);
      res.status(200).json({
        status: "success",
        data: ambassadors,
      });
    } catch (error) {
      next(new ApiError(500, "Failed to fetch ambassadors", [], error.stack));
    }
  }); 

  const deleteUser = asyncHandler(async (req, res) => {
    try {
      console.log('hi')
      const userId = parseInt(req.params.id);
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      console.log(user)
      if (!user) {
        throw new ApiError(404, "User not found");
      }
  
      // Decrement referralCount for the user whose referralCode was used
      if (user.referralCode) {
        await prisma.user.updateMany({
          where: { myReferral: user.referralCode },
          data: { referralCount: { decrement: 1 } },
        });
      }
  
      // Delete the user
      await prisma.user.delete({
        where: { id: userId },
      });

      const response = new ApiResponse(200, { ...user }, "User profile deleted successfully");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Something went wrong with the server while deleting profile");
    }
  });

export {getAllRegistrations,isAuthenticated,getAmbassadors,deleteUser}  