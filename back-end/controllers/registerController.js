const { Router } = require('express');
const rescue = require('express-rescue');
const registerService = require('../services/registerService');

const registerRouter = Router();

registerRouter.post(
  '/',
  rescue(async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await registerService.createUser(name, email, password, role);

    return newUser
      ? res.status(400).json({ message: 'Registration failed!' })
      : res.status(200).json(newUser);
  }),
);

module.exports = registerRouter;
