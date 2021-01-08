const { Router } = require('express');
const rescue = require('express-rescue');
const userModel = require('../models/userModel');

const apiRouter = Router();

apiRouter.get(
  '/users',
  rescue(async (_req, res) => {
    const allUsers = await userModel.getAllUsers();

    return allUsers
      ? res.status(200).json(allUsers)
      : res.status(404).json({ message: 'Not found!' });
  }),
);

module.exports = apiRouter;
