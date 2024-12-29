import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma";
import wrapper from "../../../middlewares/asyncWrapper";
import CustomError from "../../../middlewares/customError";
import generateJWT from "../../../utilss/generateJWT";

const registerUser = wrapper(async (req:Request, res:Response, next: NextFunction) => {
    const { name, email } = req.body;

    const emailFound = await prisma.user.findUnique({ where: { email }});
    if (emailFound) {
        throw new CustomError("Email is already registered", 400);
    }

    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    });

    const token = await generateJWT({ userID: newUser.userID });
    res.cookie("user", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    });

    return res.status(200).json({
        message: "User successfully registered",
        token
    });
});


export default registerUser;