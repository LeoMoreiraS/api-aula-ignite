import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: User): Promise<User>;
  list(): Promise<User[]>;
  findByUsername(username: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByID(id: string): Promise<User>;
}
