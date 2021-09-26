import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";
@injectable()
export class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async handle(data: ICreateUserDTO): Promise<User> {
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      data.username
    );
    if (usernameAlreadyExists) throw new Error("Username already exists!");
    const emailAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (emailAlreadyExists) throw new Error("Email already exists!");
    const user = await this.usersRepository.create(data);

    return user;
  }
}
