import jwt, { JwtPayload } from "jsonwebtoken";
import CustomError from "../middlewares/customError";

interface CustomPayload extends JwtPayload {
  userID: number;
}

const generateJWT = async (payload: CustomPayload): Promise<string> => {
  const secretKey = process.env.JWT_SECRET_KEY;
  
  if (!secretKey) {
    throw new CustomError("JWT_SECRET_KEY is not defined in environment variables.", 400);
  }

  try {
    const token = jwt.sign(payload, secretKey, { expiresIn: '90d' });
    return token;
  } catch (error) {
    throw new CustomError(`Error generating JWT: ${(error as Error).message}`, 500);
  }
};


export default generateJWT;