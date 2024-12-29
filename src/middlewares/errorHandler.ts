import { Request, Response, NextFunction } from "express";
import CustomError from "./customError";

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error("Error Caught:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
  });
};


export default errorHandler;