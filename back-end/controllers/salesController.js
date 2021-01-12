const { Router } = require('express');

const service = require('../services/salesService');

const sales = Router();

sales.post('/', async (req, res) => {
  try {
    console.log(req.body);
    await service.createSale(req.body);
    res.status(201).json({ message: 'Created' });
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
});

sales.put('/', async (req, res) => {
  try {
    await service.closeSale(req.body);
    res.status(201).json({ message: 'Closed' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

sales.get('/', async (req, res) => {
  try {
    const userSales = await service.getByUserId(req.query);
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

sales.get('/all-sales', async (_req, res) => {
  try {
    const allSales = await service.getAllSales();
    res.status(201).json(allSales);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

sales.get('/:id', async (req, res) => {
  try {
    const { id } = req.query;
    const sale = await service.getSaleById(id);
    console.log(sale);
    res.status(201).json(sale);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = sales;
