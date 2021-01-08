const { Router } = require('express');
const rescue = require('express-rescue');
const registerService = require('../services/registerServices');

const register = Router();

register.post('/', rescue(async (req, res, next) => {
  const user = await registerService.create(req.body);
  if (user.error) {
    return next(user);
  }
  res.status(201).json(user);
}));

module.exports = register;
