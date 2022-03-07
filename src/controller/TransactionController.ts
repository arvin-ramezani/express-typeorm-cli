import { TransactionType } from "./../types/types";
import { Client } from "./../entity/Client.entity";
import { Transaction } from "./../entity/Transaction.entity";
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class TransactionController {
  private transactionRepository = getRepository(Transaction);
  private clienttionRepository = getRepository(Client);

  async createOne(req: Request, res: Response, next: NextFunction) {
    const { clientId } = req.params;
    const { amount, type } = req.body;

    const client = await this.clienttionRepository.findOne(parseInt(clientId));

    if (!client) throw new Error("Client not found !");

    const newTransaction = this.transactionRepository.create({
      amount,
      type,
      client,
    });

    const savedTransaction = await this.transactionRepository.save(
      newTransaction
    );

    if (savedTransaction.type === TransactionType.DEPOSITT) {
      client.balance += Number(amount);
    } else if (savedTransaction.type === TransactionType.WITHDRAW) {
      client.balance -= Number(amount);
    }

    const editedClientBalance = await client.save();

    res.json({ editedClientBalance, savedTransaction });

    // return;
  }
}
