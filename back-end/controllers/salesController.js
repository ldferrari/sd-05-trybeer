const { Router } = require('express');
const salesService = require('../services/salesService');
const salesModel = require('../models/salesModel');

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

sales.get('/:id', async (req, res) => {
const { id } = req.body;

  try {
    const getSale = await salesModel.getSale(id);
    res.status(200).json(getSale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = sales;
