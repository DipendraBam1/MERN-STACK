import express, { Request, Response } from "express";
import "dotenv/config";
const cors = require("cors");

require("./models/index");

import authRoutes from "./routes/auth";
import productRoute from "./routes/productRoutes";
import categoryRoute from "./routes/categoryRoutes";
import userRoutes from "./routes/userRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use(authRoutes);
app.use(productRoute);
app.use(categoryRoute);
app.use(userRoutes);
app.use(cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to my API",
  });
});

export default app;