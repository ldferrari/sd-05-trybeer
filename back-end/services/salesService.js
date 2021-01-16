const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();

const getSale = async (id) => {
  const saleExists = await salesModel.getSale(id);

  if (saleExists.length < 1) {
    throw {
        code: 'not_found',
        message: 'Sale not found',
    };
  }
  
  return saleExists;
};

module.exports = {
  getAllSales,
  getSale
};
