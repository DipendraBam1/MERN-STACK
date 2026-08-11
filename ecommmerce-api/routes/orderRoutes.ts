// const express = require("express");
import express from "express";
import {
  getOrders,
  storeOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/orderController";

// const authenticateToken = require("../middleware/authMiddleware");
import authenticateToken from "../middleware/authMiddleware";
import orderVerification from "../controllers/orderVerification";
const OrderRouter = express.Router();

OrderRouter.get("/", authenticateToken, getOrders);
OrderRouter.post("/", authenticateToken, storeOrder);
OrderRouter.put("/:id", authenticateToken, updateOrder);
OrderRouter.delete("/:id", authenticateToken, deleteOrder);

OrderRouter.get("/verification",orderVerification);

 export default OrderRouter;