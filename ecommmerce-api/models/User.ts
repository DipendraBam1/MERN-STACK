import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
const User = sequelize.define(
  "User",
  {
     firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  role: {
    type: DataTypes.ENUM,
    values: ['admin', 'seller', 'buyer'],
  },
  },
  {
    tableName: "users",
    underscored: true,
    timestamps: true,
  },
);
 export default User;