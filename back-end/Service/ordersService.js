const model = require('../Models/ordersModel');

const getOrders = async (userId) => model.getOrders(userId);

module.exports = {
  getOrders,
};
