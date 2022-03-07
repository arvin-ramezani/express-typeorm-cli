import { Client } from "./../entity/Client";
import { createQueryBuilder, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class ClientController {
  private clientRepository = getRepository(Client);

  //   async all(request: Request, response: Response, next: NextFunction) {
  //     return this.clientRepository.find();
  //   }

  //   async one(request: Request, response: Response, next: NextFunction) {
  //     return this.clientRepository.findOne(request.params.id);
  //   }

  //   async save(request: Request, response: Response, next: NextFunction) {
  //     return this.clientRepository.save(request.body);
  //   }

  //   async remove(request: Request, response: Response, next: NextFunction) {
  //     let userToRemove = await this.clientRepository.findOne(request.params.id);
  //     await this.clientRepository.remove(userToRemove);
  //   }

  // //////////////////     Don't forget QueryBuilder
  async getAll(request: Request, response: Response, next: NextFunction) {
    // const clients = createQueryBuilder("client")
    //   .select("client.first_name")
    //   .addSelect("client.balance")
    //   .from(Client, "client");
    return this.clientRepository.find();
  }

  async createOne(req: Request, res: Response, next: NextFunction) {
    let newClient = this.clientRepository.create(req.body);
  }

  async deletOne(req: Request, res: Response, next: NextFunction) {
    const { clientId } = req.params;

    const deletedClient = await this.clientRepository.delete(
      parseInt(clientId)
    );
    res.json(deletedClient);
  }
}
