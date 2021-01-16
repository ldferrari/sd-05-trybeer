const orderDetailsModel = require('../models/orderDetailsModel');

const getOrderDetails = async (id) => orderDetailsModel.getOrderDetails(id);

module.exports = {
  getOrderDetails,
};
