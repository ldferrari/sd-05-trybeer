const model = require('../Models/checkoutModel');

const userModel = require('../Models/userModel');

const validateEmail = (email) => {
  const regexEmail = RegExp(/\S+@\S+\.\S+/, 'i');
  return regexEmail.test(email);
};

const getCheckout = async (email, password) => {
  const emailExists = await userModel.getByEmail(email);
  if (!emailExists) {
    return {
      error: true,
      code: 'Email inválido',
      message: 'Email não encontrado.',
      statusCode: 401,
    };
  }

  if (!validateEmail) {
    return {
      error: true,
      code: 'Email inválido',
      message: 'Email inválido. Um email válido possui o formato <nome>@<domínio>',
      statusCode: 400,
    };
  }

  if (password.length < 6) {
    return {
      error: true,
      code: 'Email inválido',
      message: 'Email ou senha incorreto.',
      statusCode: 401,
    };
  }
  return model.getCheckout(email, password);
};

module.exports = {
  getCheckout,
};
