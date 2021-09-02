import { Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";
import { ListCategoryService } from "../services/ListCategoryService";

const listCategoryService = new ListCategoryService(
  CategoryRepository.singleton()
);
export class ListCategoryController {
  execute(request: Request, response: Response): Response {
    try {
      const categories = listCategoryService.execute();
      return response.json(categories).status(201);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
