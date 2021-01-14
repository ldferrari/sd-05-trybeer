const model = require('../Models/admOrdersModel');

const getOrders = async (userId) => model.getOrders(userId);

module.exports = {
  getOrders,
};
