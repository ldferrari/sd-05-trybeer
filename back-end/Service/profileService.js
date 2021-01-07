const model = require('../Models/profileModel');

const create = async (name) => {
  if (!/^[A-Za-z \s]{12,}$/.test(name)) {
    return {
      error: true,
      code: 'Nome inválido',
      message: 'O nome deve conter, no mínimo, 12 letras, sem números ou caracteres especiais',
      statusCode: 401,
    };
  }
  return model.create(name);
};

module.exports = {
  create,
};
