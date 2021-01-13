const { Router } = require('express');

const service = require('../Service/adminOrdersService');

const adminOrder = Router();

adminOrder.get('/', async (req, res) => {
  try {
    const ordersProducts = await service.getAdminOrders();
    res.status(200).json(ordersProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = adminOrder;
