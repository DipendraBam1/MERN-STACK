const {DataTypes} = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User")
const Category = require("./Category")
 const Product = sequelize.define(
  "Product",
  {
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ProductPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ProductStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductDesc: {
      type: DataTypes.STRING,
    },
    CategoryId: {
      type: DataTypes.INTEGER,

      references: {
        model: Category,
        key: "id",
      },
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
    tableName: "products",
    underscored: true,
    timestamps: true,
  },
);
module.exports = Product;