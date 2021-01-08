const model = require('../models/productsModel.js');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();

  if (!allProducts) throw { err: { code: 404, message: 'Not found' } };

  return allProducts;
};

const getById = async (body) => {
  const { id } = body;

  if (!id) throw { err: { code: 404, message: 'Error' } };

  const product = await model.getById(id);

  if(!product) throw { err: { code: 404, message: 'Error' } };

  return product[0];
};

module.exports = {
  getAllProducts,
  getById,
};
