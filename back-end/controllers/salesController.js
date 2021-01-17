const { Router } = require('express');
const rescue = require('express-rescue');

const salesService = require('../services/salesService');

const salesRouter = Router();

salesRouter.post(
  '/',
  rescue(async (req, res) => {
    const { body } = req;

    const newSale = await salesService.createSale(body);
    return newSale
      ? res.status(200).json({ message: 'Order placed succesfully!' })
      : res.status(400).json({ message: 'Order was misplaced!' });
  }),
);

salesRouter.get(
  '/',
  rescue(async (req, res) => {
    const userSales = await salesService.getSalesById(req.query);

    return userSales
      ? res.status(200).json(userSales)
      : res.status(400).json({ message: 'No orders found!' });
  }),
);

salesRouter.get(
  '/admin',
  rescue(async (req, res) => {
    const { role } = req.headers;
    const sales = salesService.getAdminSales();

    return role === 'administrator'
      ? res.status(200).json(sales)
      : res.status(401).json({ message: 'Unauthorized access' });
  }),
);

module.exports = salesRouter;
