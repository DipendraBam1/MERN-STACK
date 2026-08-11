import { Request, Response } from "express";
import { Op } from "sequelize";
import crypto from "crypto";
import Order from "../models/Order";
import Product from "../models/Product";
import User from "../models/User";
import SubOrder from "../models/SubOrderItem";
import OrderItem from "../models/OrderItems";
import Cart from "../models/Cart";
import sequelize from "../connections/database";

const getOrders = async (req: Request, res: Response) => {
  let orders = await Order.findAll();
  res.send({
    data: orders,
  });
};

const storeOrder = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();

  try {
    let date = new Date();
    let totalShippingCharge = 0;
    let totalProductPrice = 0;
    const realMonth = date.getMonth() + 1;
    let orderNo =
      "DRZ-" +
      realMonth +
      "-" +
      Date.now() +
      "-" +
      Math.floor(Math.random() * 1000000);

    const order: any = await Order.create(
      {
        orderNo,
        paymentMode: req.body.paymentMode,
        userId: req.user!.id,
        address: req.body.address,
        phone: req.body.phone,
      },
      { transaction },
    );

    let cartPoducts: any[] = await Cart.findAll({
      where: {
        userId: req.user!.id,
      },
      attributes: ["productId", "quantity"],
    });

    let cartProductIds = cartPoducts.map(
      (el: any) => el.productId,
    );
    console.log(cartProductIds);

    let sellers: any[] = await User.findAll({
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

    for (const seller of sellers) {
      let subOrder: any = await SubOrder.create(
        {
          orderId: order.id,
          sellerId: seller.id,
          shippingCharge: seller.shippingCharge || 0,
        },
        { transaction },
      );
      totalShippingCharge += Number(seller.shippingCharge || 0);

      for (const product of seller.products || []) {
        let cartItem = cartPoducts.find(
          (el: any) => el.productId == product.id,
        );
        let productQty = cartItem ? cartItem.quantity : 0;
        await OrderItem.create(
          {
            subOrderId: subOrder.id,
            productId: product.id,
            quantity: productQty,
            price: product.ProductPrice,
            productName: product.ProductName,
          },
          { transaction },
        );
        totalProductPrice += productQty * Number(product.ProductPrice || 0);
      }
    }

    let esewaPayload: any = undefined;
    let totalAmount = totalProductPrice + totalShippingCharge;

    if (req.body.paymentMode === "esewa") {
      const productCode = "EPAYTEST";
      const message = `total_amount=${totalAmount},transaction_uuid=${orderNo},product_code=${productCode}`;

      let signature = crypto
        .createHmac("sha256", "8gBm/:&EnhH.1/q")
        .update(message)
        .digest("base64");

      esewaPayload = {
        amount: totalAmount,
        tax_amount: 0,
        total_amount: totalAmount,
        transaction_uuid: orderNo,
        product_code: productCode,
        product_service_charge: 0,
        product_delivery_charge: 0,
        success_url: "http://localhost:5173/order-success",
        failure_url: "http://localhost:5173/order-failure",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature: signature,
      };
    }
    await transaction.commit();
    res.send({
      message: "Order created successfully",
      esewaPayload,
    });
  } catch (err) {
    await transaction.rollback();
    let message = "";
    if (err instanceof Error) {
      message = err.message;
    }
    res.status(500).send({
      msg: "SERVER error",
      error: message,
    });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  res.send("orders updated");
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findByPk(Number(orderId));

    if (!order) {
      return res.status(404).send({
        message: "Order not found",
      });
    }

    const subOrders: any[] = await SubOrder.findAll({
      where: {
        orderId: orderId,
      },
    });

    for (const subOrder of subOrders) {
      await OrderItem.destroy({
        where: {
          subOrderId: subOrder.id,
        },
      });
    }

    await SubOrder.destroy({
      where: {
        orderId: orderId,
      },
    });

    await Order.destroy({
      where: {
        id: orderId,
      },
    });

    res.send({
      message: "Order deleted successfully",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";

    res.status(500).send({
      msg: "SERVER error",
      error: message,
    });
  }
};

export { getOrders, storeOrder, updateOrder, deleteOrder };
