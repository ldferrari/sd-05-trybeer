const { Router } = require('express');
const rescue = require('express-rescue');
const profileService = require('../services/profileService');

const profileRouter = Router();

profileRouter.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const response = await profileService.update(id, name);
    return res.status(200).json(response);
  } catch (err) {
    if (err.code === 'not_found') {
      return res.status(404).json({ err });
    }
  }
}));

module.exports = profileRouter;
