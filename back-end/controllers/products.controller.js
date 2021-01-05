const { Router } = require('express');
const productsServices = require('../services/products.services');

const products = Router();

products.get('/', productsServices.getAllProducts, (req, res) => {
  res.status(200).json(req.data);
  console.log(productsServices.getAllProducts);
});

products.get('/:id', productsServices.getProductById, (req, res) => {
  res.status(200).json(req.data);
})
// products.post('/', productsServices, (req, res) => {
//   res.status(200).json({ token: req.data });
// });

module.exports = products;
