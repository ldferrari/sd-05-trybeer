const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();

module.exports = {
  getAllSales,
};
