const express = require("express");
const {
  getCarts,
  storeCart,
  deleteCart,
  updateCart,
} = require("../controllers/cartController");
 const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/api/carts", authenticateToken, getCarts);
router.post("/api/carts", authenticateToken, storeCart);
router.put("/api/carts/:id", authenticateToken, updateCart);
router.delete("/api/carts/:id", authenticateToken, deleteCart);

module.exports = router;
