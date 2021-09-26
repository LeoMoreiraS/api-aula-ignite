import { inject, injectable } from "tsyringe";

import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
export class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );
    if (categoryAlreadyExists) throw new Error("Category already exists");
    const category = await this.categoryRepository.create({
      name,
      description,
    });
    return category;
  }
}
