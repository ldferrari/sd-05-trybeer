const userModel = require('../models/userModel');

const createUser = async (name, email, password, role) => {
  const thisEmailAlreadyExists = await userModel.getByEmail(email);
  if (thisEmailAlreadyExists) {
    throw { code: 'invalid_email', message: 'E-mail already in database.' };
  }
  if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
    throw { code: 'invalid_data', message: 'Registration failed!' };
  }
  // if (!role) return false;

  const newUser = await userModel.createUser(name, email, password, role);
  return newUser;
};

module.exports = { createUser };
