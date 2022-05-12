import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarService } from "../services/CreateCarService";

export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCarService = container.resolve(CreateCarService);
    const {
      name,
      description,
      daily_rate,
      category_id,
      license_plate,
      fine_amount,
      brand,
    } = request.body;

    const car = await createCarService.execute({
      name,
      description,
      daily_rate,
      category_id,
      license_plate,
      fine_amount,
      brand,
    });
    return response.status(201).json(car);
  }
}
