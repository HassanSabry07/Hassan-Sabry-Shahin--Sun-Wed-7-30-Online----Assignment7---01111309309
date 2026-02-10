import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      checkPasswordLength(value) {
        if (value.length <= 6) {
          throw new Error("Password must be more than 6 characters");
        }
      }
    }
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user"
  }
}, {
  hooks: {
    beforeCreate(user) {
      if (user.name.length <= 2) {
        throw new Error("Name must be more than 2 characters");
      }
    }
  }
});
