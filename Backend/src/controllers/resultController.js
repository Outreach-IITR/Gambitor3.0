import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../db/index.js";
import xlsx from "xlsx";

class ResultController {
  // Function to handle file upload
  static upload = asyncHandler(async (req, res) => {
    if (!req.file) {
      throw new ApiError(400, 'No file provided');
    }

    const fileData = req.file.buffer; // Get file data from the request
    const workbook = xlsx.read(fileData, { type: 'buffer' }); // Read the workbook
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name
    const worksheet = workbook.Sheets[sheetName]; // Get the worksheet
    const data = xlsx.utils.sheet_to_json(worksheet); // Convert sheet data to JSON

    const mappedData = data.map((row) => ({
      rank: row.RANK,
      email: row.EMAIL,
      name: row.NAME,
      category: row.CATEGORY,
      totalMarks: row['TOTAL MARKS'],
      totalPositiveMarks: row['TOTAL POSITIVE MARKS'],
      totalNegativeMarks: row['TOTAL NEGATIVE MARKS'],
    }));

    try {
      await prisma.result.createMany({
        data: mappedData,
        skipDuplicates: true, // Optional: skip duplicates if needed
      });
      return ApiResponse.success(res, 'Data from XLSX file uploaded and processed successfully');
    } catch (error) {
      console.error('Error saving data to the database:', error);
      throw new ApiError(500, 'An error occurred while saving the data to the database');
    }
  });

  // Function to create a new result
  static createResult = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const existingResult = await prisma.result.findUnique({
      where: { email },
    });

    if (existingResult) {
      throw new ApiError(400, 'Result already exists with the same email');
    }

    const newResult = await prisma.result.create({
      data: req.body,
    });
    return ApiResponse.success(res, 'Result Added Successfully', newResult);
  });

  // Function to retrieve results by email
  static getResults = asyncHandler(async (req, res) => {
    const { email } = req.query;

    if (!email) {
      throw new ApiError(400, 'Email parameter is missing in the request');
    }

    const results = await prisma.result.findMany({
      where: { email },
    });

    if (results.length === 0) {
      throw new ApiError(404, 'No results found for the specified email');
    }

    return ApiResponse.success(res, 'Results retrieved successfully', results);
  });
}

export default ResultController;
