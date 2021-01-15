const { Router } = require('express');
const orderDetailsService = require('../services/orderDetailsService');

const orderDetails = Router();

orderDetails.get('/', async (req, res) => {
    console.log('cheguei')
  try {
    const getOrderDetails = await orderDetailsService.getOrderDetails(
      req.body.sale_id
    );
    res.status(200).json(getOrderDetails);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = orderDetails;
