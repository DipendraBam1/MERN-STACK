const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const authorizeSeller = require("../middleware/sellerMiddleware");
const { getProducts, postProducts, updateProducts, deleteProducts } = require("../controllers/productController");
 
const Router = express.Router();

Router.get("/api/products", getProducts);

Router.post(
  "/api/products",
  authenticateToken,
  authorizeSeller,
  postProducts,
);
Router.put("/api/products/:id",authenticateToken,updateProducts);
Router.delete("/api/products/:id",authenticateToken,deleteProducts);

module.exports = Router;
