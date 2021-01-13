const { Router } = require('express');
const rescue = require('express-rescue');
const productService = require('../services/productService');
const authToken = require('../middlewares/authToken');

const productRouter = Router();

productRouter.get(
  '/',
  authToken,
  rescue(async (_req, res) => {
    const products = await productService.getAllProducts();
    return products
      ? res.status(200).json(products)
      : res.status(400).json({
        message: 'Not found!',
      });
  }),
);

module.exports = productRouter;
