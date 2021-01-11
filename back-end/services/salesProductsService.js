const model = require('../models/salesProductsModel');

const getSaleDetails = async (id) => {
  if (!id) {
    throw { err: { code: 401, message: 'error' } };
  }

  const saleDetails = await model.getSaleDetails(id);

  if (!saleDetails) {
    throw { err: { code: 401, message: 'error' } };
  }

  return saleDetails[0];
}

module.exports = {
  getSaleDetails,
};
