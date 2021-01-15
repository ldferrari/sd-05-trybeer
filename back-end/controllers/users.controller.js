const { Router } = require('express');
const userServices = require('../services/users.service');

const user = Router();

user.get('/', (_req, res) => {
  res.status(200).json({});
});

// endpoint de registro
user.post('/register', userServices.register, (req, res) => {
  res.status(201).json(req.data);
});

user.post('/update', userServices.update, (req, res) => {
  res.status(200).json(req.data);
});

user.post('/', userServices.login, (req, res) => {
  res.status(200).json(req.data);
});

module.exports = user;
