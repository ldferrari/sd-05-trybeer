const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const service = require('../services/ordersService');

const orders = Router();

orders.post('/', validateJWT, async (req, res) => {
  const { order, email } = req.body;

  const sale = await service.insertSale(order, email);

  return res.status(sale.statusCode).json(sale.message);
});

module.exports = orders;
