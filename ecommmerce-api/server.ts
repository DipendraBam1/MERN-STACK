// const express = require("express");
//require("dotenv").config();

import express, {Request, Response } from "express";
import 'dotenv/config';
const cors = require("cors");
require("./models/index");
const app = express();
// const authRoutes = require("./routes/auth");
import authRoutes from "./routes/auth";
// const productRoute = require("./routes/productRoutes");
import productRoute from "./routes/productRoutes";
// const categoryRoute = require("./routes/categoryRoutes");
import categoryRoute from "./routes/categoryRoutes";
import userRoutes from "./routes/userRoutes";
// const userRoutes = require("./routes/userRoutes")
// const cartRoutes = require("./routes/cartRoutes");
import cartRoutes from "./routes/cartRoutes";
// const orderRoutes = require("./routes/orderRoutes");
import orderRoutes from "./routes/orderRoutes";

app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));

app.use(authRoutes);
app.use(productRoute);
app.use(categoryRoute);
app.use(userRoutes);
app.use(cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (_req:Request, res:Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to my API",
  });
});
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
