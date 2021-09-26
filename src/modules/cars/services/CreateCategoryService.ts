import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  private categoryRepository: ICategoriesRepository;
  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  async execute({ name, description }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.create({
      name,
      description,
    });
    return category;
  }
}
