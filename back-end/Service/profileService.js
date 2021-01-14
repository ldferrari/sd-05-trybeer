const model = require('../Models/profileModel');

const update = async (name, email) => {
  if (!/^[A-Za-z \s]{12,}$/.test(name)) {
    return {
      error: true,
      code: 'Nome inválido',
      message: 'O nome deve conter, no mínimo, 12 letras, sem números ou caracteres especiais',
      statusCode: 401,
    };
  }
  return model.update(name, email);
};

module.exports = {
  update,
};
