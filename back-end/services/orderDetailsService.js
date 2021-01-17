const orderDetailsModel = require('../models/orderDetailsModel');

const getOrderDetails = async (id) => {
  await orderDetailsModel.getOrderDetails(id);

  if (orderDetailsModel.length < 1) {
    throw {
        code: 'not_found',
        message: 'Sale not found',
    };
  }

  return orderDetailsModel;
}

module.exports = {
  getOrderDetails,
};
