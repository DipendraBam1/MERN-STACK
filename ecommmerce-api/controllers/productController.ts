import { Request, Response } from "express";
import { Op, Sequelize,Order } from "sequelize";
import { v2 as cloudinary } from "cloudinary";

import { productSchema } from "../validation/schema";
import Product from "../models/Product";
import Category from "../models/Category";
import ProductImage from "../models/ProductImage";
// import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

 cloudinary.config({ 
  cloud_name: 'tho4yvtw', 
  api_key: '343696147579483', 
  api_secret: '7AOg1SQLOPixsWqRs63DLl7PK1s'
});

const getProducts = async (req:Request, res:Response) => {
  let limit = 2;
  let page = 1;
  let searchTerm = "";
  let categoryIds:string[]= [];
  let sortBy:Order = [["createdAt", "DESC"]];

  if (req.query.limit) {
    limit = parseInt(req.query.limit as string);
  }
  if (req.query.page) {
    page = parseInt(req.query.page as string);
  }
  if (req.query.q) {
    searchTerm = (req.query.q as string);
  }
  if (req.query.catid) {
    categoryIds = (req.query.catid as string).split(",");
  }
  if (req.query.sortBy) {
    switch (req.query.sortBy) {
      case "priceASC":
        sortBy = [["ProductPrice", "ASC"]];
        break;

      case "priceDESC":
        sortBy = [["ProductPrice", "DESC"]];
        break;

      case "latest":
        sortBy = [["createdAt", "DESC"]];
        break;

      case "oldest":
        sortBy = [["createdAt", "ASC"]];
        break;

      case "titleA-Z":
        sortBy = [[Sequelize.fn("LOWER", Sequelize.col("ProductName")), "ASC"]];
        break;

      case "titleZ-A":
        sortBy = [
          [Sequelize.fn("LOWER", Sequelize.col("ProductName")), "DESC"],
        ];
        break;
    }
  }
  const products = await Product.findAndCountAll({
    where: {
      ProductName: {
        [Op.iLike]: `%${searchTerm}%`,
      },
    },
    include: [
      {
        model: Category,
        as: "category",
        ...(categoryIds.length
          ? {
              where: {
                id: {
                  [Op.in]: categoryIds,
                },
              },
            }
          : {}),
      },
      {
        model: ProductImage,
        as: "images",
      },
    ],
    limit: limit,
    offset: (page - 1) * limit,
    order: sortBy,
  });
  res.send(products);
};

const postProducts = async (req:Request, res:Response) => {
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
      UserId: req.user!.id,
    });
console.log(req.files); // it include photos/files details of product 
// for (const file of req.files) {
//   await ProductImage.create({
//     productId: product.id,
//     path: file.path,
//   });
// }
const files = req.files as Express.Multer.File[];

       files.forEach(el => {
            let byteArrayBuffer = el.buffer
            new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream((error:any, uploadResult:any) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(uploadResult);
                }).end(byteArrayBuffer);

            }).then((uploadResult:any) => {
                console.log(uploadResult);
                ProductImage.create({
                    path: uploadResult.secure_url,
                    productId: product.getDataValue("id")
                })
            }).catch((error) => {
                console.error(error);
            });
        })
  } catch (err) {
  const message = err instanceof Error ? err.message : "Unknown error";  // previously i use stack but here message 

  res.status(500).send({
    msg: "error creating product",
    error: message,
  });

  }
  res.status(201).json({
  message: "Product created successful",
  });
};
const updateProducts = async (req:Request, res:Response) => {
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
    const product = await Product.update(
      {
        ProductName,
        ProductQty,
        ProductStatus,
        ProductPrice,
        ProductDesc,
        CategoryId,
        UserId: req.user!.id,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.status(201).json({
      message: "Product update successful",
      product,
    });
  } catch (err) {
  const message = err instanceof Error ? err.message : "Unknown error";  // previously i use stack but here message 

  res.status(500).send({
    msg: " error updating product",
    error: message,
  });

  }
};
const deleteProducts = async (req:Request, res:Response) => {
  try {
    const deletedRows = await Product.destroy({
      where: {
        id: req.params.id,
        UserId: req.user!.id,
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
  const message = err instanceof Error ? 
  err.message : "Unknown error";  // previously i use stack but here message 

  res.status(500).send({
    msg: "error deleting product",
    error: message,
  });

  }
};
export { getProducts, postProducts, updateProducts, deleteProducts };
