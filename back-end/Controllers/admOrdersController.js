const { Router } = require('express');

const service = require('../Service/admOrdersService');

const admOrders = Router();

admOrders.get('/', async (req, res) => {
  try {
    const { id } = req.payload;
    const orders = await service.getOrders(id);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = admOrders;
