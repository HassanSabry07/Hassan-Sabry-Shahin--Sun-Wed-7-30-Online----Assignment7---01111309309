import { Model, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export class Comment extends Model {}

Comment.init({
  content: DataTypes.TEXT
}, {
  sequelize,
  modelName: "Comment"
});
