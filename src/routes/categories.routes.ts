import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
categoriesRoutes.post("/", createCategoryController.execute);
categoriesRoutes.get("/", listCategoryController.execute);

export { categoriesRoutes };
