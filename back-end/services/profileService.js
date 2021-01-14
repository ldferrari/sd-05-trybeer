const models = require('../models/profileModel');

const update = async (id, name) => {
  const userExists = await models.getById(id);

  if (userExists.length < 1) {
    throw new Error({
      code: 'not_found',
      message: 'User not found',
    });
  }

  await models.update(id, name);
  return ({ id, name, message: 'success' });
};

module.exports = {
  update,
};
