import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
import Product from"./Product";
import User from"./User";
const Cart = sequelize.define(
  "Cart",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    underscored: true,
    timestamps: true,
  },
);

export default Cart;
// export default Cart
