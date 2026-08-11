import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
import User from "./User";
import Order from "./Order";
import SubOrderItem from "./SubOrderItem";
import Product from "./Product";

const OrderItem = sequelize.define(
  "OrderItem",
  {
    subOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SubOrderItem,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
price: {
  type: DataTypes.DECIMAL(10, 2),
  allowNull: false,
},
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    underscored: true,
    timestamps: true,
  },
);

export default OrderItem;
