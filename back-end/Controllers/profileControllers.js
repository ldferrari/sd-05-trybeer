const { Router } = require('express');

const service = require('../Service/profileService');

const userModel = require('../Models/userModel');

const profile = Router();

profile.put('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    // O TOKEN ESTÁ SENDO VERIFICADO NO INDEX NA ROTA PROFILE.
    const newName = await service.create(name);
    const emailExists = await userModel.getByEmail(email);

    if (!emailExists) {
      return res.status(400).json({ message: 'Email inválido' });
    }
    if (newName.error) {
      return res.status(newName.statusCode).json({ message: newName.message });
    }

    res.status(200).json({ user: { name, email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = profile;
