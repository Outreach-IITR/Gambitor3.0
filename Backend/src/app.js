import express from "express";
import cors from "cors";
import session from "express-session";
import "./utils/passportConfig.js";
import globalErrorHandler from "./controllers/errorController.js";
import cookieParser from "cookie-parser";

//routes import
import ApiRoutes from "./routes/user.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// use session for google login
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1", ApiRoutes);

// Error-handling middleware
app.use(globalErrorHandler);

export { app };
