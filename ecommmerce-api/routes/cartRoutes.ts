// const express = require("express");
import express from "express";
import {
  getCarts,
  storeCart,
  deleteCart,
  updateCart,
} from "../controllers/cartController";
//  const authenticateToken = require("../middleware/authMiddleware");
import authenticateToken from "../middleware/authMiddleware";
const router = express.Router();

router.get("/api/carts", authenticateToken, getCarts);
router.post("/api/carts", authenticateToken, storeCart);
router.put("/api/carts/:id", authenticateToken, updateCart);
router.delete("/api/carts/:id", authenticateToken, deleteCart);

// module.exports = router;
export default router;