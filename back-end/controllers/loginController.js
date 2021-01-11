const { Router } = require('express');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');

const loginService = require('../services/loginService');
const createToken = require('../services/createToken');

const loginRouter = Router();

loginRouter.post(
  '/',
  rescue(async (req, res) => {
    const { email, password } = req.body;

    const userLogin = await loginService.userLogin(email, password);
    if (!userLogin) return res.status(400).json({ message: 'Login failed' });

    const payload = {
      issuer: 'post-api',
      audience: 'identity',
      name: userLogin.name,
      email,
      role: userLogin.role,
    };

    const token = await createToken(payload);
    const user = jwt.decode(token);

    return res.status(200).json({ user, token });
  }),
);

module.exports = loginRouter;
