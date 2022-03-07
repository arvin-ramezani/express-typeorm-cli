import { ConnectBankerToClientController } from "./controller/ConnectBankerToClientController";
import { TransactionController } from "./controller/TransactionController";
import { ClientController } from "./controller/ClientController";
import { UserController } from "./controller/UserController";
import { BankerController } from "./controller/BankerController";

export const Routes = [
  // User Routes
  {
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove",
  },

  // Clients Routes
  {
    method: "post",
    route: "/api/clients",
    action: "createOne",
    controller: ClientController,
  },
  {
    method: "get",
    route: "/api/clients",
    action: "getAll",
    controller: ClientController,
  },
  {
    method: "delete",
    route: "/api/clients/:clientId",
    action: "getAll",
    controller: ClientController,
  },

  // Transaction Routes
  {
    method: "post",
    route: "/api/clients/:clientId/transactions",
    action: "createOne",
    controller: TransactionController,
  },

  // Banker Routes
  {
    method: "post",
    route: "/api/bankers/:bankerId",
    action: "createOne",
    controller: BankerController,
  },

  // Connect Banker To Client
  {
    method: "put",
    route: "/api/bankers/:bankerId/clients/:clientId",
    action: "connectBankerToClient",
    controller: ConnectBankerToClientController,
  },
];
