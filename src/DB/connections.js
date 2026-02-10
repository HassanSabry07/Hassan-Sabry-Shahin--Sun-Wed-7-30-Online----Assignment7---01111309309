import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "assignment",
  "root",
  "01111309309",
  {
    host: "localhost",
    dialect: "mysql"
  }
);
