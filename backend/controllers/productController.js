const Product = require("../models/productModel");
const ErrorHandler = require("../utils/ErrorHandler");

//Create Product-- Admin
exports.createProduct = async (req, res, next) => {
  const added_product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    added_product,
  });
};

//Get All Products
exports.getAllProducts = async (req, res) => {
  const reading_products = await Product.find();

  res.status(200).json({ success: true, reading_products });
};

// Update Product with handeling if product id is not right then our app should not crash
exports.updateProduct = async (req, res) => {
  let update_product = await Product.findById(req.params.id);

  if (!update_product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  update_product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    update_product,
  });
};

//Delete product

exports.deleteProduct = async (req, res) => {
  const delete_product = await Product.findById(req.params.id);

  if (!delete_product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await delete_product.remove();

  res.status(200).json({
    success: true,
    message: "Product is deleted successfully",
  });
};

// Read one product
exports.productDetails = async (req, res) => {
  const product_details = await Product.findById(req.params.id);
  if (!product_details) {
    return next(new ErrorHandler("Product not found", 404));
    // return res.status(404).json({
    //   success: false,
    //   message: "Product not found",
    // });
  }

  res.status(200).json({ success: true, product_details });
};
