const userModel = require('../models/userModel');

// class CodeError extends Error {
//   constructor(message, code) {
//     super(message);
//     this.code = code;
//   }
// }

const createUser = async (name, email, password, role) => {
  const thisEmailAlreadyExists = await userModel.getByEmail(email);
  // if (thisEmailAlreadyExists) {
  //   throw new CodeError('invalid_email', 'E-mail already in database.');
  // }
  // if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
  //   throw new CodeError('invalid_data', 'Registration failed!');
  // }
  if (thisEmailAlreadyExists) {
    throw new Error('invalid_email');
  }

  if (typeof name !== 'string' || typeof email !== 'string' || password.length < 6) {
    throw new Error('invalid_data');
  }
  // if (thisEmailAlreadyExists) {
  // return {
  //   error: true,
  //   code: 'not_found',
  //   message: `Batata with ID ${id} was not found`
  //   }
  // }
  console.log(`${email} doesn't exist`);
  const newUser = await userModel.createUser(name, email, password, role);
  return newUser;
};

module.exports = { createUser };
