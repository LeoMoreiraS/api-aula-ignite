import { Category } from "../entities/Category";

describe("Create Category", () => {
  it("should create a new category", () => {
    const category = new Category();
    expect(category).toBe(category);
  });
});
