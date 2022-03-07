import { Response } from "express";
import { Request } from "express";
import { Banker } from "./../entity/Banker.entity";
import { Client } from "./../entity/Client.entity";
import { getRepository } from "typeorm";

export class ConnectBankerToClientController {
  private clientRepository = getRepository(Client);
  private bankerRepository = getRepository(Banker);

  async connectBankerToClient(req: Request, res: Response) {
    const { BankerId, ClientId } = req.params;

    const banker = await this.bankerRepository.findOne(parseInt(BankerId));

    const client = await this.clientRepository.findOne(parseInt(ClientId));

    if (!banker || !client) {
      throw new Error("Not Found");
    }

    banker.clients = [...banker.clients, client];

    res.json({ banker, client });
  }
}
