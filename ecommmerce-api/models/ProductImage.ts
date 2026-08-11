import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
import Product from "./Product";

const ProductImage = sequelize.define(
  "ProductImage",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },

    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Product_Images",
    underscored: true,
    timestamps: true,
  }
);

export default ProductImage;