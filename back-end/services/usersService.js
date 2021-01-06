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
  return user;
};
const checkUser = async (email) => {
  const user = await model.checkUser(email);
  if (!user) {
    return {
      error: true,
      code: 'user_exists',
      message: 'This email is already in use',
    };
  }
};
module.exports = {
  validateLog,
  checkUser,
};
