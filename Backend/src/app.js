import express from "express";
import cors from "cors";
import { ApiError } from "./utils/ApiError.js";
import session from "express-session";
import "./utils/passportConfig.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

//routes import
import ApiRoutes from "./routes/user.route.js";

const app = express();

console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN );

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
};

// Use CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// use session for google login
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1", ApiRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

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

export { app };
