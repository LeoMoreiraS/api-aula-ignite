import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/DTOs/CreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/interfaces/ICarsRepository";

import { Car } from "../../entities/Car";

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      ...data,
    });
    await this.repository.save(car);
    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
}
