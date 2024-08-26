import { ApiError } from "../utils/ApiError.js";

const devErrors = (res, error) => {
    console.log(error)
    res.status(error.statusCode).json({
        statusCode: error.statusCode,
        message: error.message,
        stackTrace: error.stack,
        errors:error.errors,
        error: error
    });
}

const castErrorHandler = (err) => {
    const msg = `Invalid value for ${err.path}: ${err.value}!`
    return new ApiError(400,msg);
}

const duplicateKeyErrorHandler = (err) => {
 const name = err.keyValue.name;
 const msg = `There is already a movie with name ${name}. Please use another name!`;
 
 return new ApiError(400,msg);
}

const validationErrorHandler = (err) => {
    const errors = Object.values(err.errors).map(val => val.message);
    const errorMessages = errors.join('. ');
    const msg = `Invalid input data: ${errorMessages}`;
    console.log(msg)
    return new ApiError(400,msg);
}

const prodErrors = (res, error) => {
    if(error.isOperational){
        res.status(error.statusCode).json({
            statusCode: error.statusCode,
            message: error.message
        });
    }else {
        res.status(500).json({
            statusCode: '500',
            message: 'Something went wrong from our side! Please try again later.'
        })
    }
}

const errorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development'){
        devErrors(res, error);
    }else if(process.env.NODE_ENV === 'production'){
        if(error.name === 'CastError') error = castErrorHandler(error);
        if(error.code === 11000) error = duplicateKeyErrorHandler(error);
        if(error.name === 'Validation Error') error = validationErrorHandler(error);
        prodErrors(res, error);
    }
}

export default errorHandler