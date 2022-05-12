import { ICreateCarDTO } from "@modules/cars/DTOs/CreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../interfaces/ICarsRepository";

export class CarsInMemoryRepository implements ICarsRepository {
  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }
  cars: Car[] = [];
  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    Object.assign(car, { ...data });
    this.cars.push(car);
    return car;
  }
}
