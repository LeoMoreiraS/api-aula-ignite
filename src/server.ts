import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { createCourse } from "./routes";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.get("/", createCourse, (request: Request, response: Response) => {
  return response.json({ message: "hello" });
});
app.listen(port);
