const { Router } = require('express');
const checkoutService = require('../services/checkoutService');

const checkout = Router();

checkout.post('/', async (req, res) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    cart,
  } = req.body;
  try {
    const insertCheckout = await checkoutService.insertCheckout(
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      cart,
    );
    res.status(200).json(insertCheckout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = checkout;
