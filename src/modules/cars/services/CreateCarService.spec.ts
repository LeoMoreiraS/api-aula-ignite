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
      category: "123",
    };
    const car = createCarService.execute(carData);
    console.log(car);
  });
});
