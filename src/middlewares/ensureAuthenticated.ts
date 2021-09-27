import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

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
  if (!authHeader) throw new Error("Token missing");
  const [, token] = authHeader.split(" ");
  try {
    const { sub } = verify(token, process.env.SECRET) as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByID(sub);
    if (!user) throw new Error("Users does not exists");
    // request.user = user;
    return next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}
