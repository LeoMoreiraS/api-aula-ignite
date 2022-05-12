import { ICreateCarDTO } from "@modules/cars/DTOs/CreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
}
