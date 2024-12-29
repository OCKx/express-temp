import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger-output.json';
import apiRouter from "./features/welcome/api";
import userRouter from "./features/users/routes/user.route";

const router = Router();

router.use('/', apiRouter);
router.use('/api/v1/user', userRouter);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


export default router;