import express from "express";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(router);
app.use(notFound);
app.use(errorHandler);


export default app;