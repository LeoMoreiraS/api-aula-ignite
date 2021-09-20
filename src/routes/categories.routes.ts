import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/controllers/CreateCategoryController";
import { ListCategoryController } from "../modules/cars/controllers/ListCategoryController";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
categoriesRoutes.post("/", createCategoryController.execute);
categoriesRoutes.get("/", listCategoryController.execute);

export { categoriesRoutes };
