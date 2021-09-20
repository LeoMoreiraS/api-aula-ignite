import csvParser from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
export class ImportCategoryService {
  private categoryRepository: ICategoriesRepository;
  constructor(categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise<IImportCategory[]>((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = csvParser();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", () => reject(new Error("Erro na leitura do arquivo")));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepository.findByName(name);
      if (!categoryAlreadyExists) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}
