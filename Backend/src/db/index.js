import { PrismaClient } from "@prisma/client";
import { DB_NAME } from "../constants.js";

const prisma = new PrismaClient({
  log: ["query", "error"],
});

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error", error);
  }
}

export { prisma, connectDB };
