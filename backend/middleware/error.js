const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Handling Cast Error
  if (err.name == "CastError") {
    const message = `Resource not found got castError. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    // this code we got from running register user api with duplicate email name and password combination.
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`; // ${Object.keys(err.keyValues)} automatically tells which thing is duplicate it can be email alone or email and password combination.
    err = new ErrorHandler(message, 400);
  }

  //Wrong JWt Token Error
  if ((err.name = "JsonWebTokenError")) {
    const message = `Json Web Token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  //JWt Token Expired Error
  if ((err.name = "TokenExpiredError")) {
    const message = `Json Web Token is Expired, try again`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message, // can write error: err, or error:err.stack
  });
};
