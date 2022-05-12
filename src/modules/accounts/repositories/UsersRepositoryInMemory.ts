import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";
import { IUsersRepository } from "./interfaces/IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    this.users.push(user);
    return user;
  }
  update(data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<User[]> {
    return this.users;
  }
  async findByUsername(username: string): Promise<User> {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findByID(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
