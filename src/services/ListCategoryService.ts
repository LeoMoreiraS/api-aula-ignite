import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoriesRepository";

export class ListCategoryService {
  private categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories;
  }
}
