const { Router } = require('express');
const rescue = require('express-rescue');
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

sales.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await salesService.getSale(id);
    return res.status(200).json(...sale);
  } catch (err) {
    if (err.code === 'not_found') {
      res.status(404).json({ err });
    }
  }
}));

module.exports = sales;
