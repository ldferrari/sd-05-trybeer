const { Router } = require('express');
const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const loginRouter = Router();

// Confirmar se a rota é LOGIN
loginRouter.post(
  '/login',
  rescue(async (req, res) => {
    const { name, email, password, role } = req.body;
    const newLogin = await loginService.createUser(name, email, password, role);
    return !newLogin
      ? res.status(400).json({ message: 'login failed' })
      : res.status(200).json(newLogin);
  }),
);
