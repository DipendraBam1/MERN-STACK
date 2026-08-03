const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");
const Order = require("./Order");
const SubOrderItem = require("./SubOrderItem");
const Product = require("./Product");

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
    underscored: "true",
    timestamps: true,
  },
);

module.exports = OrderItem;
