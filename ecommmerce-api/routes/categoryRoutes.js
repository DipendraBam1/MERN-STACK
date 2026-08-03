 const express = require("express")
 const Router = express.Router();
 const {getcategories, createcategory, deletecategory} = require("../controllers/categoryController");
const authorizeAdmin = require("../middleware/adminMiddleware");
const authenticateToken = require("../middleware/authMiddleware");

Router.post("/api/categories",authenticateToken,authorizeAdmin, createcategory);
Router.get("/api/categories",getcategories);
Router.delete("/api/categories/:id",authenticateToken,authorizeAdmin,deletecategory);


module.exports = Router;
