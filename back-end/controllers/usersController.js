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

router.get('/', async (req, res) => {
  const { email } = req.body;
  const user = await service.checkUser(email);
  if (user.error) {
    return res.status(user.statusCode).json({ message: user.message });
  }
  return res.status(200).json(user);
});

router.post('/register', async (req, res) => {
  const { name, email, password, checkbox } = req.body;
  const role = await service.createUser(name, email, password, checkbox);

  if (role.error) {
    res.status(role.statusCode).json({ message: role.message });
  }

  const payload = {
    issuer: 'post-api',
    audience: 'identity',
    userData: email,
  };

  const token = await createJWT(payload);

  res.status(201).json({ role, token });
});

module.exports = router;
