const { Router } = require('express');

const service = require('../Service/profileService');

const userModel = require('../Models/userModel');

const profile = Router();

profile.put('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const { payload } = req;
    // O TOKEN ESTÁ SENDO VERIFICADO NO INDEX NA ROTA PROFILE.
    if (email !== payload.email) {
      return res.status(401).json({ message: 'Operação proíbida.' });
    }
    const newName = await service.update(name, email);

    // const emailExists = await userModel.getByEmail(email);

    if (newName.error) {
      return res.status(newName.statusCode).json({ message: newName.message });
    }
    return res.status(200).json({ user: { name, email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

profile.get('/', async (req, res) => {
  try {
    const { email } = req.payload;
    const emailExists = await userModel.getByEmail(email);
    delete emailExists.password;
    console.log(emailExists);
    return res.status(200).json({ user: emailExists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = profile;
