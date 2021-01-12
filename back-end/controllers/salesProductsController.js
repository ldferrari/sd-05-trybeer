const { Router } = require('express');

const service = require('../services/salesProductsService');

const details = Router();

details.get('/', async (req, res) => {
  try {
    // console.log(req.query);
    const { id } = req.query;
    const saleDetails = await service.getSaleDetails(id);
    console.log(saleDetails);
    res.status(201).json(saleDetails);
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
});

module.exports = details;
