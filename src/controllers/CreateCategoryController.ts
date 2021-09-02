import { Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";

const categoriesRepository = CategoryRepository.singleton();
export class CreateCategoryController {
  execute(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      const category = categoriesRepository.create({ name, description });
      return response.json(category).status(201);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
