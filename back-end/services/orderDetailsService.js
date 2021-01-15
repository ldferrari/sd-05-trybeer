const orderDetailsModel = require('../models/orderDetailsModel');

const getOrderDetails = async (sale_id) =>
  orderDetailsModel.getOrderDetails(sale_id);

module.exports = {
  getOrderDetails,
};
