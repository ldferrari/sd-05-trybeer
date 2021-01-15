const ordersModel = require('../models/ordersModel');

const getAllOrders = async (id) => ordersModel.getAllOrders(id);

module.exports = {
  getAllOrders,
};
