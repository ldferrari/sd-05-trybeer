const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const service = require('../services/ordersService');

const orders = Router();

orders.get('/', validateJWT, async (req, res) => {
  const { email } = req.query;
  const sale = await service.getOrdersByUserId(email);

  if (sale.error) {
    return res.status(sale.statusCode).json(sale.message);
  }

  return res.status(200).json(sale);
});

orders.get('/admin', validateJWT, async (req, res) => {
  const { role } = req.headers;
  if (role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const sales = await service.getSalesAdmin();
  return res.status(200).json(sales);
});

orders.post('/insert', validateJWT, async (req, res) => {
  const { order, email } = req.body;

  const sale = await service.insertSale(order, email);

  return res.status(sale.statusCode).json(sale.message);
});

orders.get('/admin/:id', validateJWT, async (req, res) => {
  const { id } = req.params;
  const { role } = req.headers;
  if (role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const ordersProducts = await service.getSalesProducts(id);
  if (ordersProducts.error) {
    return res.status(ordersProducts.code).json(ordersProducts.message);
  }
  return res.status(200).json(ordersProducts);
});

orders.put('/admin/:id', validateJWT, async (req, res) => {
  const { id } = req.params;
  const { role } = req.headers;

  if (role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await service.updateOrderStatus(id);
  return res.status(200).json({ message: 'Order updated' });
});

orders.get('/:id', validateJWT, async (req, res) => {
  const { id } = req.params;
  const ordersProducts = await service.getSalesProducts(id);
  if (ordersProducts.error) {
    return res.status(ordersProducts.code).json(ordersProducts.message);
  }
  return res.status(200).json(ordersProducts);
});

module.exports = orders;
