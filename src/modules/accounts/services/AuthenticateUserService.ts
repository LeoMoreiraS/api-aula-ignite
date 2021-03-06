import { compare } from "bcryptjs";
import { validate } from "email-validator";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";

import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

interface IRequest {
  login: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
@injectable()
export class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ login, password }: IRequest): Promise<IResponse> {
    let user;
    if (validate(login)) user = await this.usersRepository.findByEmail(login);
    else user = await this.usersRepository.findByUsername(login);

    if (!user) {
      throw new AppError("Invalid credentials!", 401);
    }

    const passwordCorrect = await compare(password, user.password);
    if (!passwordCorrect) throw new AppError("Invalid credentials!", 401);
    const token = sign({}, process.env.SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });
    return { user: { name: user.name, email: user.email }, token };
  }
}
