const { Router } = require('express');
const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const login = Router();

login.post(
  '/',
  rescue(async (req, res, next) => {
    const user = await loginService.validationUser(req.body);
    if (user.error) {
      return next(user);
    }
    res.status(201).json(user);
  }),
);

module.exports = login;
