import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryService = container.resolve(CreateCategoryService);
    const { name, description } = request.body;
    try {
      const category = await createCategoryService.execute({
        name,
        description,
      });
      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
