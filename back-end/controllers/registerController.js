const { Router } = require('express');
const rescue = require('express-rescue');
const registerService = require('../services/registerServices');

const register = Router();

register.get('/', rescue(async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  const user = await registerService.getByEmail(email);
  // console.log(user)
  res.status(200).json(user);
}));

module.exports = register;
