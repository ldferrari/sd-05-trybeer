const { Router } = require('express');

const service = require('../Service/productsService');

const products = Router();

products.get('/', async (req, res) => {
  try {
    const allProducts = await service.getAll();
    // console.log(allProducts)
    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = products;
