const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const jwt = require('../auth/jwt.auth');

const LOGIN_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(64).required(),
});

const login = rescue((req, _res, next) => {
  const { error } = LOGIN_SCHEMA.validate(req.body);
  // processo do DB
  req.data = jwt.createToken('Ola mundo');
  if (error) throw new Error(error);
  next();
});

module.exports = {
  login,
};
