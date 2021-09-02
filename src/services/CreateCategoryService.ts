import { Category } from "../models/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  private categoryRepository: ICategoriesRepository;
  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute({ name, description }: IRequest): Category {
    const category = this.categoryRepository.create({ name, description });
    return category;
  }
}
