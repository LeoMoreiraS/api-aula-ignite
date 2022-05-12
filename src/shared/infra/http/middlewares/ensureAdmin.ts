import { Request, Response, NextFunction } from "express";

import { AppError } from "@errors/AppError";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/implementations/UsersRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | NextFunction> {
  const { id } = request.user;
  const usersRepository = new UsersRepository();
  const user = await usersRepository.findByID(id);
  if (!user.isAdmin) {
    throw new AppError("Users is not admin", 401);
  }
  return next();
}
