const model = require('../models/productsModel');

const getAll = async () => {
  const products = await model.getProducts();
  return products[0];
};

module.exports = {
  getAll,
};
