import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./customErrorReporter.js";

// * Custom Error Reporter
vine.errorReporter = () => new CustomErrorReporter();

export const registerSchema = vine.object({
  name:vine.string(),
  class:vine.string().in(['METIOX', 'ATHENOX', 'APOLLOX']),
  schoolName:vine.string(),
  contactNumber:vine.string().minLength(10, 'Mobile number must be exactly 10 digits long').maxLength(10, 'Mobile number must be exactly 10 digits long').regex(/^\d+$/, 'Mobile number must contain only numbers'),
  email: vine.string().email(),  
});

