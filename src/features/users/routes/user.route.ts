import { Router } from "express";
import getUser from "../controllers/get.user";
import registerUser from "../controllers/register.user";
import validateRegister from "../input-validations/register.user.schema";

const userRouter = Router();

userRouter.get('/', getUser);
userRouter.post('/signup', validateRegister, registerUser);


export default userRouter;