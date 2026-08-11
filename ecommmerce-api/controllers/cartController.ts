import { Request, Response } from "express";
const z = require("zod");
import Cart from "../models/Cart";
import Product from "../models/Product";

const getCarts = async (req: Request, res: Response) => {
  let carts = await Cart.findAll({
    where: {
      userId: req.user!.id,
    },
    include: {
      model: Product,
      as: "Product",
    },
  });  
  res.send({
    data: carts,
  });
};

const storeCart = async (req: Request, res: Response) => {
  try {
    let cart = await Cart.create({
      userId: req.user!.id,
      productId: req.body.productId,
      quantity: req.body.quantity,
    });

    res.send(cart);
  } catch (err) {
    let stack = "";
  if (err instanceof Error) {
    stack = err.stack || "";  //stack shows desc of error and location also , i can simply use message instead of stack 
  }
      res.status(500).send({
      msg: "SERVER error",
      error: stack,
    });
  }
};

const updateCart = async (req: Request, res: Response) => {
 
  const cart = await Cart.update(
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

const deleteCart = async (req: Request, res: Response) => {

  const cart = await Cart.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("cart deleted");
};

// named export
export {
  getCarts,
  storeCart,
  updateCart,
  deleteCart,
};
