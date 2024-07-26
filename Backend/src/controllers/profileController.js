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

  static async update(req, res) {}

  static async destroy() {}
}

export default ProfileController;
