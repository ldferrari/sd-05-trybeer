const model = require('../Models/ordersModel');

const getOrders = async () => model.getOrders();

module.exports = {
  getOrders,
};
