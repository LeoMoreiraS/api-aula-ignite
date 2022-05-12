import { ICreateCarDTO } from "@modules/cars/DTOs/CreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../interfaces/ICarsRepository";

export class CarsInMemoryRepository implements ICarsRepository {
  cars: Car[] = [];
  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    Object.assign(car, { ...data });
    this.cars.push(car);
    return car;
  }
}
