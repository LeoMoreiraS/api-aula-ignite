import { Request, Response } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const createCategoryService = new CreateCategoryService(
  CategoryRepository.singleton()
);
export class CreateCategoryController {
  execute(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      const category = createCategoryService.execute({ name, description });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
