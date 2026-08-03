const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/index");
const app = express();
const authRoutes = require("./routes/auth");
const productRoute = require("./routes/productRoutes");
const categoryRoute = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes")
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(productRoute);
app.use(categoryRoute);
app.use(userRoutes);
app.use(cartRoutes);
app.use("/api/orders", orderRoutes);
const port = 3000;

app.listen(port, () => {
  console.log("server listening on port " + port);
});
