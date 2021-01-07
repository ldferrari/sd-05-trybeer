const model = require('../models/usersModel');

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

// const updateUser = async (newName, email) => {
//   await model.updateUser(newName, email);
// };

module.exports = {
  checkUser,
  createUser,
};
