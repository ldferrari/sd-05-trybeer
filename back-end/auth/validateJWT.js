// const jwt = require('jsonwebtoken');

// const secret = 'grupo6';

// const { userModel } = require('../models');

// const validateJWT = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Missing authorization token' });
//   try {
//     const payload = jwt.verify(token, secret);
//     const user = await userModel.checkUser();
//   } catch (erro) {
//     console.log(erro);
//   }
// }
