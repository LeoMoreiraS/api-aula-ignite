import { inject, injectable } from "tsyringe";

import { Category } from "../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

@injectable()
export class ListCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}
