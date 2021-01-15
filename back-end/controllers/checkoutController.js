const { Router } = require('express');
const checkoutService = require('../services/checkoutService');

const checkout = Router();

checkout.post('/', async (req, res) => {
    const {
      user_id,
      total_price,
      delivery_address,
      delivery_number,
      cart
    } = req.body;
  try {
    const insertCheckout = await checkoutService.insertCheckout(
      user_id,
      total_price,
      delivery_address,
      delivery_number,
      cart
    );
    res.status(200).json(insertCheckout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = checkout;
