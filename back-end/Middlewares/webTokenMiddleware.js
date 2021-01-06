const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
// const { password: _, ...userWithoutPassword } = findUser;
/* const payload = {
  // Issuer => Quem emitiu o token
  iss: 'post_api',
  // Audience => Quem deve aceitar este token
  aud: 'identify',
  // Subject => A quem pertence esse token
  // sub: user._id,
  userData: userWithoutPassword,
}; */
const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = createToken;
