import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationService } from "../services/CreateSpecificationService";

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createSpecificationService = container.resolve(
      CreateSpecificationService
    );
    const { name, description } = request.body;

    const specification = await createSpecificationService.execute({
      name,
      description,
    });
    return response.status(201).json(specification);
  }
}
