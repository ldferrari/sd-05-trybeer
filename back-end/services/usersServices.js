const model = require('../models/usersModel');

const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const regexEmail = /\S+@\S+\.\S+/;

const createUser = async (newUser) => {
  const { name, email, password, role } = newUser;

  if (!name.match(regexName) || name.length < 12) {
    throw new Error({ err: { code: 404, message: 'name format invalid' } });
  }

  if (!email.match(regexEmail)) {
    throw new Error({ err: { code: 404, message: 'email format invalid' } });
  }

  if (typeof password !== 'number' || password.length < 6) {
    throw new Error({ err: { code: 404, message: 'password format invalid' } });
  }

  const createdUser = await model.createUser(name, email, password, role);

  if (!createdUser) {
    throw new Error({ err: { code: 401, message: 'error' } });
  }

  return createdUser;
};

const logIn = async (email, password1) => {
  const userFound = await model.logIn(email);

  if (!userFound) {
    throw new Error({ err: { code: 404, message: 'user email do not exist' } });
  }

  if (password1 !== userFound[0].password) {
    throw new Error({ err: { code: 401, message: 'password incorrect' } });
  }

  const { id, password, ...user } = userFound[0];

  // console.log(user)
  return user;
};

const updateUserName = async (name, email) => {
  const newName = await model.updateUserName(name, email);
  if (!name.match(regexName) || name.length < 12) {
    throw new Error({ err: { code: 404, message: 'name format invalid' } });
  }
  if (!newName) {
    throw new Error({ err: { code: 404, message: 'operation fail' } });
  }
  return newName;
};

// logIn('tryber@trybe.com.br', '123456');

module.exports = {
  createUser,
  logIn,
  updateUserName,
};
