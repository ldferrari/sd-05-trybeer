const { Router } = require('express');

const jwt = require('jsonwebtoken');

const service = require('../services/usersServices');

const secret = 'batatinhafrita';

const users = Router();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

users.get('/login', async (req, res) => {
  try {
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
    await service.createUser(req.body);
    res.status(201).json({ message: 'Created' });
  } catch (e) {
    console.log(e);
    res.status(e.err.code).json({ message: e.err.message });
  }
});

users.put('/profile', async (req, res) => {
  try {
    const { name, email } = req.body;
    await service.updateUserName(name, email);
    res.status(200).json({ message: 'name updated' });
  } catch (e) {
    console.log(e);
    res.status(e.err.code).json({ message: e.err.message });
  }
});

module.exports = users;
