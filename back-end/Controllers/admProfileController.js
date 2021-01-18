const { Router } = require('express');

const service = require('../Service/admProfileService');

const admProfile = Router();

admProfile.get('/', async (req, res) => {
  try {
    const { id } = req.payload;
    const profile = await service.getProfile(id);
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = admProfile;
