const { Router } = require('express');

const service = require('../services/usersService');
const createJWT = require('../auth/createJWT');

const router = Router();
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const payload = {
    issuer: 'post-api',
    audience: 'identity',
    userData: email,
  };

  const tok = await createJWT(payload);
  const user = await service.validateLog(email, password);
  // console.log(`@userController file -> role: ${user}`);
  if (user.error) {
    if (user.code === 'invalid_info') {
      return res.status(404).json({ message: user.message });
    }
  }
  return res.status(200).json({ role: user, token: tok });
});

module.exports = router;
