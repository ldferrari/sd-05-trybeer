const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const jwt = require('../auth/jwt.auth');
const userModel = require('../models/user.model');

const LOGIN_SCHEMA = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(3)
    .max(64)
    .required(),
});

const REGISTER_SCHEMA = Joi.object({
  email: Joi
    .string()
    .email()
    .required(),
  name: Joi
    .string()
    .min(3)
    .max(64)
    .required(),
  password: Joi
    .string()
    .min(3)
    .max(64)
    .required(),
  role: Joi
    .string()
    .required(),
});

const login = rescue(async (req, _res, next) => {
  const { error } = LOGIN_SCHEMA.validate(req.body);
  const user = await userModel.findUserbyEmailAndPassword(req.body);
  if (error) throw new Error(error);
  console.log(user);
  req.data = jwt.createToken(user);
  next();
});

const register = rescue(async (req, res, next) => {
  const { error } = REGISTER_SCHEMA.validate(req.body);
  if (error) throw new Error(error);
  // const emailAlreadyExists = await userModel.findByEmail(req.body.email);
  // if (emailAlreadyExists) throw new Error("Email já existe");
  await userModel.createUser(req.body);
  req.data = 'usuario criado com sucesso';
  next();
});

module.exports = {
  login,
  register,
};
