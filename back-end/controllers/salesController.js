const { Router } = require('express');

const service = require('../services/salesService');

const sales = Router();

sales.post('/', async (req, res) => {
  try {
    await service.createSale(req.body);
    res.status(201).json({ message: 'Created' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

sales.put('/', async (req, res) => {
  try {
    await service.closeSale(req.body);
    res.status(201).json({ message: 'Sale Closed' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = sales;
