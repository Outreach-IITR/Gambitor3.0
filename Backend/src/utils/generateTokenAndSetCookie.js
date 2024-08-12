import jwt from "jsonwebtoken";
import { asyncHandler } from "./asyncHandler.js";

const generateTokenAndSetCookie = asyncHandler((payloadData, res) => {
  const token = jwt.sign({ payloadData }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });

  res.cookie("jwt", token, {
    httpOnly: true, // more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: "strict", // CSRF
  });

  return token;
});

export default generateTokenAndSetCookie;
