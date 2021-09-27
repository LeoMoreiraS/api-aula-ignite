import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarService } from "../services/UpdateUserAvatarService";

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
    const avatar = request.file.filename;

    const { id } = request.user;
    const user = await updateUserAvatarService.execute({ id, avatar });
    return response.status(200).json(user);
  }
}
