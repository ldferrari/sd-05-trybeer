const { Router } = require('express');

const jwt = require('jsonwebtoken');

const service = require('../services/usersServices');

const secret = 'batatinhafrita';

const users = Router();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

users.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await service.logIn(email, password);
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(200).json({ ...user, token });
  } catch (e) {
    console.log(e);
    res.status(e.err.code).json({ message: e.err.message });
  }
});

users.post('/register', async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await service.createUser(req.body);
    if (user.message === 'E-mail already in database') {
      return res.status(201).json({ message: 'E-mail already in database' });
    }
    const token = jwt.sign({ data: { name, email, role } }, secret, jwtConfig);
    return res.status(201).json({ name, email, role, token });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

users.put('/profile', async (req, res) => {
  try {
    const { name, email } = req.body;
    await service.updateUserName(name, email);
    res.status(200).json({ message: 'name updated', name });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = users;
