const model = require('../models/usersModel');

const validateLog = async (email, password) => {
  const user = await model.validateLog(email, password);

  if (user === undefined) {
    return {
      error: true,
      code: 'invalid_info',
      message: 'Email or password invalid',
    };
  }
  return user.role;
};

const checkUser = async (email) => {
  const user = await model.checkUser(email);
  if (user[0][0] !== undefined) {
    return {
      error: true,
      statusCode: 409,
      message: 'This email is already registered',
    };
  }
  return false;
};

const createUser = async (name, email, password, checkbox) => {
  const userExists = await checkUser(email);
  if (userExists.error) return userExists;

  if (!name || !email || !password) {
    return {
      error: true,
      message: 'Missing information, please try again.',
      statusCode: 400,
    };
  }
  const role = checkbox ? 'administrator' : 'client';
  await model.createUser(name, email, password, role);
  return role;
};

module.exports = {
  validateLog,
  checkUser,
  createUser,
};
