import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma";
import CustomError from "../../../middlewares/customError";
import wrapper from "../../../middlewares/asyncWrapper";

const getUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.user || req.headers.authorization?.split(" ")[1];

    if (!token) {
        throw new CustomError("Unauthorized: No token provided", 401);
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new CustomError("JWT_SECRET_KEY is not defined in the environment variables", 500);
    }

    try {
        const decodedToken: any = jwt.verify(token, secretKey);
        const userID = decodedToken.userID;
        const user = await prisma.user.findUnique({ where: { userID } });

        if (!user) {
            throw new CustomError("User not found", 404);
        }

        res.status(200).json(user);
    } catch (error) {
        next(new CustomError("Failed to verify token or retrieve user", 500));
    }
});


export default getUser;