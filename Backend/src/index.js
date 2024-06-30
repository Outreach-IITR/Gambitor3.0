import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApiError } from "./utils/ApiError.js";
const app = express();

dotenv.config();

// Log the CORS_ORIGIN environment variable to ensure it's set correctly
console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN || 'http://localhost:3000' );

// Define CORS options
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  
};

// Use CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api", ApiRoutes);




// Error-handling middleware
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
    });
  }

  // Handle other types of errors or fall back to a generic error
  return res.status(500).json({
    success: false,
    message: "Default Internal Server Error",
  });
});

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Yay It's working.." });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

//routes import
import ApiRoutes from "./routes/userRoutes.js";

export { app };
