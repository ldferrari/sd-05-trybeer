const { Router } = require('express');
const productsServices = require('../services/products.services');

const products = Router();

products.get('/', productsServices.getAllProducts, (req, res) => {
  res.status(200).json(req.data);
});

products.get('/:id', productsServices.getProductById, (req, res) => {
  res.status(200).json(req.data);
});

products.post('/', productsServices.addProduct, (req, res) => {
  res.status(200).json(req.data);
});

module.exports = products;
