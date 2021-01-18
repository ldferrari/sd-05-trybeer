const model = require('../Models/admProfileModel');

const getProfile = async (userId) => model.getProfile(userId);

module.exports = {
  getProfile,
};
