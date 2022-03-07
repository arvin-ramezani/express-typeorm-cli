import { Response } from "express";
import { Request } from "express";
import { Banker } from "./../entity/Banker.entity";
import { getRepository } from "typeorm";

export class BankerController {
  private bankerRepository = getRepository(Banker);

  async findOne(req: Request, res: Response) {
    const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
    const newBanker = this.bankerRepository.create({
      firs_name: firstName,
      last_name: lastName,
      email,
      card_number: cardNumber,
      employee_number: employeeNumber,
    });

    const savedBanker = await this.bankerRepository.save(newBanker);

    res.json(savedBanker);
  }
}
