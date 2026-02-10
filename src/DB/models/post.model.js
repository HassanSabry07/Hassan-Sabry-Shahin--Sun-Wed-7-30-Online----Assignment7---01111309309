import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export class Post extends Model {}

Post.init({
  title: DataTypes.STRING,
  content: DataTypes.TEXT
}, {
  sequelize,
  modelName: "Post",
  paranoid: true
});
