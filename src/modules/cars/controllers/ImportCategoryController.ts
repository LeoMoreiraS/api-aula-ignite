import { Request, Response } from "express";

import { CategoryRepository } from "../repositories/implementations/CategoriesRepository";
import { ImportCategoryService } from "../services/ImportCategoryService";

const importCategoryService = new ImportCategoryService(
  CategoryRepository.singleton()
);
export class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    importCategoryService.execute(file);
    return response.send();
  }
}
