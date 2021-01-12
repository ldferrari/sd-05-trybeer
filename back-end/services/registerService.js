const userModel = require('../models/userModel');

class CodeError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const createUser = async (name, email, password, role) => {
  const thisEmailAlreadyExists = await userModel.getByEmail(email);
  if (thisEmailAlreadyExists) {
    throw new CodeError({ code: 'invalid_email', message: 'E-mail already in database.' });
  }
  if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
    throw new CodeError({ code: 'invalid_data', message: 'Registration failed!' });
  }
  const newUser = await userModel.createUser(name, email, password, role);
  return newUser;
};

module.exports = { createUser };
