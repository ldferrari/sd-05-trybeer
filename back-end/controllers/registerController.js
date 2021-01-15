const { Router } = require('express');
const registerService = require('../services/registerService');

// https://bit.ly/2VxAplp
const registerRouter = Router();

registerRouter.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = await registerService.createUser(name, email, password, role);

    res.status(200).json(newUser);
  } catch (err) {
    if (err.message === 'invalid_email') {
      console.log(err);
      return res.status(422).json({ message: 'E-mail already in database.' });
    }

    if (err.message === 'invalid_data') {
      return res.status(400).json({ message: 'Registration failed!' });
    }

    res.status(500).json({ message: 'Something went wrong!' });
  }
});

module.exports = registerRouter;
