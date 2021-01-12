const model = require('../models/productsModel.js');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();
  const err = { err: { code: 404, message: 'Not found' } };

  if (!allProducts) throw err;

  return allProducts;
};

const getById = async (body) => {
  const { id } = body;
  const err = { err: { code: 404, message: 'Error' } };

  if (!id) throw err;

  const product = await model.getById(id);
  const err2 = { err: { code: 404, message: 'Error' } };

  if (!product) throw err2;

  return product[0];
};

module.exports = {
  getAllProducts,
  getById,
};
