import {DataTypes} from "sequelize";
import sequelize from "../connections/database";
import User from "./User";
import Order from "./Order";

const SubOrderItem = sequelize.define(
  "SubOrderItem",
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    shippingCharge: {
      // snapshot
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "sub_orders",
    underscored: true,
    timestamps: true,
  },
);

export default SubOrderItem;
