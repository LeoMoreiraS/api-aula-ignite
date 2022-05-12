import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";
import "express-async-errors";
import "./shared/container";

import { AppError } from "@errors/AppError";

import swaggerFile from "../swagger.json";
import { router } from "./shared/infra/http/routes/routes";
import createConnection from "./shared/infra/typeorm/database";

createConnection();
dotenv.config();
const port = process.env.PORT || 3333;
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ error: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
    next();
  }
);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
