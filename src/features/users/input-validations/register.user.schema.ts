import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import CustomError from '../../../middlewares/customError';

const registerSchema = joi.object({
    name: joi.string().min(3).max(100).optional().messages({
        "string.min": "Name must have at least 3 characters",
        "string.max": "Name cannot be more than 100 characters",
    }),
    email: joi.string().email().required().messages({
        "string.empty": "A valid email is required",
        "string.email": "A valid email is required",
    })
});

const validateRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await registerSchema.validateAsync(req.body);
        next();
    } catch (error) {
        if (error instanceof joi.ValidationError) {
            res.status(400).send({ status: 'FAIL', message: error.details[0].message });
        } else {
            res.status(500).send({ status: 'ERROR', message: 'An unexpected error occurred' });
        }
    }
};


export default validateRegister;