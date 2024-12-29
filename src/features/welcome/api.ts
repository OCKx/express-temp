import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.status(200).json({
        name: "OCKX Express Temp",
        api_docs: `${process.env.HOST}:${process.env.PORT}/api-docs`,
        status: 200
    })
});


export default apiRouter;