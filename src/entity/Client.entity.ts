import { Transaction } from "./Transaction.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Person } from "./utils/Person.entity";
import { Banker } from "./Banker.entity";

@Entity("clients")
export class Client extends Person {
  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
  })
  family_members: string[];

  @Column({
    type: "numeric",
  })
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.client, {
    cascade: true,
  })
  transactions: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
