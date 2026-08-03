const { Op } = require("sequelize");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const SubOrder = require("../models/SubOrderItem");
const OrderItem = require("../models/OrderItems");
const Cart = require("../models/Cart");
 
const getOrders = async (req, res) => {
  let orders = await Order.findAll({
  }); // select * from orders
  res.send({
    data: orders,
  });
};

const storeOrder = async (req, res) => {
  try {
    let date = new Date();
    const realMonth = date.getMonth() + 1;
    let orderNo =
      "DRZ-" +
      realMonth +
      "-" +
      Date.now() +
      Math.floor(Math.random() * 1000000);

const transaction = await sequelize.transaction();


    let order = await Order.create({
      orderNo,
      paymentMode: "cod",
      userId: req.user.id,
      address: req.body.address,
      phone: req.body.phone,
    }, { transaction });

    // order
    console.log(order.id);

    let products = req.body.products;
    // console.log(products);

    let cartPoducts = await Cart.findAll({
      where: {
        userId: req.user.id,
      },
      attributes: ["productId", "quantity"],
    });

    // cartPoducts.find(el => el.productId == 5).quantity
    // res.send(cartPoducts);
    // return;

    let cartProductIds = cartPoducts.map((el) => el.productId);
    console.log(cartProductIds);

    let sellers = await User.findAll({
      include: {
        model: Product,
        as: "products",
        where: {
          id: {
            [Op.in]: cartProductIds,
          },
        },
      },
    });

    // for (i = 0 ; i<sellers.length)
    // for in
    // for of
for (const seller of sellers) {
        console.log(11111);
      let subOrder = await SubOrder.create({
        orderId: order.id,
        sellerId: seller.id,
        shippingCharge: seller.shippingCharge,
      }, { transaction });

      //  for (j = 0,j<seller.product.lenth ;)
      // for in
      // for of
  for (const product of seller.products) {
await OrderItem.create({
  subOrderId: subOrder.id,
  productId: product.id,
  quantity: cartPoducts.find((el) => el.productId == product.id).quantity,
  price: product.ProductPrice,
  productName: product.ProductName,
}, { transaction });
      };
    };

    // SubOrder.create()
    // OrderItem.create()

  await transaction.commit();
  res.send("Order created successfully");
  } catch (err) {
      await transaction.rollback();
    res.status(500).send({
      msg: "SERVER error",
      error: err.error,
      msg: err.message,
    });
  }
};

const updateOrder = async (req, res) => {
  res.send("orders updated");
  return;
  // zoi validation
  console.log(req.params.id);

  const cart = await Order.update(
    {
      title: req.body.title,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  );

  res.send("cart update");
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    // Check if order exists
    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).send({
        message: "Order not found",
      });
    }

    // Find all sub orders of this order
    const subOrders = await SubOrder.findAll({
      where: {
        orderId: orderId,
      },
    });

    // Delete order items of each sub order
    for (const subOrder of subOrders) {
      await OrderItem.destroy({
        where: {
          subOrderId: subOrder.id,
        },
      });
    }

    // Delete sub orders
    await SubOrder.destroy({
      where: {
        orderId: orderId,
      },
    });

    // Delete order
    await Order.destroy({
      where: {
        id: orderId,
      },
    });

    res.send({
      message: "Order deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// named export
module.exports = {
  getOrders,
  storeOrder,
  updateOrder,
  deleteOrder,
};
