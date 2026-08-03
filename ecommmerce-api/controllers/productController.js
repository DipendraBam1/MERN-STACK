const { productSchema } = require("../validation/schema");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
 }

const postProducts =   async (req, res) => {
    const parsed = productSchema.safeParse(req.body);
    console.log(parsed);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Invalid input", errors: parsed.error.flatten() });
    }

    const {
      ProductName,
      ProductQty,
      ProductStatus,
      ProductPrice,
      ProductDesc,
      CategoryId,
    } = parsed.data;
    try {
      const product = await Product.create({
        ProductName,
        ProductQty,
        ProductStatus,
        ProductPrice,
        ProductDesc,
        CategoryId,
        UserId: req.user.id,
      });
      res.status(201).json({
        message: "Product created successful",
        product,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error creating product",
        error: err.message,
      });
    }
  }
const updateProducts =   async (req, res) => {
    const parsed = productSchema.safeParse(req.body);
    console.log(parsed);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Invalid input", errors: parsed.error.flatten() });
    }

    const {
      ProductName,
      ProductQty,
      ProductStatus,
      ProductPrice,
      ProductDesc,
      CategoryId,
    } = parsed.data;
    try {
      const product = await Product.update({
        ProductName,
        ProductQty,
        ProductStatus,
        ProductPrice,
        ProductDesc,
        CategoryId,
        UserId: req.user.id,
      },
    {
      where : {
        id:req.params.id,
      },
    });
      res.status(201).json({
        message: "Product update successful",
        product,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error updating product",
        error: err.message,
      });
    }
  }
  const deleteProducts = async (req, res) => {
  try {
    const deletedRows = await Product.destroy({
      where: {
        id: req.params.id,
        UserId: req.user.id,  
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error deleting product",
      error: err.message,
    });
  }
};
  module.exports = {getProducts,postProducts,updateProducts,deleteProducts}