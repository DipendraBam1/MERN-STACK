//  const express = require("express")
import express from "express";
 const Router = express.Router();
 import {getcategories, createcategory, deletecategory} from "../controllers/categoryController";
// const authorizeAdmin = require("../middleware/adminMiddleware");
// const authenticateToken = require("../middleware/authMiddleware");
import authenticateToken from "../middleware/authMiddleware";
import authorizeAdmin from "../middleware/adminMiddleware";

Router.post("/api/categories",authenticateToken,authorizeAdmin, createcategory);
Router.get("/api/categories",getcategories);
Router.delete("/api/categories/:id",authenticateToken,authorizeAdmin,deletecategory);


// module.exports = Router;
export default Router;