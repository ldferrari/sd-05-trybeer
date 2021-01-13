const productModel = require('../models/productModel');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products[0];
};

module.exports = { getAllProducts };
