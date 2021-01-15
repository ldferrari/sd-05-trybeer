const { Router } = require('express');
const salesService = require('../services/salesService');

const sales = Router();

sales.get('/', async (req, res) => {
  try {
    const getAllSales = await salesService.getAllSales(req.body.id);
    res.status(200).json(getAllSales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = sales;
