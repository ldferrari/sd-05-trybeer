const rescue = require('express-rescue');
const productsModel = require('../models/products.model');

const addSale = rescue(async (req, _res, next) => {
  const { } = req.body;
});

const getSaleById = rescue(async (req, _res, next) => {

});

const getAllSales = rescue(async (req, _res, next) => {

});

module.exports = { addSale, getSaleById, getAllSales };
