import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
import User from "./User";

const Category = sequelize.define(
  "Category",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentCatId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "categories",
    underscored: true,
    timestamps: true,
  },
);
export default Category;
