import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  private categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute({ name, description }: IRequest): Category {
    const category = this.categoryRepository.create({ name, description });
    return category;
  }
}
