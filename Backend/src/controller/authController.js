import jwt from 'jsonwebtoken';
import { prisma } from "../db/client.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from 'bcrypt';

const signToken = (id) => {
  console.log( process.env.JWT_EXPIRES_IN)
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

//* Token function

const createAndSendToken = asyncHandler(async (user, statusCode, res) => {
  try {
    const token = signToken(user.id);
    //console.log(token)
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('jwt', token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (error) {
    console.error('Error creating and sending token:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});


//This is the login function to login the user
const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        // Checking if email and password are provided
        if (!email || !password) {
            throw new ApiError(400,'Please provide email and password');
        }
        // Finding the user with the provided email
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
            throw new ApiError(401,'Incorrect email or password');
        }

        // Comparing passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch)

        if (!passwordMatch) {
            throw new ApiError(401,'Incorrect email or password');
        }

        // If authentication is successful, create and send token
        console.log(user.id)
        createAndSendToken(user, 200, res);

    } catch (error) {
        next(error); // Pass the error to the next error-handling middleware
    }
});

export { login };


// exports.restrictTo = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new AppError("You do not have permission to perform this action", 403)
//       );
//     }

//     next();
//   };
// };
