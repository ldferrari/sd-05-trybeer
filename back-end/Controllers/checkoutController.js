const { Router } = require('express');

const service = require('../Service/checkoutService');

const checkout = Router();

checkout.get('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkoutProducts = await service.getCheckout(email, password);
    /* if (checkoutProducts.error) {
      return res.status(checkoutProducts.statusCode).json({ message: checkoutProducts.message });
    } */
    // console.log(checkoutProducts);
    res.status(200).json(checkoutProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = checkout;
