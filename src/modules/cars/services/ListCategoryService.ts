import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

export class ListCategoryService {
  private categoryRepository: ICategoriesRepository;
  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  async execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();
    return categories;
  }
}
