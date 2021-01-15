const { Router } = require('express');
const salesServices = require('../services/sales.services');

const sales = Router();

sales.get('/', salesServices.getAllSales, (req, res) => {
  res.status(200).json(req.data);
});

sales.get('/:id', salesServices.getSaleById, (req, res) => {
  res.status(200).json(req.data);
});

sales.post('/', salesServices.addSale, (req, res) => {
  res.status(200).json(req.data);
});

module.exports = sales;
