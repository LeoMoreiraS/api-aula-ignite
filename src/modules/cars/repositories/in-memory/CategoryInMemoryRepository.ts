import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";

export class CategoriesInMemoryRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find((c) => c.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    return this.categories;
  }
  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();
    Object.assign(category, { ...data });
    this.categories.push(category);
    return category;
  }
}
