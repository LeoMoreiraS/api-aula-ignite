import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../../DTOs/ICreateUserDTO";
import { IUsersRepository } from "../../../../repositories/interfaces/IUsersRepository";
import { User } from "../../entities/User";

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }
  async update(data: User): Promise<User> {
    await this.ormRepository.save(data);
    const user = await this.ormRepository.findOne({ id: data.id });
    return user;
  }
  async findByID(id: string): Promise<User> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }
  async findByUsername(username: string): Promise<User> {
    const user = await this.ormRepository.findOne({ username });
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.ormRepository.findOne({ email });
    return user;
  }
  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }
}
