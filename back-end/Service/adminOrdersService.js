const model = require('../Models/adminOrdersModel');

const getAdminOrders = async () => model.getAdminOrders();

module.exports = {
  getAdminOrders,
};
