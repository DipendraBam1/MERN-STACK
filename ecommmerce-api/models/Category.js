const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");

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
module.exports = Category;
