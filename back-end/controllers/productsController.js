const { Router } = require('express');

const service = require('../services/productsServices.js');

const products = Router();

products.get('/', async (req, res) => {
  try {
    const allProducts = await service.getAllProducts();
    return res.status(200).json(allProducts[0]);
  } catch (e) {
    res.status(e.err.code).json({ message: e.err.message });
  }
});

module.exports = products;
