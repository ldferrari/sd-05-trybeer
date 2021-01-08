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

sales.get('/', async (req, res) => {
  try {
    const userSales = await service.getByUserId(req.body);
    res.status(201).json(userSales);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

sales.get('/sales-open', async (_req, res) => {
  try {
    const allSalesOpen = await service.getAllOpen();
    res.status(201).json(allSalesOpen);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = sales;
