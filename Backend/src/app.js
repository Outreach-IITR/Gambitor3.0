import express from "express";
import cors from "cors";
import session from "express-session";
import "./utils/passportConfig.js";
import globalErrorHandler from "./controllers/errorController.js";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError.js";
import  passport  from "passport";

//routes import
import {router} from "./routes/authRoutes.js";
import { userRouter } from "./routes/userRoutes.js";

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
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  })
);



app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1", router);
app.use('/api/v1/user', userRouter);

app.use(globalErrorHandler);


export { app };
