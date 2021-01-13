const productModel = require('../models/productModel');

const getAllProducts = async () => productModel.getAllProducts();

module.exports = { getAllProducts };
