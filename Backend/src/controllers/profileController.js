import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/index.js";
import crypto from 'crypto'

class ProfileController {
  static index = asyncHandler(async (req, res) => {
    try {
      const user = req.user;
      if (!user) {
        throw new ApiError(404, "User not found");
      }
      const response = new ApiResponse(200, { user }, "User profile fetched successfully");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Something went wrong with the server while fetching profile");
    }
  });

  static async store() {}

  static async show() {}

  static updateUser = asyncHandler(async (req, res) => {
    try {
      console.log('hi')
      const userId = parseInt(req.params.id);
      console.log(userId)
      const updateData = req.body.formData; // Get all fields to update from the request body
      //console.log(updateData)
      // Update the user profile in the database
      const user = await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });
      //console.log(user)
      const response = new ApiResponse(200, { ...user }, "User profile updated successfully");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Something went wrong with the server while updating profile");
    }
  });

  static schoolAmbassador = asyncHandler(async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
  
      // Retrieve the user to check if they already have a referral code
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (user.myReferral) {
        // User already has a referral code, just return user data
        const response = new ApiResponse(200, { ...user }, "SA profile obtained successfully");
        return res.status(200).json(response);
      }
  
      // Generate a new referral code if it does not exist
      // const userReferralCode = crypto.randomBytes(8).toString('hex');
      const lastUserWithReferral = await prisma.user.findFirst({
        where: {
          myReferral: {
            startsWith: "GMBT2",
          },
        },
        orderBy: {
          myReferral: 'desc',
        },
      });
  
      let nextReferralNumber = 1; // Default to 1 if no previous referral found
  
      if (lastUserWithReferral && lastUserWithReferral.myReferral) {
        // Extract the numeric part and increment it
        const lastReferralCode = lastUserWithReferral.myReferral;
        const lastReferralNumber = parseInt(lastReferralCode.slice(5)); // Extract the last 5 digits
        nextReferralNumber = lastReferralNumber + 1;
      }
  
      // Format the next referral number with leading zeros
      const nextReferralCode = `GMBT2${nextReferralNumber.toString().padStart(5, '0')}`;
      console.log(nextReferralCode);
      //console.log(userReferralCode);
  
      // Update the user with the new referral code
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { myReferral: nextReferralCode },
      });
      
      const response = new ApiResponse(200, {...updatedUser }, "SA profile obtained successfully");
      return res.status(200).json(response);
  
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "Something went wrong with the server while updating profile");
    }
  });

  static async destroy() {}
}

export default ProfileController;
