import { Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";

const categoriesRepository = CategoryRepository.singleton();
export class ListCategoryController {
  execute(request: Request, response: Response): Response {
    try {
      const categories = categoriesRepository.list();
      return response.json(categories).status(201);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
