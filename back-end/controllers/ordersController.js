const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const service = require('../services/ordersService');

const orders = Router();

orders.post('/insert', validateJWT, async (req, res) => {
  const { order, email } = req.body;

  const sale = await service.insertSale(order, email);

  return res.status(sale.statusCode).json(sale.message);
});

orders.get('/', validateJWT, async (req, res) => {
  const { email } = req.query;
  const sale = await service.getOrdersByUserId(email);

  if (sale.error) {
    return res.status(sale.statusCode).json(sale.message);
  }

  return res.status(200).json(sale);
});
orders.get('/:id', async (req, res) => {
  const { id } = req.params;
  const ordersProducts = await service.getSalesProducts(id);
  if (ordersProducts.error) {
    return res.status(ordersProducts.code).json(ordersProducts.message);
  }
  console.log(ordersProducts);
  return res.status(200).json(ordersProducts);
});
module.exports = orders;
