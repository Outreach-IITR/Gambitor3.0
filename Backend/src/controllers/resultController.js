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
    const category = req.body.category;
    console.log(category);
    const fileData = req.file.buffer; // Get file data from the request
    const workbook = xlsx.read(fileData, { type: 'buffer' }); // Read the workbook
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name
    const worksheet = workbook.Sheets[sheetName]; // Get the worksheet
    const data = xlsx.utils.sheet_to_json(worksheet); // Convert sheet data to JSON
    console.log(data);
    const mappedData = data.map((row) => ({
      rank: row.Rank,
      contactNumber: row.Mobile,
      name: row.Name,
      category,
      totalMarks: row['TOTAL MARKS'],
    }));
    console.log(mappedData)
    try {
      await prisma.result.createMany({
        data: mappedData,
        skipDuplicates: true, // Optional: skip duplicates if needed
      });
    const response = new ApiResponse(200, "Data from XLSX file uploaded and processed successfully");
    return res.status(200).json(response);
    } catch (error) {
      console.error('Error saving data to the database:', error);
      throw new ApiError(500, 'An error occurred while saving the data to the database');
    }
  });

  // Function to create a new result
  static createResult = asyncHandler(async (req, res) => {
    const { contactNumber,name } = req.body;

    const existingResult = await prisma.result.findFirst({
      where: {
        contactNumber,
        name,
      },
    })

    if (existingResult) {
      throw new ApiError(400, 'Result already exists with the same name and contact number');
    }
    const totalMarks = Number(req.body.totalMarks);
    const rank = Number(req.body.rank); // This will convert it to a number
    const newResult = await prisma.result.create({
      data:{
        contactNumber,
        name,
        totalMarks,
        rank
      }
    });
    const response = new ApiResponse(200, newResult, "Result added successfully");
        
    return res.status(200).json(response);
  });

  // Function to retrieve results by email
  static getResults = asyncHandler(async (req, res) => {
    const { contactNumber, name } = req.query;

    if (!contactNumber && !name) {
      throw new ApiError(400, 'Credentials missing');
    }

    const results = await prisma.result.findMany({
      where: {
        contactNumber: contactNumber ? String(contactNumber) : undefined,
        name: name ? {
          equals: String(name).toLowerCase(), // Convert name to lowercase
          mode: 'insensitive' // Make the comparison case-insensitive
        } : undefined,
      },
    });

    if (results.length === 0) {
      throw new ApiError(404, 'No results found for the specified credentials');
    }

    const response = new ApiResponse(200, results, "Result fetched successfully");
    return res.status(200).json(response);
});
}

export default ResultController;
