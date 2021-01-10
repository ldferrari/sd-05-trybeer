const { Router } = require('express');

const createJWT = require('../auth/createJWT');
const service = require('../services/loginService');

const login = Router();

login.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(400).json({ message: 'Email or password not informed' });
  }

  const payload = {
    issuer: 'post-api',
    audience: 'identity',
    userData: email,
  };

  const token = await createJWT(payload);

  const user = await service.validateLog(email, password);

  if (user.error) {
    return res.status(404).json({ message: user.message });
  }
  return res.status(200).json({ role: user.role, name: user.name, token });
});

module.exports = login;
