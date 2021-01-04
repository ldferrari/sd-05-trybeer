const { Router } = require('express');
const userServices = require('../services/users.service');

const user = Router();

user.get('/', (_req, res) => {
  res.status(200).json({});
});

// endpoint de registro
user.post('/register', (_req, res) => {
  res.status(201).json({});
});

user.post('/', userServices.login, (req, res) => {
  res.status(200).json(req.data);
});

module.exports = user;
