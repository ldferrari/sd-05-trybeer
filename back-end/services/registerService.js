const jwt = require('jsonwebtoken');

const userModel = require('../models/userModel');
const createToken = require('./createToken');

const createUser = async (name, email, password, role) => {
  const thisEmailAlreadyExists = await userModel.getByEmail(email);

  if (thisEmailAlreadyExists) {
    throw new Error('invalid_email');
  }

  if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
    throw new Error('invalid_data');
  }

  const payload = {
    issuer: 'post-api',
    audience: 'identity',
    name,
    email,
    role,
  };

  await userModel.createUser(name, email, password, role);

  const token = await createToken(payload);
  const user = jwt.decode(token);

  return { user, token };
};

module.exports = { createUser };
