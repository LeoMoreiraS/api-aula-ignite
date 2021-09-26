import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../interfaces/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private ormRepository: Repository<Specification>;
  constructor() {
    this.ormRepository = getRepository(Specification);
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.ormRepository.findOne({ name });
    return specification;
  }
  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.ormRepository.create({ name, description });

    await this.ormRepository.save(specification);
    return specification;
  }
}
