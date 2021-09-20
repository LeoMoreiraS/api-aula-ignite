import { Request, Response } from "express";

import { SpecificationsRepository } from "../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const createSpecificationService = new CreateSpecificationService(
  SpecificationsRepository.singleton()
);
export class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      const specification = createSpecificationService.execute({
        name,
        description,
      });
      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
