const { Router } = require('express');

const ordersService = require('../services/ordersService');
const orderDetailsService = require('../services/orderDetailsService');

const orders = Router();
orders.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(Number(id));
  console.log(req.params);
  try {
    const getOrderDetails = await orderDetailsService.getOrderDetails(id);
    res.status(200).json(getOrderDetails);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

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
