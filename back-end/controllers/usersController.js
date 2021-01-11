const { Router } = require('express');

const service = require('../services/usersService');
const createJWT = require('../auth/createJWT');
const validateJWT = require('../auth/validateJWT');

const users = Router();

users.post('/', async (req, res) => {
  const { email } = req.body;
  const user = await service.checkUser(email);
  if (user.error) {
    return res.status(user.statusCode).json({ message: user.message });
  }
  return res.status(200).json(user);
});

users.post('/register', async (req, res) => {
  const { name, email, password, checkbox } = req.body;

  if (!name || !email || !password) return res.status(400).json({ message: 'Invalid data' });

  const role = await service.createUser(name, email, password, checkbox);

  if (role.error) {
    return res.status(role.statusCode).json({ message: role.message });
  }

  const payload = {
    issuer: 'post-api',
    audience: 'identity',
    userData: email,
  };

  const token = await createJWT(payload);

  return res.status(201).json({ role, token });
});

users.put('/update', validateJWT, async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ message: 'Invalid data' });

  await service.updateUser(name, email);

  return res.status(200).json({ message: 'User updated successfully' });
});

users.get('/profile', validateJWT, async (req, res) => {
  const emailInput = req.query.email;
  const user = await service.getUserByEmail(emailInput);
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(400).json({ message: 'jwt malformed' });
});

module.exports = users;
