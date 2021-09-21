import { Category } from "../models/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

export class ListCategoryService {
  private categoryRepository: ICategoriesRepository;
  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories;
  }
}
