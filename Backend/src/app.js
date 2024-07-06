import express from "express";
import cors from "cors";
import { ApiError } from "./utils/ApiError.js";
import session from "express-session";
import './utils/passport.js';

//routes import
import ApiRoutes from "./routes/user.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.set('view engine', 'ejs');
app.set('views', './views'); 

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
