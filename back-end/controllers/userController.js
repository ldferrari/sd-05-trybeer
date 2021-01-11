const { Router } = require('express');

const userService = require('../services/userService');
const authToken = require('../middlewares/authToken');

const usersRouter = Router();

usersRouter.put('/name', authToken, async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ message: 'Invalid data' });

  await userService.updateUser(name, email);

  return res.status(200).json({ message: 'Name updated successfully!' });
});

module.exports = usersRouter;
