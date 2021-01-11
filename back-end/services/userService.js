const userModel = require('../models/userModel');

const updateUser = async (editName, email) => userModel.updateUser(editName, email);

module.exports = { updateUser };
