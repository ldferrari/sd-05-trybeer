const crypto = require('crypto');
const model = require('../models/loginModel.js');

const emailValido = (email) => {
  const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexMail.test(String(email).toLowerCase());
};

const validationUser = async (body) => {
  const { email, password } = body;
  const [user] = await model.getUser(email);
  if (!emailValido(email)) {
    return {
      error: true,
      code: 'invalid_data',
      message: "O campo e-mail deve ter o formato 'email@email.com'",
    };
  }

  if (password === '' || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'O campo "senha" é obrigatório',
    };
  }

  if (String(password).length < 6) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'A senha deve possuir 6 ou mais caracteres',
    };
  }

  if (user === undefined) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Usuário não cadastrado',
    };
  }

  if (user.password !== password) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Senha incorreta',
    };
  }

  const token = crypto.randomBytes(8).toString('hex');
  return { token, id: user.id, name: user.name, email: user.email, role: user.role, message: 'Token gerado' };
};

module.exports = {
  validationUser,
};
