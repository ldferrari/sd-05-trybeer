const { Router } = require('express');
const rescue = require('express-rescue');
/* const profileModel = require('../models/profileModel'); */

const profileRouter = Router();

profileRouter.get('/', rescue(async (_req, res) => {
  await profileModel.update();

  return res.status(200).json('Hello World');
}));

module.exports = profileRouter;
