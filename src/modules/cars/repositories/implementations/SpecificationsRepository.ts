import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../interfaces/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static instance: SpecificationsRepository;
  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification: Specification) => specification.name === name
    );
    return specification;
  }
  static singleton(): SpecificationsRepository {
    if (this.instance == null) {
      this.instance = new SpecificationsRepository();
      return this.instance;
    }
    return this.instance;
  }
  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
    return specification;
  }
}
