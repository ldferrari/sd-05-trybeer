const { Router } = require('express');
const salesServices = require('../services/sales.services');

const sales = Router();

sales.get('/', salesServices.getAllSales, (req, res) => { // todas as vendas
  res.status(200).json(req.data);
});

sales.get('/user/:id', salesServices.getSaleById, (req, res) => { // vendas especificas de um usuário
  res.status(200).json(req.data);
});

sales.post('/', salesServices.addSale, (req, res) => { // adicionar um pedido
  res.status(201).json(req.data);
});

sales.get('/:id', salesServices.detailByOrderId, (req, res) => { // obtendo os detalhes de uma venda
  res.status(200).json(req.data);
});

sales.put('/status', salesServices.updateStatus, (req, res) => { // update no status do pedido
  res.status(200).json(req.data);
});

module.exports = sales;
