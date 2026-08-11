// const express = require("express");
import express from "express";
// const authenticateToken = require("../middleware/authMiddleware");
// const authorizeSeller = require("../middleware/sellerMiddleware");
import authenticateToken from "../middleware/authMiddleware";
import authorizeSeller from "../middleware/sellerMiddleware";

import { getProducts, postProducts, updateProducts, deleteProducts } from "../controllers/productController";
 
const Router = express.Router();
const multer  = require('multer');
const path = require("path"); 
// it stores images locally in web increases the space/storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) +
//      path.extname(file.originalname);  // extract extname from original name and attach here
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage: storage })
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
Router.get("/api/products", getProducts);

Router.post(
  "/api/products",
  authenticateToken,
  authorizeSeller,
  upload.array('photos', 12),
  postProducts,
);

Router.put("/api/products/:id",authenticateToken,updateProducts);
Router.delete("/api/products/:id",authenticateToken,deleteProducts);

// module.exports = Router;
export default Router;
