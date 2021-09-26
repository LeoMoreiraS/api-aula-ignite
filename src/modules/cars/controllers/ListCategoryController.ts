import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryService } from "../services/ListCategoryService";

export class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCategoryService = container.resolve(ListCategoryService);

      const categories = await listCategoryService.execute();
      return response.json(categories).status(201);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
