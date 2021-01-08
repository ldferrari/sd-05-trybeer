const { Router } = require('express');
const service = require('../services/productsService');

const products = Router();

products.get('/', async (req, res) => {
  const product = await service.getAll();

  res.status(200).json(product);
});

module.exports = products;
