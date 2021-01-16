const { Router } = require('express');

const userModel = require('../Models/userModel');

const emailMiddleware = require('../Middlewares/emailMiddleware');

const { createToken } = require('../Middlewares/webTokenMiddleware');

const login = Router();

login.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: 'Todos os campos devem ser preenchidos!', ok: false });
    }
    const validatEmail = emailMiddleware.validateEmail(email);
    if (!validatEmail) {
      return res.status(401).json({ message: 'Email inválido.', ok: false });
    }
    if (password.length < 6) {
      return res.status(401).json({ message: 'Senha inválida.', ok: false });
    }
    const findUser = await userModel.getByEmail(email);
    // console.log(findEmail);
    if (!findUser) {
      return res.status(401).json({ message: 'Email não encontrado.', ok: false });
    }
    if (findUser.password !== password) {
      return res.status(401).json({ message: 'Email e/ou password incorretos.', ok: false });
    }
    const token = createToken({
      id: findUser.id,
      email,
      role: findUser.role,
      iss: 'post_api',
    });
    res.status(200).json({ token, role: findUser.role, ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.', ok: false });
  }
});

module.exports = login;
