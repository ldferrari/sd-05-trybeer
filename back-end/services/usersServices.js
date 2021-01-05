const model = require('../models/usersModel');

const createUser = async (newUser) => {
  const { name, email, password } = newUser;

  if (typeof name !== 'string') return false;

  if (typeof email !== 'string') return false;

  if (password.length < 6) return false;

  return true;
};

module.exports = {
  createUser,
};
