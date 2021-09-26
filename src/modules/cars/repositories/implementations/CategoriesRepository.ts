import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
  private static instance: CategoryRepository;
  private categories: Category[];
  private ormRepository: Repository<Category>;
  private constructor() {
    this.ormRepository = getRepository(Category);
  }

  static singleton(): CategoryRepository {
    if (this.instance == null) {
      this.instance = new CategoryRepository();
      return this.instance;
    }
    return this.instance;
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
    const categories = this.ormRepository.find();
    return categories;
  }
}
