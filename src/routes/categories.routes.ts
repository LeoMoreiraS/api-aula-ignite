import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/controllers/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/controllers/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/controllers/ListCategoryController";

const upload = multer({ dest: "./tmp" });
const categoriesRoutes = Router();

const importCategoryController = new ImportCategoryController();

const createCategoryController = new CreateCategoryController();

const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoryController.handle);
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);
export { categoriesRoutes };
