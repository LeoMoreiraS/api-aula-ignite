import { AppError } from "@errors/AppError";

import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../repositories/UsersRepositoryInMemory";
import { AuthenticateUserService } from "./AuthenticateUserService";
import { CreateUserService } from "./CreateUserService";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;
describe("AuthenticateUserService", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserService = new AuthenticateUserService(
      usersRepositoryInMemory
    );
    createUserService = new CreateUserService(usersRepositoryInMemory);
  });
  it("Should be able to authenticate a user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "1",
      email: "user@email.com",
      password: "123",
      name: "user_test",
      username: "user_test",
    };
    await createUserService.execute(user);
    const result = await authenticateUserService.execute({
      login: user.username,
      password: "123",
    });
    expect(result).toHaveProperty("token");
  });
  it("should not be able to authenticate a non existent user", () => {
    expect(async () => {
      await authenticateUserService.execute({
        login: "invalid_email@gmail.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to authenticate if incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1",
        email: "valid_user@email.com",
        password: "123",
        name: "user_test",
        username: "user_test2",
      };
      await createUserService.execute(user);
      await authenticateUserService.execute({
        login: user.email,
        password: "invalid_password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
