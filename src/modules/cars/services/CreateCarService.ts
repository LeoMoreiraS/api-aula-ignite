import { injectable } from "tsyringe";

@injectable()
export class CreateCarService {
  async execute(): Promise<void> {
    console.log("oi");
  }
}
