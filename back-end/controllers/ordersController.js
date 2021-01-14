const { Router } = require('express');

const ordersService = require('../services/ordersService');

const orders = Router();

orders.get('/', async (req, res) => {
  try {
    const { id } = req.payload;
    const orders = await ordersService.getOrders(id);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = orders;
