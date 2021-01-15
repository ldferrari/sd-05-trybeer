const { Router } = require('express');

const ordersService = require('../services/ordersService');

const orders = Router();

orders.post('/', async (req, res) => {
  try {
    const getAllOrders = await ordersService.getAllOrders(req.body.id);
    res.status(200).json(getAllOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = orders;
