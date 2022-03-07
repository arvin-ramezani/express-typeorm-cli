import { Client } from "./Client.entity";
import { Person } from "./utils/Person.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  UpdateDateColumn,
} from "typeorm";

@Entity("banker")
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;

  @ManyToMany(() => Client, { cascade: true })
  @JoinTable({
    name: "bankers_clients",
    joinColumn: {
      name: "banker",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id",
    },
  })
  clients: Client[];
}
