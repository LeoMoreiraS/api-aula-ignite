import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";

import { Specification } from "../infra/typeorm/entities/Specification";
import { ISpecificationsRepository } from "../repositories/interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationService {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists)
      throw new AppError("Specification already exists!");

    const specification = await this.specificationsRepository.create({
      name,
      description,
    });
    return specification;
  }
}

export { CreateSpecificationService };
