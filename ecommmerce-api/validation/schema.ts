const { z, nullable } = require("zod");
const { Schema } = require("zod/v3");

const signupSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string(),
});
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
const productSchema = z.object({
  ProductName: z.string().min(2),
  ProductQty: z.coerce.number().int().nonnegative(),
  ProductStatus: z.string(),
  ProductPrice: z.coerce.number().positive(),
  ProductDesc: z.string().optional(),
  CategoryId: z.coerce.number().int(),
});
const categorySchema = z.object({
  categoryName: z.string(),
  parentCatId: z.number().nullable(),
});
const cartSchema = z.object({
  ProductId: z.number().int(),
  ProducatQty: z.number().int(),
});

const createOrderSchema = z.object({
  address: z.string().min(3, "Address is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  paymentMode: z.enum(["cod", "esewa"]).optional().default("cod"),
  items: z
    .array(
      z.object({
        productId: z.number().int(),
        quantity: z.number().int().positive(),
      })
    )
    .optional(),
});

const updateOrderSchema = z.object({
  status: z
    .enum(["pending", "accepted", "shipping", "completed", "rejected"])
    .optional(),
  paymentStatus: z.enum(["paid", "unpaid", "conflict"]).optional(),
  address: z.string().min(3).optional(),
  phone: z.string().min(7).optional(),
});

export {
  signupSchema,
  loginSchema,
  productSchema,
  categorySchema,
  cartSchema,
  createOrderSchema,
  updateOrderSchema,
};
