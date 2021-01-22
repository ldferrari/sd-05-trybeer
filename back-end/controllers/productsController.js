const { Router } = require('express');

const productsService = require('../services/productsService');

const products = Router();

products.get('/', async (req, res) => {
  try {
    const getAllProducts = await productsService.getAllProducts();
    res.status(200).json(getAllProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = products;
