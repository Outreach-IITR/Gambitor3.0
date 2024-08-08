import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/index.js";

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
      const userId = parseInt(req.params.id);
      const updateData = req.body; // Get all fields to update from the request body

      // Update the user profile in the database
      const user = await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });
      const response = new ApiResponse(200, { user }, "User profile updated successfully");
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
      const userReferralCode = crypto.randomBytes(8).toString('hex'); 
      console.log(userReferralCode)
      const user = await prisma.user.update({
        where: { id: userId },
        data: {myReferral:userReferralCode},
      });
      const response = new ApiResponse(200, { user }, "SA profile obtained successfully");
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
