const { Router } = require('express');
const rescue = require('express-rescue');
const registerService = require('../services/registerService');

const registerRouter = Router();

registerRouter.post(
  '/',
  rescue(async (req, res) => {
    const { name, email, password, role } = req.body;
    const newUser = await registerService.createUser(name, email, password, role);

    if (err.code === 'invalid_email') {
      return res.status(400).json({ message: 'E-mail already in database.' });
    }

    if (err.code === 'invalid_data') {
      return res.status(400).json({ message: 'Registration failed!' });
    }

    return newUser
      ? res.status(200).json(newUser)
      : res.status(500).json({ message: 'Something went wrong!' });
  }),
);

module.exports = registerRouter;
