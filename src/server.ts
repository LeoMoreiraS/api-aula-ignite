import dotenv from "dotenv";
import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

dotenv.config();
const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use("/categories", categoriesRoutes);
app.listen(port);
