import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../shared/utils/file";
import { User } from "../infra/typeorm/entities/User";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

interface IRequest {
  id: string;
  avatar: string;
}

@injectable()
export class UpdateUserAvatarService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ id, avatar }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByID(id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar;
    const updatedUser = await this.usersRepository.update(user);

    return updatedUser;
  }
}
