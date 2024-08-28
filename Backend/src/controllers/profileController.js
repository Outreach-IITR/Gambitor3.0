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

  static deleteUser = asyncHandler(async (req, res) => {
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

  static getUserByEmail= asyncHandler(async (req, res) => {
    try {
      console.log('Handling getUserByEmail request');
      const { email } = req.query;

      if (!email) {
        throw new ApiError(400, "Email query parameter is required.");
      }

      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        throw new ApiError(404, "User not found.");
      }

      // Respond with user details
      const response = new ApiResponse(200, { ...user }, "User fetched successfully.");
      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
      }
      console.error("Error fetching user by email:", error);
      return res.status(500).json(new ApiResponse(500, null, "Something went wrong while fetching user."));
    }
  })

  static async destroy() {}
}

export default ProfileController;
