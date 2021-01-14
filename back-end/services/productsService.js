const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();

module.exports = {
  getAllProducts,
};
