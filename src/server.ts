import dotenv from "dotenv";
import express from "express";

import { router } from "./routes/routes";

dotenv.config();
const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(router);
app.listen(port);
