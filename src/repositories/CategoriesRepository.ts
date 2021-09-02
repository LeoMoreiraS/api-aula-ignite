import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoryRepository {
  private static instance: CategoryRepository;
  private categories: Category[];
  private constructor() {
    this.categories = [];
  }
  static singleton(): CategoryRepository {
    if (this.instance == null) {
      this.instance = new CategoryRepository();
      return this.instance;
    }
    return this.instance;
  }
  create({ name, description }: ICreateCategoryDTO): Category {
    const category: Category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });
    const categoryExists = this.categories.find(
      (category) => category.name === name
    );
    if (categoryExists) {
      throw new Error("category Already Exists");
    }
    this.categories.push(category);
    return category;
  }
  list(): Category[] {
    if (this.categories.length === 0) throw new Error("No categories found");
    return this.categories;
  }
}
