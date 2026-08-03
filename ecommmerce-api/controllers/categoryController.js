const { categorySchema } = require("../validation/schema");
const Category = require("../models/Category");

const createcategory =async (req, res) => {
  const parsed = categorySchema.safeParse(req.body);
  console.log(parsed);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: parsed.error.flatten() });
  }
  const { categoryName, parentCatId } = parsed.data;
  try {
    const category = await Category.create({
      categoryName,
      parentCatId,
      UserId: req.user.id,
    });
    res.status(201).json({
      message: "Category created successful",
      category,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating category" });
  }
}
const getcategories = async (req, res) => {
  let categories = await Category.findAll({
    where: {
      parentCatId: null,
    },
    include: {
      model: Category,
      as: "subCategories",
      attributes:['id','categoryName'] // as i only want to fetch id and category name , it aslo includes time_spams and other column 
    },
  }); 
  res.send({
    data: categories,
  });
};
  const deletecategory = async (req, res) => {
  try {
    const deletedRows = await Category.destroy({
      where: {
        id: req.params.id,
        UserId: req.user.id,  
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "category not found",
      });
    }

    res.status(200).json({
      message: "category deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error deleting category",
      error: err.message,
    });
  }
};
module.exports = {createcategory,getcategories,deletecategory};