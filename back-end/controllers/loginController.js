const { Router } = require('express');
const rescue = require('express-rescue');

const loginService = require('../services/loginService');
const createToken = require('../services/createToken');

const loginRouter = Router();

loginRouter.post(
  '/',
  rescue(async (req, res) => {
    const { email, password } = req.body;

    const userLogin = await loginService.userLogin(email, password);
    console.log(userLogin);
    if (!userLogin) return res.status(400).json({ message: 'Login failed' });

    const payload = {
      issuer: 'post-api',
      audience: 'identity',
      userData: email,
    };

    const token = await createToken(payload);
    return res.status(200).json({ token });
  }),
);

module.exports = loginRouter;
