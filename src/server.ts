import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import swaggerFile from "../swagger.json";
import { router } from "./routes/routes";

dotenv.config();
const port = process.env.PORT || 3333;
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);
app.listen(port);
