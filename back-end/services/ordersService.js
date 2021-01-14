const ordersModel = require('../models/ordersModel');

const getOrders = async (userId) => ordersModel.getOrders(userId);

module.exports = {
  getOrders,
};
