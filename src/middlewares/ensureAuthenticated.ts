import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@errors/AppError";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | NextFunction> {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError("Token missing");
  const [, token] = authHeader.split(" ");
  try {
    const { sub } = verify(token, process.env.SECRET) as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByID(sub);
    if (!user) throw new AppError("Users does not exists");
    request.user = {
      id: user.id,
    };
    return next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
