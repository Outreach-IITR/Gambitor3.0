class ApiError extends Error{
  constructor(statusCode, message = "Something went wrong"){
      super(message);
      this.statusCode = statusCode;
      this.success = false;
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };