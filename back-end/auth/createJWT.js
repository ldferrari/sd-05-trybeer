const jwt = require('jsonwebtoken');

const secret = 'grupo6';

function createToken(payload) {
  const headers = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, headers);
  return token;
}

module.exports = createToken;
