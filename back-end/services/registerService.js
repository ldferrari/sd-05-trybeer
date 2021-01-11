const userModel = require('../models/userModel');

const createUser = async (name, email, password, _role) => {
  const thisEmailAlreadyExists = await userModel.getByEmail(email);
  console.log(thisEmailAlreadyExists);
  if (thisEmailAlreadyExists) {
    throw new Error({ code: 'invalid_email', message: 'E-mail already in database.' });
  }
  if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
    throw new Error({ code: 'invalid_data', message: 'Registration failed!' });
  }
  // if (!role) return false;
  // console.log(name, email, password, role);
  // const newUser = await userModel.createUser(name, email, password, role);
  const getUser = await userModel.getByEmail(email);
  console.log('Novo usuario: ', getUser);
  return getUser;
};

module.exports = { createUser };
