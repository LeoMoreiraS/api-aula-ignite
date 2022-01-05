import { AppError } from "../../../errors/AppError";
import { CategoriesInMemoryRepository } from "../repositories/in-memory/CategoryInMemoryRepository";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesInMemoryRepository: ICategoriesRepository;
describe("Create Category", () => {
  beforeEach(() => {
    categoriesInMemoryRepository = new CategoriesInMemoryRepository();
    createCategoryService = new CreateCategoryService(
      categoriesInMemoryRepository
    );
  });
  it("should create a new category", async () => {
    const name = "Valid_name";
    const category = await createCategoryService.execute({
      name,
      description: "Valid_Description",
    });
    const foundCategory = await categoriesInMemoryRepository.findByName(name);
    expect(category).toBe(foundCategory);
  });
  it("should not create a duplicated category", () => {
    expect(async () => {
      const name = "Duplicated_name";
      await createCategoryService.execute({
        name,
        description: "Valid_Description",
      });
      await createCategoryService.execute({
        name,
        description: "Valid_Description",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
