import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createUserService = container.resolve(CreateUserService);
      const { name, email, username, password, driver_license } = request.body;
      const user = await createUserService.handle({
        name,
        email,
        username,
        password,
        driver_license,
      });
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
