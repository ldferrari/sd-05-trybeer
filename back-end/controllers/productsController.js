const { Router } = require('express');

const service = require('../services/productsServices.js');

const products = Router();

products.get('/', async (_req, res) => {
  try {
    const allProducts = await service.getAllProducts();
    return res.status(200).json(allProducts[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

products.get('/id', async (req, res) => {
  try {
    const product = await service.getById(req.query);
    return res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = products;
