import { Category } from "../../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
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

  findByName(name: string): Category {
    const category = this.categories.find(
      (category: Category) => category.name === name
    );
    return category;
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
