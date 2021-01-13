const { Router } = require('express');

const service = require('../Service/checkoutService');

const checkout = Router();

checkout.post('/', async (req, res) => {
  /* const pedido = {
    products: [
      { productId, name, quantity, price },
      { productId, name, quantity, price },
    ],
    userData: { deliveryAddress, deliberyNumber },
  }; */
  try {
    const { products, userData } = req.body;
    const { deliveryAddress, deliveryNumber } = userData;
    const { id } = req.payload;
    const order = await service.checkout(
      products,
      deliveryAddress,
      deliveryNumber,
      id,
    );
    if (order && order.error) {
      return res.status(order.statusCode).json({ message: order.message });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = checkout;
