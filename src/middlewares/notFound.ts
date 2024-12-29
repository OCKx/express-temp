import { NextFunction, Request, Response } from 'express';
import CustomError from './customError';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const errorMessage = `🔍 - '${req.originalUrl}' - Not Found`;
  const error = new CustomError(errorMessage, 404);
  next(error);
};


export default notFound;