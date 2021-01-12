const model = require('../models/usersModel');

const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const regexEmail = /\S+@\S+\.\S+/;

const createUser = async (newUser) => {
  const { name, email, password, role } = newUser;

  if (!name.match(regexName) || name.length < 12) {
    const err = { err: { code: 404, message: 'name format invalid' } };
    throw err;
  }

  if (!email.match(regexEmail)) {
    const err = { err: { code: 404, message: 'email format invalid' } };
    throw err;
  }

  console.log(password);

  if (toString(password).length < 6) {
    const err = { err: { code: 404, message: 'password format invalid' } };
    throw err;
  }

  const emailExists = await model.logIn(email);

  if (emailExists.length > 0) {
    return { message: 'E-mail already in database' };
  }

  const createdUser = await model.createUser(name, email, password, role);

  if (!createdUser) {
    const err = { err: { code: 401, message: 'error' } };
    throw err;
  }

  return createdUser;
};

const logIn = async (email, password1) => {
  const userFound = await model.logIn(email);

  if (!userFound || userFound.length === 0) {
    const err = { err: { code: 404, message: 'user email do not exist' } };
    throw err;
  }

  if (password1 !== userFound[0].password) {
    const err = { err: { code: 401, message: 'password incorrect' } };
    throw err;
  }

  const { id, password, ...user } = userFound[0];

  // console.log(user)
  return user;
};

const updateUserName = async (name, email) => {
  const newName = await model.updateUserName(name, email);
  const err1 = { err: { code: 404, message: 'name format invalid' } };
  if (!name.match(regexName) || name.length < 12) throw err1;
  if (!newName) {
    const err = { err: { code: 404, message: 'operation fail' } };
    throw err;
  }
  return newName;
};

// logIn('tryber@trybe.com.br', '123456');

module.exports = {
  createUser,
  logIn,
  updateUserName,
};
