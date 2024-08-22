import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./customErrorReporter.js";

// * Custom Error Reporter
vine.errorReporter = () => new CustomErrorReporter();

export const registerSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(100),
});

export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string(),
});

export const infoSchema = vine.object({
  name:vine.string(),
  category:vine.string().in(['ARETEOX','METIOX', 'ATHENOX', 'APOLLOX']),
  schoolName:vine.string(),
  contactNumber:vine.string().minLength(10, 'Mobile number must be exactly 10 digits long').maxLength(10, 'Mobile number must be exactly 10 digits long').regex(/^\d+$/, 'Mobile number must contain only numbers'),
  state:vine.string(),
});
