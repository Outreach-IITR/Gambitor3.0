class ApiError extends Error{
  constructor(statusCode, message = "Something went wrong"){
      super(message);
      this.statusCode = statusCode;
      this.success = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };