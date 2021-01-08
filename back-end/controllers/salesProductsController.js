const { Router } = require('express');

const service = require('../services/salesProductsService');

const details = Router();

details.get('/', async (req, res) => {
  try {
    const saleDetails = await service.getSaleDetails(req.body);
    res.status(201).json(saleDetails);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = details;
