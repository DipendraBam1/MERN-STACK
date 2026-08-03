const express = require("express");
const {
  getOrders,
  storeOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

const authenticateToken = require("../middleware/authMiddleware");
const OrderRouter = express.Router();

OrderRouter.get("/", authenticateToken, getOrders);
OrderRouter.post("/", authenticateToken, storeOrder);
OrderRouter.put("/:id", authenticateToken, updateOrder);
OrderRouter.delete("/:id", authenticateToken, deleteOrder);

module.exports = OrderRouter;
