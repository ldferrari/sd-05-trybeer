const { Router } = require('express');

const service = require('../Service/productsService');

const products = Router();

products.get('/', async (req, res) => {
  try {
    const allProducts = await service.getAll();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.', ok: false });
  }
});

module.exports = products;
