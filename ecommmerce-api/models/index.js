const Category = require("./Category");
const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Order = require("./order");
const OrderItem = require("./OrderItems");

User.hasMany(Product, {
  foreignKey: "UserId",
    as: "products",
});

Product.belongsTo(User, {
  foreignKey: "UserId",
});

Category.hasMany(Product, {
  foreignKey: "CategoryId",
});
Category.hasMany(Category, {
  foreignKey: "parentCatId",
  as: "subCategories",
});
Product.belongsTo(Category, {
  foreignKey: "CategoryId",
});

User.hasMany(Cart, 
{ foreignKey: "userId" });

Cart.belongsTo(User, 
{ foreignKey: "userId" });


Product.hasMany(Cart,
{ foreignKey: "productId" });

Cart.belongsTo(Product,
{ foreignKey: "productId" });

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);