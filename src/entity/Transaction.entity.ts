import { Client } from "./Client.entity";
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TransactionType } from "../types/types";

export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  type: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  @ManyToMany(() => Client, (client) => client.transactions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "client_id" })
  client: Client;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
