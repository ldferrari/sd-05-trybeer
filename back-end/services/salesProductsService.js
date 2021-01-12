const model = require('../models/salesProductsModel');

const getSaleDetails = async (id) => {
  const err = { err: { code: 401, message: 'error' } };
  if (!id) {
    throw err;
  }

  const saleDetails = await model.getSaleDetails(id);

  if (!saleDetails) {
    throw err;
  }

  return saleDetails[0];
};

module.exports = {
  getSaleDetails,
};
