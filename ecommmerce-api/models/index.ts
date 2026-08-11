import Category from "./Category";
import User from "./User";
import Product from "./Product";
import Cart from "./Cart";
import Order from "./Order";
import OrderItem from "./OrderItems";
import ProductImage from "./ProductImage";

User.hasMany(Product, {
  foreignKey: "UserId",
    as: "products",
});

Product.belongsTo(User, {
  foreignKey: "UserId",
});

Category.hasMany(Category, {
  foreignKey: "parentCatId",
  as: "subCategories",
});
Category.hasMany(Product, {
  foreignKey: "CategoryId",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "CategoryId",
  as: "category",
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

Product.hasMany(ProductImage,
{ foreignKey: "productId" ,
  as :"images"}
);