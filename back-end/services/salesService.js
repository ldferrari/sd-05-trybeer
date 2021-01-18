const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();

const getSale = async (id) => {
  const saleExists = await salesModel.getSale(id);

  if (saleExists.length < 1) {
    throw new Error({
      code: 'not_found',
      message: 'Sale not found',
    });
  }

  return saleExists;
};

const update = async (id, status) => {
  const saleExists = await salesModel.getSale(id);

  if (saleExists.length < 1) {
    throw new Error({
      code: 'not_found',
      message: 'Sale not found',
    });
  }

  await salesModel.update(id, status);
  return ({ id, status, message: 'success' });
};

module.exports = {
  getAllSales,
  getSale,
  update,
};
