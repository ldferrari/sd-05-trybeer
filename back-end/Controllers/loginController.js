const { Router } = require('express');

const User = require('../Models/userModel');

const emailMiddleware = require('../Middlewares/emailMiddleware');

const { createToken } = require('../Middlewares/webTokenMiddleware');

const login = Router();

login.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: 'Todos os campos devem ser preenchidos!' });
    }
    const validatEmail = emailMiddleware.validateEmail(email);
    if (!validatEmail) {
      return res.status(401).json({ message: 'Email inválido.' });
    }
    if (password.length < 6) {
      return res.status(401).json({ message: 'Senha inválida.' });
    }
    const findUser = await User.getByEmail(email);
    // console.log(findEmail);
    if (!findUser) {
      return res.status(401).json({ message: 'Email não encontrado.' });
    }
    if (findUser.password !== password ) {
      return res.status(401).json({ message: 'Email e/ou password incorretos.', ok:false });
    }
    const token = createToken({
      email,
      role: findUser.role,
      iss: 'post_api',
    });
    res.status(200).json({ token, role: findUser.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = login;
