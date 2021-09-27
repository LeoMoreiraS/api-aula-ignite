import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const authenticateUserService = container.resolve(
        AuthenticateUserService
      );
      const { login, password } = request.body;
      const user = await authenticateUserService.execute({ login, password });
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
