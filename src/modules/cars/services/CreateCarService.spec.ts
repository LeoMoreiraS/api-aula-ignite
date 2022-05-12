import { AppError } from "@errors/AppError";

import "reflect-metadata";
import { CarsInMemoryRepository } from "../repositories/in-memory/CarsInMemoryRepository";
import { ICarsRepository } from "../repositories/interfaces/ICarsRepository";
import { CreateCarService } from "./CreateCarService";

let createCarService: CreateCarService;
let carsInMemoryRepository: ICarsRepository;
describe("Create Car", () => {
  beforeAll(() => {
    carsInMemoryRepository = new CarsInMemoryRepository();
    createCarService = new CreateCarService(carsInMemoryRepository);
  });
  it("should be able to create a new car", async () => {
    const carData = {
      name: "valid_name",
      description: "Desc",
      daily_rate: 100,
      license_plate: "AXD-0201",
      fine_amount: 60,
      brand: "Marca",
      category_id: "123",
    };
    const car = await createCarService.execute(carData);
    expect(car).toHaveProperty("id");
  });
  it("Should not be able to create a car with an existent license plate", () => {
    expect(async () => {
      const carData = {
        name: "valid_name",
        description: "Desc",
        daily_rate: 100,
        license_plate: "AXD-0201",
        fine_amount: 60,
        brand: "Marca",
        category_id: "123",
      };
      createCarService.execute(carData);
      createCarService.execute(carData);
    }).rejects.toBeInstanceOf(AppError);
  });
  it("Should be able to create a car with available true", async () => {
    const carData = {
      name: "car available",
      description: "Desc",
      daily_rate: 100,
      license_plate: "ASD-0201",
      fine_amount: 60,
      brand: "Marca",
      category_id: "123",
    };
    const car = await createCarService.execute(carData);
    expect(car.available).toBe(true);
  });
});
