const { Router } = require('express');
const service = require('../services/productsService');
const validateJWT = require('../auth/validateJWT');

const products = Router();

products.get('/', validateJWT, async (req, res) => {
  const product = await service.getAll();
  // product.forEach((el) => el.qty = 0);
  for (let i = 0; i < product.length; i += 1) {
    product[i].qty = 0;
  }
  return res.status(200).json(product);
});

module.exports = products;
