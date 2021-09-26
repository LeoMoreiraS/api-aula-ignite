import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;
  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.ormRepository.findOne({ name });
    return category;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ name, description });
    await this.ormRepository.save(category);
    return category;
  }
  async list(): Promise<Category[]> {
    const categories = await this.ormRepository.find();
    return categories;
  }
}
